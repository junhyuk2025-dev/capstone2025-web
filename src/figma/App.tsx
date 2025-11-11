import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { OnboardingPage } from "./components/OnboardingPage";
import { Sidebar } from "./components/Sidebar";
import { TopNav } from "./components/TopNav";
import { MainDashboard } from "./components/MainDashboard";
import { TeamMatchingPage } from "./components/TeamMatchingPage";
import { TeamDashboard } from "./components/TeamDashboard";
import { ProfessorDashboard } from "./components/ProfessorDashboard";

type AppState = "login" | "onboarding" | "app";
type UserRole = "student" | "professor";

export default function App() {
  const [appState, setAppState] = useState<AppState>("login");
  const [userRole, setUserRole] = useState<UserRole>("student");
  const [activeView, setActiveView] = useState<string>("dashboard");

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    if (role === "student") {
      setAppState("onboarding");
    } else {
      setAppState("app");
      setActiveView("professor");
    }
  };

  const handleOnboardingComplete = () => {
    setAppState("app");
  };

  if (appState === "login") {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (appState === "onboarding") {
    return <OnboardingPage onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeView={activeView} 
        onViewChange={setActiveView}
        userRole={userRole}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav 
          userName={userRole === "professor" ? "Prof. Johnson" : "Alex Kim"} 
          userRole={userRole === "professor" ? "Professor" : "Student"} 
        />
        
        <div className="flex-1 overflow-auto">
          {activeView === "dashboard" && <MainDashboard />}
          {activeView === "matching" && <TeamMatchingPage />}
          {activeView === "teams" && userRole === "student" && <TeamDashboard />}
          {activeView === "professor" && <ProfessorDashboard />}
          {activeView === "notifications" && (
            <div className="p-6">
              <h2>Notifications</h2>
              <p className="text-gray-600 mt-2">No new notifications</p>
            </div>
          )}
          {activeView === "files" && (
            <div className="p-6">
              <h2>Files</h2>
              <p className="text-gray-600 mt-2">Your shared files will appear here</p>
            </div>
          )}
          {activeView === "settings" && (
            <div className="p-6">
              <h2>Settings</h2>
              <p className="text-gray-600 mt-2">Manage your account settings</p>
            </div>
          )}
          {activeView === "schedule" && userRole === "professor" && (
            <div className="p-6">
              <h2>Schedule</h2>
              <p className="text-gray-600 mt-2">View all team schedules</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
