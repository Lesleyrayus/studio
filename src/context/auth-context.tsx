"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, type User as FirebaseUser } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { UserProfile } from '@/types/user';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

interface AuthContextProps {
  user: FirebaseUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
  logout: () => void;
  firebaseInitialized: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  userProfile: null,
  loading: true,
  logout: () => {},
  firebaseInitialized: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const firebaseInitialized = !!auth;

  useEffect(() => {
    if (!firebaseInitialized || !auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && db) {
        const userDocRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          setUserProfile({ uid: user.uid, ...docSnap.data() } as UserProfile);
        }
        setUser(user);
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [firebaseInitialized]);

  const logout = async () => {
    if (auth) {
      await signOut(auth);
      router.push('/');
    }
  };

  const value = { user, userProfile, loading, logout, firebaseInitialized };

  if (loading) {
    return (
       <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <Skeleton className="h-6 w-32" />
                <div className="flex-1" />
                <Skeleton className="h-8 w-20" />
            </div>
        </header>
        <main className="flex-1">
            <div className="container p-8">
                <Skeleton className="h-96 w-full" />
            </div>
        </main>
      </div>
    )
  }

  if (!firebaseInitialized) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Alert variant="destructive" className="max-w-md">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Firebase Not Configured</AlertTitle>
              <AlertDescription>
                It looks like your Firebase environment variables are missing. Please create a <code>.env.local</code> file in your project and add your Firebase credentials.
              </AlertDescription>
            </Alert>
        </div>
      )
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
