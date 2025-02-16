import { PocketBaseProvider } from '../contexts/PocketBaseContext';

function MyApp({ Component, pageProps }) {
    return (
        <PocketBaseProvider>
            <Component {...pageProps} />
        </PocketBaseProvider>
    );
}

export default MyApp; 