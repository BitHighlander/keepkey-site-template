// src/app/[locale]/layout.tsx
import { Providers } from './providers';
import { useMessages } from 'next-intl';
import ErrorBoundary from './components/ErrorBoundary'; // Import your error boundary
import ClientWrapper from './ClientWrapper'; // Import your client wrapper

export default function RootLayout({
                                       children,
                                       params: { locale },
                                   }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = useMessages();

    return (
        <html lang={locale}>
        <body>
        <Providers locale={locale} messages={messages}>
            <ErrorBoundary>
                <ClientWrapper locale={locale}>
                    {children}
                </ClientWrapper>
            </ErrorBoundary>
        </Providers>
        </body>
        </html>
    );
}
