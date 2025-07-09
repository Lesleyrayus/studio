import type { ComponentType } from "react";
import { HeartHandshake, Sprout, GraduationCap, Dog, Paintbrush } from 'lucide-react';

export interface Opportunity {
  id: number;
  title: string;
  organization: string;
  location: string;
  description: string;
  category: 'Healthcare' | 'Environment' | 'Education' | 'Animal Welfare' | 'Arts & Culture';
}

export const mockOpportunities: Opportunity[] = [
  { id: 1, title: 'Community Garden Helper', organization: 'Green Thumbs', location: 'Sunnyvale', description: 'Help maintain our community garden, planting, watering, and harvesting fresh produce for local families.', category: 'Environment' },
  { id: 2, title: 'Youth Mentor', organization: 'Future Leaders Initiative', location: 'Oakland', description: 'Guide and support high school students, providing academic help and career advice.', category: 'Education' },
  { id: 3, title: 'Animal Shelter Assistant', organization: 'Paws & Claws Rescue', location: 'San Francisco', description: 'Care for rescued dogs and cats. Duties include feeding, cleaning, and walking animals.', category: 'Animal Welfare' },
  { id: 4, title: 'Hospital Front Desk', organization: 'City General Hospital', location: 'Sunnyvale', description: 'Welcome patients and visitors, provide information, and assist with administrative tasks.', category: 'Healthcare' },
  { id: 5, title: 'Art Workshop Facilitator', organization: 'Creative Minds Center', location: 'San Francisco', description: 'Assist in running art workshops for children and adults in our community art center.', category: 'Arts & Culture' },
  { id: 6, title: 'Tree Planting Event', organization: 'Urban Forest Project', location: 'Oakland', description: 'Join us for a day of planting trees in city parks to improve our urban canopy.', category: 'Environment' },
];

export const categoryIcons: Record<Opportunity['category'], ComponentType<{ className: string }>> = {
  'Healthcare': HeartHandshake,
  'Environment': Sprout,
  'Education': GraduationCap,
  'Animal Welfare': Dog,
  'Arts & Culture': Paintbrush,
};
