import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OpportunityCard, type Opportunity } from '@/components/opportunity-card';
import { Input } from '@/components/ui/input';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import Link from 'next/link';
import {
    PlusCircle,
    List,
    CheckCircle,
    Users,
    UserPlus,
    Search,
    Bell,
    MessageSquare,
    UserCircle,
    Settings,
    LogOut
} from 'lucide-react';

const organizationOpportunities: Opportunity[] = [
    { id: 2, title: 'Youth Mentor', organization: 'Future Leaders Initiative', location: 'Oakland', description: 'Guide and support high school students, providing academic help and career advice.', category: 'Education' },
    { id: 7, title: 'Coding Bootcamp Instructor', organization: 'Future Leaders Initiative', location: 'Oakland', description: 'Teach the next generation of software developers in our intensive coding bootcamp.', category: 'Education' },
];

export default function OrganizationDashboardPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 bg-muted/20 p-4 md:p-8 lg:p-10">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
                            <p className="text-muted-foreground">Welcome back, Future Leaders Initiative!</p>
                        </div>
                        <div className="flex items-center gap-2">
                             <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input placeholder="Search volunteers by skill..." className="pl-10 w-full sm:w-64" />
                            </div>
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <UserCircle className="h-5 w-5" />
                                    </Button>
                                    </MenubarTrigger>
                                    <MenubarContent align="end">
                                        <MenubarItem>
                                            <UserCircle className="mr-2" />
                                            <span>My Profile</span>
                                        </MenubarItem>
                                        <MenubarItem>
                                            <Bell className="mr-2" />
                                            <span>Notifications</span>
                                        </MenubarItem>
                                        <MenubarItem>
                                            <MessageSquare className="mr-2" />
                                            <span>Chat</span>
                                        </MenubarItem>
                                        <MenubarSeparator />
                                         <MenubarItem>
                                            <Settings className="mr-2" />
                                            <span>Settings</span>
                                        </MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarItem asChild>
                                            <Link href="/login">
                                                <LogOut className="mr-2" />
                                                <span>Log Out</span>
                                            </Link>
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Opportunities</CardTitle>
                                <List className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">12</div>
                                <p className="text-xs text-muted-foreground">+2 since last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Opportunities</CardTitle>
                                <CheckCircle className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">8</div>
                                <p className="text-xs text-muted-foreground">3 are currently filled</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">235</div>
                                <p className="text-xs text-muted-foreground">+50 since last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">New Applicants</CardTitle>
                                <UserPlus className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">15</div>
                                <p className="text-xs text-muted-foreground">in the last 7 days</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                             <h2 className="text-2xl font-bold font-headline">Your Posted Opportunities</h2>
                             <Button>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Create New Opportunity
                            </Button>
                        </div>
                       
                        {organizationOpportunities.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {organizationOpportunities.map((opp) => (
                                    <OpportunityCard key={opp.id} opportunity={opp} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 border-2 border-dashed rounded-lg bg-card">
                                <h3 className="text-xl font-semibold font-headline">No Opportunities Posted</h3>
                                <p className="text-muted-foreground mt-2 mb-4">Click "Create New Opportunity" to get started and find volunteers.</p>
                                <Button>
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    Create First Opportunity
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
