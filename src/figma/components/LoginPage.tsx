import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface LoginPageProps {
  onLogin: (role: "student" | "professor") => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-blue-600">TeamSync</CardTitle>
          <CardDescription>University Team Collaboration Platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">School Email</Label>
                  <Input id="email" type="email" placeholder="your.email@university.edu" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch id="anonymous" />
                    <Label htmlFor="anonymous" className="text-sm">Anonymous Participation</Label>
                  </div>
                </div>
                <Button className="w-full" onClick={() => onLogin("student")}>
                  Sign In as Student
                </Button>
                <Button variant="outline" className="w-full" onClick={() => onLogin("professor")}>
                  Sign In as Professor
                </Button>
                <button className="w-full text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </button>
              </div>
            </TabsContent>
            
            <TabsContent value="signup">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="signup-email">School Email</Label>
                  <Input id="signup-email" type="email" placeholder="your.email@university.edu" />
                  <p className="text-xs text-gray-500 mt-1">Verification email will be sent</p>
                </div>
                <div>
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input id="signup-name" type="text" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" placeholder="••••••••" />
                </div>
                <div>
                  <Label htmlFor="signup-confirm">Confirm Password</Label>
                  <Input id="signup-confirm" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="signup-anonymous" />
                  <Label htmlFor="signup-anonymous" className="text-sm">Anonymous Participation</Label>
                </div>
                <Button className="w-full">Sign Up</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
