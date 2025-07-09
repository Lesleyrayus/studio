import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, HandHeart } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <HandHeart className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">HelpingHands</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/#opportunities" className="transition-colors hover:text-primary">
              Opportunities
            </Link>
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="flex items-center space-x-2">
                  <HandHeart className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">HelpingHands</span>
                </Link>
                <nav className="flex flex-col space-y-2">
                  <Link href="/#opportunities">Opportunities</Link>
                </nav>
                <div className="flex flex-col space-y-2 pt-4">
                    <Button variant="outline" asChild>
                        <Link href="/login">Log In</Link>
                    </Button>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="/register">Sign Up</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-start md:justify-center">
           <Link href="/" className="flex items-center space-x-2 md:hidden">
            <HandHeart className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">HelpingHands</span>
          </Link>
        </div>


        <div className="flex items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/register">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
