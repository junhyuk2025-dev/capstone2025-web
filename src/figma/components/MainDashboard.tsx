
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Users, FileText, TrendingUp, Clock, AlertCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function MainDashboard() {
  const upcomingDeadlines = [
    { title: "Software Engineering Project", task: "Sprint 2 Demo", due: "Nov 15, 2025", team: "DevTeam Alpha" },
    { title: "Database Design", task: "ER Diagram Submission", due: "Nov 18, 2025", team: "DB Warriors" },
    { title: "Web Development", task: "Final Presentation", due: "Nov 22, 2025", team: "Web Wizards" },
  ];

  const recentMessages = [
    { from: "Sarah Kim", message: "Updated the meeting notes for today", time: "10 min ago", team: "DevTeam Alpha" },
    { from: "John Park", message: "Uploaded new design mockups", time: "1 hour ago", team: "Web Wizards" },
    { from: "Prof. Lee", message: "Reminder: Submit interim reports", time: "2 hours ago", team: "All Teams" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2>Welcome back, Student!</h2>
        <p className="text-gray-600">Here's what's happening with your teams today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Active Teams</CardTitle>
            <Users className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">3</div>
            <p className="text-xs text-gray-500">+1 from last semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Upcoming Deadlines</CardTitle>
            <Clock className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">3</div>
            <p className="text-xs text-gray-500">Next: Nov 15</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Contribution Score</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">87%</div>
            <p className="text-xs text-gray-500">+5% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Pending Tasks</CardTitle>
            <FileText className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">7</div>
            <p className="text-xs text-gray-500">2 high priority</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, idx) => (
                <div key={idx} className="flex items-start justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <p className="text-sm">{deadline.title}</p>
                    <p className="text-xs text-gray-500">{deadline.task}</p>
                    <Badge variant="outline" className="mt-2 text-xs">{deadline.team}</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-orange-600">{deadline.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((msg, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm">
                    {msg.from.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm">{msg.from}</p>
                      <p className="text-xs text-gray-400">{msg.time}</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{msg.message}</p>
                    <Badge variant="secondary" className="mt-2 text-xs">{msg.team}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contribution Analysis (Last 30 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Commits & Updates</span>
                <span className="text-sm">72%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: "72%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Meeting Attendance</span>
                <span className="text-sm">95%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-600" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Task Completion</span>
                <span className="text-sm">85%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
