import { useState, useEffect } from 'react';
import { pb } from '../lib/pocketbase';
import type { UserRecord } from '../lib/pocketbase';

export function useAuth() {
    const [user, setUser] = useState<UserRecord | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get initial auth state
        setUser(pb.authStore.model as UserRecord);

        // Listen to auth state changes
        pb.authStore.onChange((token, model) => {
            setUser(model as UserRecord);
        });

        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const authData = await pb.collection('users').authWithPassword(email, password);
            return authData;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const logout = () => {
        pb.authStore.clear();
    };

    const register = async (email: string, password: string, passwordConfirm: string, name: string) => {
        try {
            const userData = {
                email,
                password,
                passwordConfirm,
                name,
                role: 'parent',
            };
            const createdUser = await pb.collection('users').create(userData);
            return createdUser;
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    };

    return {
        user,
        loading,
        login,
        logout,
        register,
    };
} 