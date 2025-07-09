import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, Building } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-3xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">Join HelpingHands</CardTitle>
            <CardDescription>Choose your path to start making a difference.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 pt-6">
            <Link href="/register/volunteer" className="block">
              <div className="p-6 border rounded-lg text-center h-full hover:bg-card/80 transition-colors flex flex-col items-center justify-center space-y-2">
                <HandHeart className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold font-headline">I am a Volunteer</h3>
                <p className="text-muted-foreground text-sm">Find opportunities to contribute your time and skills.</p>
              </div>
            </Link>
            <Link href="/register/organization" className="block">
              <div className="p-6 border rounded-lg text-center h-full hover:bg-card/80 transition-colors flex flex-col items-center justify-center space-y-2">
                <Building className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold font-headline">We are an Organization</h3>
                <p className="text-muted-foreground text-sm">Post opportunities and find dedicated volunteers.</p>
              </div>
            </Link>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
