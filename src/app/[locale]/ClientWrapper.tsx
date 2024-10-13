// src/app/[locale]/components/ClientWrapper.tsx
'use client';

import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import Footer from './components/Footer';

interface ClientWrapperProps {
    children: ReactNode;
    locale: string;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children, locale }) => {
    return (
        <Box bg="black" minH="100vh" color="white">
            <Header locale={locale} />
            {children}
            <Footer />
        </Box>
    );
};

export default ClientWrapper;
