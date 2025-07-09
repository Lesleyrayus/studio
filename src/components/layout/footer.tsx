import Link from 'next/link';
import { HandHeart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center space-x-2">
            <HandHeart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-headline">HelpingHands</span>
          </Link>
          <p className="max-w-md mx-auto mt-4 text-muted-foreground">
            Connecting volunteers with opportunities to make a difference in their communities.
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <hr className="my-6 border-border" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} HelpingHands. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
