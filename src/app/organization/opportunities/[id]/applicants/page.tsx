import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { mockOpportunities } from '@/data/opportunities';
import { mockApplicants } from '@/data/applicants';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ApplicantCard } from '@/components/applicant-card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ApplicantsPage({ params }: { params: { id: string } }) {
  const opportunityId = parseInt(params.id, 10);
  const opportunity = mockOpportunities.find(op => op.id === opportunityId);
  const applicants = mockApplicants.filter(app => app.opportunityId === opportunityId);

  if (!opportunity) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
             <Link href={`/opportunities/${opportunity.id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4">
                <ArrowLeft className="w-4 h-4" />
                Back to Opportunity
            </Link>
            <h1 className="text-3xl font-bold font-headline">Applicants for "{opportunity.title}"</h1>
            <p className="text-muted-foreground">You have {applicants.length} applicant(s) for this opportunity.</p>
          </div>
          
          {applicants.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {applicants.map(applicant => (
                <ApplicantCard key={applicant.id} applicant={applicant} />
              ))}
            </div>
          ) : (
             <Card className="w-full py-16 text-center">
                 <CardHeader>
                     <CardTitle className="text-2xl font-headline">No Applicants Yet</CardTitle>
                     <CardDescription>Check back later to see who has applied.</CardDescription>
                 </CardHeader>
             </Card>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
