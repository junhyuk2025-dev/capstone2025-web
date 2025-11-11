import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Users, FileText, Video, BarChart3, Settings, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

export function TeamDashboard() {
  const teamMembers = [
    { name: "Sarah Kim", role: "Team Leader", contribution: 92, avatar: "SK" },
    { name: "John Park", role: "Developer", contribution: 85, avatar: "JP" },
    { name: "Emily Lee", role: "Designer", contribution: 88, avatar: "EL" },
    { name: "Mike Chen", role: "Developer", contribution: 78, avatar: "MC" },
  ];

  const contributionData = [
    { name: "Sarah", commits: 45, tasks: 12, meetings: 8 },
    { name: "John", commits: 38, tasks: 10, meetings: 7 },
    { name: "Emily", commits: 32, tasks: 11, meetings: 8 },
    { name: "Mike", commits: 28, tasks: 8, meetings: 6 },
  ];

  const radarData = [
    { subject: "Code", A: 92, B: 85, fullMark: 100 },
    { subject: "Design", A: 75, B: 95, fullMark: 100 },
    { subject: "Meetings", A: 95, B: 88, fullMark: 100 },
    { subject: "Documentation", A: 85, B: 78, fullMark: 100 },
    { subject: "Testing", A: 88, B: 82, fullMark: 100 },
  ];

  const tasks = [
    { title: "Implement user authentication", assignee: "John Park", status: "In Progress", priority: "High" },
    { title: "Design landing page", assignee: "Emily Lee", status: "Review", priority: "Medium" },
    { title: "Write API documentation", assignee: "Mike Chen", status: "To Do", priority: "Low" },
    { title: "Set up CI/CD pipeline", assignee: "Sarah Kim", status: "Done", priority: "High" },
  ];

  const meetings = [
    { title: "Sprint Planning", date: "Nov 15, 2025", time: "10:00 AM", duration: "1 hour" },
    { title: "Design Review", date: "Nov 16, 2025", time: "2:00 PM", duration: "30 min" },
    { title: "Demo Preparation", date: "Nov 18, 2025", time: "3:00 PM", duration: "1 hour" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>DevTeam Alpha</h2>
          <p className="text-gray-600">Software Engineering Project • Fall 2025</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Settings className="w-4 h-4" />
          Team Settings
        </Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="tasks">Tasks/Kanban</TabsTrigger>
          <TabsTrigger value="meetings">Meeting Notes</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="contribution">Contribution</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">4</div>
                <p className="text-xs text-gray-500">All active</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Tasks Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">23/35</div>
                <p className="text-xs text-gray-500">66% complete</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Next Deadline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">4d</div>
                <p className="text-xs text-gray-500">Sprint 2 Demo</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Avg Contribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">86%</div>
                <p className="text-xs text-gray-500">Above target</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">{member.name}</p>
                          <p className="text-xs text-gray-500">{member.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{member.contribution}%</p>
                        <p className="text-xs text-gray-500">contribution</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Invite Members
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Meetings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {meetings.map((meeting, idx) => (
                    <div key={idx} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm">{meeting.title}</p>
                        <Badge variant="outline" className="text-xs">{meeting.duration}</Badge>
                      </div>
                      <p className="text-xs text-gray-600">{meeting.date} • {meeting.time}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 gap-2">
                  <Video className="w-4 h-4" />
                  Start Video Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Project Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-7 gap-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-sm text-gray-600 p-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 28 }, (_, i) => (
                    <div
                      key={i}
                      className={`text-center p-3 border rounded-lg text-sm cursor-pointer hover:bg-blue-50 ${
                        [4, 11, 18].includes(i) ? "bg-blue-100 border-blue-300" : ""
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-sm">Deadline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-sm">Meeting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span className="text-sm">Review</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Task Board</CardTitle>
                <Button>Add Task</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <p className="text-sm">{task.title}</p>
                      <p className="text-xs text-gray-500 mt-1">Assigned to: {task.assignee}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "secondary"}>
                        {task.priority}
                      </Badge>
                      <Badge variant="outline">{task.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meetings">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4>Sprint Planning - Week 2</h4>
                    <span className="text-sm text-gray-500">Nov 8, 2025</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Discussed sprint goals and task assignments. Decided to focus on user authentication and database schema finalization.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Frontend</Badge>
                    <Badge variant="outline">Backend</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4>Design Review Session</h4>
                    <span className="text-sm text-gray-500">Nov 6, 2025</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Reviewed wireframes and mockups. Team approved the new color scheme and layout structure.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Design</Badge>
                    <Badge variant="outline">UI/UX</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Shared Files</CardTitle>
                <Button>Upload File</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Project_Proposal_v3.pdf", size: "2.4 MB", date: "Nov 10, 2025" },
                  { name: "Design_Mockups.fig", size: "8.1 MB", date: "Nov 9, 2025" },
                  { name: "Database_Schema.sql", size: "156 KB", date: "Nov 8, 2025" },
                  { name: "Meeting_Notes_Week2.docx", size: "45 KB", date: "Nov 8, 2025" },
                ].map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Download</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contribution" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contribution Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={contributionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="commits" fill="#3B82F6" name="Commits" />
                  <Bar dataKey="tasks" fill="#10B981" name="Tasks" />
                  <Bar dataKey="meetings" fill="#8B5CF6" name="Meetings" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skill Coverage Radar</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar name="Team Leader" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                  <Radar name="Member Avg" dataKey="B" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="fixed bottom-6 right-6 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm">Team Chat</h3>
          </div>
          <Badge variant="secondary" className="text-xs">3 new</Badge>
        </div>
        <div className="p-4 h-64 overflow-y-auto space-y-3">
          <div className="text-sm">
            <p className="text-xs text-gray-500 mb-1">Sarah Kim • 2:30 PM</p>
            <p className="text-gray-700">Just pushed the authentication module!</p>
          </div>
          <div className="text-sm">
            <p className="text-xs text-gray-500 mb-1">John Park • 2:45 PM</p>
            <p className="text-gray-700">Great work! I'll review it now.</p>
          </div>
          <div className="text-sm">
            <p className="text-xs text-gray-500 mb-1">Emily Lee • 3:00 PM</p>
            <p className="text-gray-700">Updated the design files in the shared folder</p>
          </div>
        </div>
        <div className="p-3 border-t border-gray-200">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
