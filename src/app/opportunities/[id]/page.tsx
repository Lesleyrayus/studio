
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { mockOpportunities, categoryIcons, type Opportunity } from '@/data/opportunities';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Clock, Users, Share2, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function OpportunityDetailPage({ params }: { params: { id: string } }) {
  const opportunity = mockOpportunities.find(op => op.id === parseInt(params.id, 10));

  if (!opportunity) {
    notFound();
  }
  
  const Icon = categoryIcons[opportunity.category];

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <Image
                    src="https://placehold.co/800x450.png"
                    width={800}
                    height={450}
                    alt={opportunity.title}
                    data-ai-hint="people working together"
                    className="w-full object-cover"
                  />
                <CardHeader>
                  <Badge variant="secondary" className="flex items-center gap-1.5 shrink-0 w-fit mb-2">
                    <Icon className="w-4 h-4" />
                    {opportunity.category}
                  </Badge>
                  <CardTitle className="text-3xl font-headline md:text-4xl">{opportunity.title}</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground pt-1">{opportunity.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-foreground/90">{opportunity.description}</p>
                  
                  <div className="mt-8">
                     <h3 className="text-xl font-semibold font-headline mb-4">Details</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span className="font-medium">Location:</span>
                            <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="font-medium">Date:</span>
                            <span>Saturdays, 10am - 2pm</span>
                        </div>
                         <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="font-medium">Commitment:</span>
                            <span>4 hours/week</span>
                        </div>
                         <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="font-medium">Volunteers Needed:</span>
                            <span>5</span>
                        </div>
                     </div>
                  </div>

                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1 space-y-8">
               <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Ready to help?</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-muted-foreground">Apply now to start making a difference in your community.</p>
                  <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={`/opportunities/${opportunity.id}/apply`}>
                        Apply Now
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="w-full">
                        <Heart className="mr-2 h-4 w-4" />
                        Save for Later
                    </Button>
                     <Button variant="outline" className="w-full">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">About {opportunity.organization}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        The {opportunity.organization} is dedicated to making a positive impact. Join us in our mission to build a better community.
                    </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
