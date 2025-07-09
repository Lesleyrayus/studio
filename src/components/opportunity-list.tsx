'use client';

import { useState, useMemo } from 'react';
import { OpportunityFilters } from './opportunity-filters';
import { OpportunityCard, type Opportunity } from './opportunity-card';
import { AnimatePresence, motion } from 'framer-motion';

const mockOpportunities: Opportunity[] = [
  { id: 1, title: 'Community Garden Helper', organization: 'Green Thumbs', location: 'Sunnyvale', description: 'Help maintain our community garden, planting, watering, and harvesting fresh produce for local families.', category: 'Environment' },
  { id: 2, title: 'Youth Mentor', organization: 'Future Leaders Initiative', location: 'Oakland', description: 'Guide and support high school students, providing academic help and career advice.', category: 'Education' },
  { id: 3, title: 'Animal Shelter Assistant', organization: 'Paws & Claws Rescue', location: 'San Francisco', description: 'Care for rescued dogs and cats. Duties include feeding, cleaning, and walking animals.', category: 'Animal Welfare' },
  { id: 4, title: 'Hospital Front Desk', organization: 'City General Hospital', location: 'Sunnyvale', description: 'Welcome patients and visitors, provide information, and assist with administrative tasks.', category: 'Healthcare' },
  { id: 5, title: 'Art Workshop Facilitator', organization: 'Creative Minds Center', location: 'San Francisco', description: 'Assist in running art workshops for children and adults in our community art center.', category: 'Arts & Culture' },
  { id: 6, title: 'Tree Planting Event', organization: 'Urban Forest Project', location: 'Oakland', description: 'Join us for a day of planting trees in city parks to improve our urban canopy.', category: 'Environment' },
];

const toKebabCase = (str: string) => str.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
const toTitleCase = (str: string) => str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

export function OpportunityList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<{ category: string; location: string }>({
    category: 'all',
    location: 'all',
  });

  const filteredOpportunities = useMemo(() => {
    return mockOpportunities.filter((opp) => {
      const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) || opp.organization.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filters.category === 'all' || toKebabCase(opp.category) === filters.category;
      const matchesLocation = filters.location === 'all' || toKebabCase(opp.location) === filters.location;
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchTerm, filters]);

  const categories = useMemo(() => ['all', ...Array.from(new Set(mockOpportunities.map(o => toKebabCase(o.category))))], []);
  const locations = useMemo(() => ['all', ...Array.from(new Set(mockOpportunities.map(o => toKebabCase(o.location))))], []);

  return (
    <div className="space-y-8">
      <OpportunityFilters
        onSearchChange={setSearchTerm}
        onFilterChange={setFilters}
        filters={filters}
        categories={categories.map(c => ({ value: c, label: toTitleCase(c) }))}
        locations={locations.map(l => ({ value: l, label: toTitleCase(l) }))}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredOpportunities.map((opp, index) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              layout
            >
              <OpportunityCard opportunity={opp} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {filteredOpportunities.length === 0 && (
        <p className="text-center text-muted-foreground py-8">No opportunities match your criteria. Please try different filters.</p>
      )}
    </div>
  );
}
