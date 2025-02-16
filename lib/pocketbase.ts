import PocketBase from 'pocketbase';

// You can change this to your production URL when deploying
export const pb = new PocketBase('http://127.0.0.1:8090');

// Optional: TypeScript types for your collections
export type UserRecord = {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role: 'parent' | 'child';
}

export type ActivityRecord = {
    id: string;
    user: string; // References the user who generated this activity
    url: string;
    title: string;
    timestamp: string;
    duration?: number;
    category?: string;
}

export type ScreenTimeRecord = {
    id: string;
    user: string;
    date: string;
    totalTime: number;
    limits?: number;
}

export type BlockedSiteRecord = {
    id: string;
    url: string;
    category?: string;
    addedBy: string;
    active: boolean;
} 