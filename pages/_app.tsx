import { PocketBaseProvider } from '../contexts/PocketBaseContext';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PocketBaseProvider children={<Component {...pageProps} />} />
    );
}

export default MyApp; 