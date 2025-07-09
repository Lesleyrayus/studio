import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OpportunityList } from '@/components/opportunity-list';
import { Input } from '@/components/ui/input';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import Link from 'next/link';
import {
    Search,
    Bell,
    MessageSquare,
    UserCircle,
    Settings,
    LogOut,
    Users,
    Heart,
    Calendar,
    Star
} from 'lucide-react';

export default function VolunteerDashboardPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 bg-muted/20 p-4 md:p-8 lg:p-10">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold font-headline">Your Dashboard</h1>
                            <p className="text-muted-foreground">Welcome back, Alex!</p>
                        </div>
                        <div className="flex items-center gap-2">
                             <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input placeholder="Search opportunities..." className="pl-10 w-full sm:w-64" />
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
                                            <span>Messages</span>
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
                                <CardTitle className="text-sm font-medium">My Applications</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">5</div>
                                <p className="text-xs text-muted-foreground">2 pending, 3 viewed</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Saved Opportunities</CardTitle>
                                <Heart className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">12</div>
                                <p className="text-xs text-muted-foreground">Explore your saved list</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">2</div>
                                <p className="text-xs text-muted-foreground">Check your calendar</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Profile Strength</CardTitle>
                                <Star className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Strong</div>
                                <p className="text-xs text-muted-foreground">Your profile is up to date</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                             <h2 className="text-2xl font-bold font-headline">Recommended For You</h2>
                        </div>
                        <OpportunityList />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
