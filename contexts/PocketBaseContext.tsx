import { createContext, useContext, ReactNode } from 'react';
import { pb } from '../lib/pocketbase';

const PocketBaseContext = createContext(pb);

export function PocketBaseProvider({ children }: { children: ReactNode }) {
    return (
        <PocketBaseContext.Provider value={pb}>
            {children}
        </PocketBaseContext.Provider>
    );
}

export const usePocketBase = () => useContext(PocketBaseContext); 