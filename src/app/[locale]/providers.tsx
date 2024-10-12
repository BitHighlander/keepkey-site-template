import { ChakraProvider } from '@chakra-ui/react';
import { NextIntlClientProvider } from 'next-intl';
import ErrorBoundary from './components/ErrorBoundary';
// import { theme } from './styles/theme';  // Adjust the path based on your project structure


// const ForceDarkMode = ({ children }: { children: React.ReactNode }) => {
//     const { setColorMode } = useColorMode();
//
//     setColorMode('dark');
//
//     return <>{children}</>;
// };

export function Providers({
                              children,
                              locale,
                              messages,
                          }: {
    children: React.ReactNode;
    locale: string;
    messages: any;
}) {
    return (
        <ErrorBoundary>
            <ChakraProvider>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </ChakraProvider>
        </ErrorBoundary>
    );
}
