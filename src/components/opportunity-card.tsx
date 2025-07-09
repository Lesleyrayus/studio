import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartHand, Sprout, GraduationCap, Dog, Paintbrush, MapPin } from 'lucide-react';
import type { ReactElement } from 'react';

export interface Opportunity {
  id: number;
  title: string;
  organization: string;
  location: string;
  description: string;
  category: 'Healthcare' | 'Environment' | 'Education' | 'Animal Welfare' | 'Arts & Culture';
}

const categoryIcons: Record<Opportunity['category'], ReactElement> = {
  'Healthcare': <HeartHand className="w-4 h-4" />,
  'Environment': <Sprout className="w-4 h-4" />,
  'Education': <GraduationCap className="w-4 h-4" />,
  'Animal Welfare': <Dog className="w-4 h-4" />,
  'Arts & Culture': <Paintbrush className="w-4 h-4" />,
};

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl font-headline">{opportunity.title}</CardTitle>
          <Badge variant="secondary" className="flex items-center gap-1.5 shrink-0">
            {categoryIcons[opportunity.category]}
            {opportunity.category}
          </Badge>
        </div>
        <CardDescription className="pt-1">{opportunity.organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{opportunity.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center text-sm text-muted-foreground gap-1.5">
          <MapPin className="w-4 h-4" />
          <span>{opportunity.location}</span>
        </div>
        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
