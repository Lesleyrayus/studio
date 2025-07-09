import * as React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import type { Opportunity } from '@/data/opportunities';
import { categoryIcons } from '@/data/opportunities';
import Link from 'next/link';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const Icon = categoryIcons[opportunity.category];
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl font-headline">{opportunity.title}</CardTitle>
          <Badge variant="secondary" className="flex items-center gap-1.5 shrink-0">
            <Icon className="w-4 h-4" />
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
        <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          <Link href={`/opportunities/${opportunity.id}`}>
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
