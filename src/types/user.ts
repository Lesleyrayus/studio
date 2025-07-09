export interface UserProfile {
  uid: string;
  email: string;
  role: 'volunteer' | 'organization';
  // Volunteer fields
  fullName?: string;
  skills?: string;
  interests?: string;
  // Organization fields
  organizationName?: string;
  address?: string;
  mission?: string;
}
