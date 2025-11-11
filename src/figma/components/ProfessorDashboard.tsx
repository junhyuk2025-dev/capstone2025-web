import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Users, TrendingUp, AlertTriangle, FileText, Download } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function ProfessorDashboard() {
  const teams = [
    { name: "DevTeam Alpha", subject: "Software Engineering", members: 4, avgContribution: 86, status: "Good", alerts: 0 },
    { name: "Data Scientists", subject: "Machine Learning", members: 4, avgContribution: 91, status: "Excellent", alerts: 0 },
    { name: "Web Wizards", subject: "Web Development", members: 3, avgContribution: 78, status: "Good", alerts: 1 },
    { name: "Mobile Masters", subject: "Mobile App Dev", members: 4, avgContribution: 65, status: "Needs Attention", alerts: 2 },
    { name: "AI Innovators", subject: "Artificial Intelligence", members: 5, avgContribution: 88, status: "Good", alerts: 0 },
    { name: "Cloud Architects", subject: "Cloud Computing", members: 3, avgContribution: 72, status: "Fair", alerts: 1 },
  ];

  const alerts = [
    { team: "Mobile Masters", issue: "Low contribution from 1 member", severity: "High", date: "Nov 11, 2025" },
    { team: "Mobile Masters", issue: "Missed 2 consecutive meetings", severity: "Medium", date: "Nov 10, 2025" },
    { team: "Web Wizards", issue: "Deadline approaching with 40% incomplete", severity: "Medium", date: "Nov 11, 2025" },
    { team: "Cloud Architects", issue: "Low meeting attendance (60%)", severity: "Low", date: "Nov 9, 2025" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Professor Dashboard</h2>
          <p className="text-gray-600">Overview of all teams and projects - Fall 2025</p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Generate PDF Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Total Teams</CardTitle>
            <Users className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">6</div>
            <p className="text-xs text-gray-500">Across 4 subjects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Total Students</CardTitle>
            <Users className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">23</div>
            <p className="text-xs text-gray-500">All enrolled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Avg Contribution</CardTitle>
            <TrendingUp className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">80%</div>
            <p className="text-xs text-gray-500">+3% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Active Alerts</CardTitle>
            <AlertTriangle className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">4</div>
            <p className="text-xs text-gray-500">2 high priority</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Avg Contribution</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Alerts</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teams.map((team, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{team.name}</TableCell>
                  <TableCell>{team.subject}</TableCell>
                  <TableCell>{team.members}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-full max-w-[100px] h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            team.avgContribution >= 85 ? "bg-green-600" :
                            team.avgContribution >= 70 ? "bg-blue-600" :
                            "bg-orange-600"
                          }`}
                          style={{ width: `${team.avgContribution}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{team.avgContribution}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        team.status === "Excellent" ? "default" :
                        team.status === "Good" ? "secondary" :
                        team.status === "Fair" ? "outline" :
                        "destructive"
                      }
                    >
                      {team.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {team.alerts > 0 ? (
                      <Badge variant="destructive">{team.alerts}</Badge>
                    ) : (
                      <span className="text-sm text-gray-500">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Monitor</Button>
                      {team.alerts > 0 && (
                        <Button size="sm" variant="default">Intervene</Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert, idx) => (
                <div key={idx} className="p-3 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="text-sm">{alert.team}</p>
                      <p className="text-sm text-gray-600 mt-1">{alert.issue}</p>
                    </div>
                    <Badge 
                      variant={
                        alert.severity === "High" ? "destructive" :
                        alert.severity === "Medium" ? "default" :
                        "secondary"
                      }
                      className="text-xs"
                    >
                      {alert.severity}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">{alert.date}</p>
                    <Button size="sm" variant="ghost">Review</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Participation Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Overall Team Activity</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Meeting Attendance</span>
                  <span className="text-sm">78%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Submission Rate</span>
                  <span className="text-sm">92%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Collaboration Index</span>
                  <span className="text-sm">88%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600" style={{ width: "88%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Recent Submissions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { team: "Data Scientists", title: "ML Model Implementation", date: "Nov 11, 2025", score: "95/100" },
              { team: "DevTeam Alpha", title: "Sprint 2 Demo", date: "Nov 10, 2025", score: "88/100" },
              { team: "AI Innovators", title: "Research Paper Draft", date: "Nov 9, 2025", score: "Pending" },
              { team: "Web Wizards", title: "UI Prototype", date: "Nov 8, 2025", score: "92/100" },
            ].map((submission, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <p className="text-sm">{submission.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{submission.team} • {submission.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={submission.score === "Pending" ? "outline" : "secondary"}>
                    {submission.score}
                  </Badge>
                  <Button size="sm" variant="ghost">Review</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
