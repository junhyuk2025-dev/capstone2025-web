import { Users, Search, Bell, FileText, Settings, BarChart3, Calendar } from "lucide-react";
import { cn } from "./ui/utils";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  userRole: "student" | "professor";
}

export function Sidebar({ activeView, onViewChange, userRole }: SidebarProps) {
  const studentMenuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "teams", label: "My Teams", icon: Users },
    { id: "matching", label: "Team Matching", icon: Search },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "files", label: "Files", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const professorMenuItems = [
    { id: "professor", label: "Overview", icon: BarChart3 },
    { id: "teams", label: "All Teams", icon: Users },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const menuItems = userRole === "professor" ? professorMenuItems : studentMenuItems;

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-blue-600">TeamSync</h1>
        <p className="text-gray-500 text-sm mt-1">University Platform</p>
      </div>
      
      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors",
                activeView === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
