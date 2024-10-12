"use client";

import { Link } from '@/src/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import LangSwitcher from './LangSwitcher';
import keepkeyLogo from '../../../../public/images/logos/keepkey_logo.png';
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'; // Chakra UI components

interface Props {
    locale: string;
}

export const Header: FC<Props> = ({ locale }) => {
    const t = useTranslations();
    const logoSize = useBreakpointValue({ base: 12, md: 14 }); // Adjust size based on screen size

    const handleLogoClick = () => {
        window.open("https://keepkey.info", "_blank"); // Opens the link in a new tab
    };

    return (
        <Flex
            maxW="8xl"
            mx="auto"
            px={5}
            py={5}
            justify="space-between"
            align="center"
        >
            <Link lang={locale} href='/'>
                <Flex align="center">
                    <Box boxSize={logoSize}>
                        <Image
                            src={keepkeyLogo}
                            alt="KeepKey logo"
                            width={64}
                            height={64}
                            quality={100}
                            priority
                            className="object-contain"
                            onClick={handleLogoClick}
                        />
                    </Box>
                    <Text as="strong" ml={2} userSelect="none">
                        {t('KeepKey')}
                    </Text>
                </Flex>
            </Link>
            <Flex gap={3} align="center">
                <LangSwitcher />
            </Flex>
        </Flex>
    );
};
