'use client';

import {
    Box,
} from '@chakra-ui/react'; // Chakra UI components
import { useTranslations } from 'next-intl';

const TAG = ' | page.tsx | '

export default function AffiliatePage({ locale }: any) {
    const t = useTranslations('keepkey');

    return (
        <Box bg="black" minH="100vh" color="white">

        </Box>
    );
}
