import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Users, Filter, Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function TeamMatchingPage() {
  const teams = [
    {
      name: "DevTeam Alpha",
      subject: "Software Engineering",
      members: 4,
      maxMembers: 5,
      matchPercentage: 95,
      skills: ["React", "Node.js", "MongoDB"],
      description: "Building a social media analytics platform",
    },
    {
      name: "Data Scientists",
      subject: "Machine Learning",
      members: 3,
      maxMembers: 4,
      matchPercentage: 88,
      skills: ["Python", "TensorFlow", "Data Analysis"],
      description: "Developing predictive models for student performance",
    },
    {
      name: "Web Wizards",
      subject: "Web Development",
      members: 3,
      maxMembers: 6,
      matchPercentage: 82,
      skills: ["Vue.js", "CSS", "UI/UX"],
      description: "Creating an interactive e-learning platform",
    },
    {
      name: "Mobile Masters",
      subject: "Mobile App Development",
      members: 2,
      maxMembers: 4,
      matchPercentage: 78,
      skills: ["React Native", "Firebase", "API"],
      description: "Campus navigation and event management app",
    },
    {
      name: "AI Innovators",
      subject: "Artificial Intelligence",
      members: 4,
      maxMembers: 5,
      matchPercentage: 75,
      skills: ["Python", "PyTorch", "NLP"],
      description: "Natural language processing for academic papers",
    },
    {
      name: "Cloud Architects",
      subject: "Cloud Computing",
      members: 3,
      maxMembers: 5,
      matchPercentage: 71,
      skills: ["AWS", "Docker", "Kubernetes"],
      description: "Scalable microservices architecture project",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Team Matching</h2>
          <p className="text-gray-600">Find the perfect team based on your skills and interests</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create New Team
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Search teams by name or subject..." />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="eng">Engineering</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-roles">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-roles">All Roles</SelectItem>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="analyst">Analyst</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{team.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{team.subject}</p>
                </div>
                <Badge 
                  variant={team.matchPercentage >= 80 ? "default" : "secondary"}
                  className="text-xs"
                >
                  {team.matchPercentage}% Match
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{team.description}</p>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <Users className="w-4 h-4" />
                <span>{team.members}/{team.maxMembers} members</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {team.skills.map((skill, skillIdx) => (
                  <Badge key={skillIdx} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              <Button className="w-full" variant={team.matchPercentage >= 80 ? "default" : "outline"}>
                Join Team
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
