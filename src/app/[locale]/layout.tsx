import { Providers } from './providers';

import {
    useMessages
} from 'next-intl'

export default function RootLayout({
                                       children,
                                       params: { locale },
                                   }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Import the correct messages based on the locale
    const messages = useMessages()

    return (
        <html lang={locale}>
        <body>
        <Providers locale={locale} messages={messages}>
            {children}
        </Providers>
        </body>
        </html>
    );
}
