"use client"

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OpportunityList } from '@/components/opportunity-list';
import { Input } from '@/components/ui/input';
import {
    Search,
    Users,
    Heart,
    Calendar,
    Star
} from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { Skeleton } from '@/components/ui/skeleton';

export default function VolunteerDashboardPage() {
    const { userProfile, loading } = useAuth();
    
    if (loading || !userProfile) {
        return (
            <div className="flex flex-col min-h-screen bg-background">
                <Header />
                <main className="flex-1 bg-muted/20 p-4 md:p-8 lg:p-10">
                    <div className="container mx-auto">
                        <Skeleton className="h-12 w-1/3 mb-8" />
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                            {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-32" />)}
                        </div>
                        <Skeleton className="h-10 w-1/4 mb-4" />
                        <Skeleton className="h-64 w-full" />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 bg-muted/20 p-4 md:p-8 lg:p-10">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold font-headline">Your Dashboard</h1>
                            <p className="text-muted-foreground">Welcome back, {userProfile.fullName}!</p>
                        </div>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="Search opportunities..." className="pl-10 w-full sm:w-64" />
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
