import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { mockOpportunities, categoryIcons, type Opportunity } from '@/data/opportunities';
import { mockApplicants } from '@/data/applicants';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Clock, Users, Share2, Edit } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function OpportunityDetailPage({ params }: { params: { id: string } }) {
  const opportunity = mockOpportunities.find(op => op.id === parseInt(params.id, 10));

  if (!opportunity) {
    notFound();
  }
  
  const applicantCount = mockApplicants.filter(app => app.opportunityId === opportunity.id).length;

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
            <div className="lg:col-span-1">
               <Card>
                <CardHeader>
                  <CardTitle>Manage Opportunity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Here you can edit your listing and view applicants.</p>
                   <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={`/organization/opportunities/${opportunity.id}/applicants`}>
                        <Users className="mr-2 h-4 w-4" />
                        View Applicants ({applicantCount})
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full">
                    {/* The edit page doesn't exist yet, but this links to the create page as a placeholder */}
                    <Link href={`/organization/opportunities/create`}> 
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Opportunity
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
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
