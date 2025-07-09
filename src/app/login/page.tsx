"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<'volunteer' | 'organization'>('volunteer');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real app, you would handle authentication here.
    if (userType === 'organization') {
        router.push('/organization/dashboard');
    } else {
        router.push('/volunteer/dashboard');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">Welcome Back</CardTitle>
            <CardDescription>Log in to your HelpingHands account.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleLogin}>
               <RadioGroup
                defaultValue="volunteer"
                className="grid grid-cols-2 gap-4"
                value={userType}
                onValueChange={(value: 'volunteer' | 'organization') => setUserType(value)}
              >
                <div>
                  <RadioGroupItem value="volunteer" id="volunteer" className="peer sr-only" />
                  <Label
                    htmlFor="volunteer"
                    className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    I'm a Volunteer
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="organization"
                    id="organization"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="organization"
                    className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    I'm an Organization
                  </Label>
                </div>
              </RadioGroup>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Log In
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="underline hover:text-primary">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
