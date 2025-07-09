export interface Applicant {
  id: number;
  opportunityId: number;
  name: string;
  email: string;
  applicationDate: string;
  message: string;
  avatarUrl: string;
}

export const mockApplicants: Applicant[] = [
  { id: 1, opportunityId: 2, name: 'Alice Johnson', email: 'alice@example.com', applicationDate: '2024-07-20', message: "I'm passionate about mentoring and have experience working with high school students.", avatarUrl: 'https://placehold.co/100x100.png' },
  { id: 2, opportunityId: 2, name: 'Bob Williams', email: 'bob@example.com', applicationDate: '2024-07-19', message: "I'm a recent graduate and would love to give back to the community by helping students.", avatarUrl: 'https://placehold.co/100x100.png' },
  { id: 3, opportunityId: 8, name: 'Charlie Brown', email: 'charlie@example.com', applicationDate: '2024-07-22', message: "As a senior software engineer at a major tech company, I have a lot of industry experience to share with aspiring developers. I'm excited about this opportunity.", avatarUrl: 'https://placehold.co/100x100.png' },
  { id: 4, opportunityId: 8, name: 'Diana Prince', email: 'diana@example.com', applicationDate: '2024-07-21', message: "I've given several tech talks at conferences and enjoy public speaking. I believe I can provide a lot of value to your students.", avatarUrl: 'https://placehold.co/100x100.png' },
  { id: 5, opportunityId: 1, name: 'Eve Adams', email: 'eve@example.com', applicationDate: '2024-07-18', message: "I love gardening and working outdoors. I'd be happy to help out at the community garden on weekends.", avatarUrl: 'https://placehold.co/100x100.png' },
  { id: 6, opportunityId: 3, name: 'Frank Castle', email: 'frank@example.com', applicationDate: '2024-07-23', message: "I have two rescue dogs of my own and am very comfortable working with animals. I'm available to help with cleaning and walking.", avatarUrl: 'https://placehold.co/100x100.png' },
  { id: 7, opportunityId: 8, name: 'Grace Lee', email: 'grace@example.com', applicationDate: '2024-07-23', message: "My expertise is in AI and Machine Learning. I can prepare a talk on the latest trends in AI for your bootcamp students.", avatarUrl: 'https://placehold.co/100x100.png' },
];
