import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface OnboardingPageProps {
  onComplete: () => void;
}

export function OnboardingPage({ onComplete }: OnboardingPageProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  
  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle>Profile Setup</CardTitle>
            <span className="text-sm text-gray-500">Step {step} of {totalSteps}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        
        <CardContent className="min-h-[400px]">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4">Select Your Major</h3>
                <RadioGroup defaultValue="cs">
                  <div className="flex items-center space-x-2 p-3 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="cs" id="cs" />
                    <Label htmlFor="cs" className="flex-1 cursor-pointer">Computer Science</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="eng" id="eng" />
                    <Label htmlFor="eng" className="flex-1 cursor-pointer">Engineering</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business" className="flex-1 cursor-pointer">Business Administration</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="design" id="design" />
                    <Label htmlFor="design" className="flex-1 cursor-pointer">Design</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="flex-1 cursor-pointer">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4">Select Your Role</h3>
                <RadioGroup defaultValue="member">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="leader" id="leader" />
                    <div className="flex-1 cursor-pointer">
                      <Label htmlFor="leader" className="cursor-pointer">Team Leader</Label>
                      <p className="text-sm text-gray-500">I prefer to organize and lead projects</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="member" id="member" />
                    <div className="flex-1 cursor-pointer">
                      <Label htmlFor="member" className="cursor-pointer">Team Member</Label>
                      <p className="text-sm text-gray-500">I prefer to contribute as a team member</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <div className="flex-1 cursor-pointer">
                      <Label htmlFor="flexible" className="cursor-pointer">Flexible</Label>
                      <p className="text-sm text-gray-500">I'm comfortable with either role</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4">Collaboration Style</h3>
                <RadioGroup defaultValue="balanced">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="structured" id="structured" />
                    <div className="flex-1 cursor-pointer">
                      <Label htmlFor="structured" className="cursor-pointer">Structured & Organized</Label>
                      <p className="text-sm text-gray-500">I prefer clear plans and schedules</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="flexible-style" id="flexible-style" />
                    <div className="flex-1 cursor-pointer">
                      <Label htmlFor="flexible-style" className="cursor-pointer">Flexible & Adaptive</Label>
                      <p className="text-sm text-gray-500">I adapt to changing requirements</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg mb-2 hover:bg-gray-50">
                    <RadioGroupItem value="balanced" id="balanced" />
                    <div className="flex-1 cursor-pointer">
                      <Label htmlFor="balanced" className="cursor-pointer">Balanced</Label>
                      <p className="text-sm text-gray-500">Mix of structure and flexibility</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
          
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(s => Math.max(1, s - 1))}
              disabled={step === 1}
            >
              Back
            </Button>
            
            {step < totalSteps ? (
              <Button onClick={() => setStep(s => s + 1)}>
                Continue
              </Button>
            ) : (
              <Button onClick={onComplete}>
                Complete Setup
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
