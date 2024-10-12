"use client";

import { Link } from '@/src/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import LangSwitcher from './LangSwitcher';
import keepkeyLogo from '../../../../public/images/logos/keepkey_logo.png';
import { Box, Flex, Text, Button, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa'; // Social media icons

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
                <Flex align="center" cursor="pointer" onClick={handleLogoClick}>
                    <Box boxSize={logoSize}>
                        <Image
                            src={keepkeyLogo}
                            alt="KeepKey logo"
                            width={64}
                            height={64}
                            quality={100}
                            priority
                            className="object-contain"
                        />
                    </Box>
                    <Text as="strong" ml={2} userSelect="none">
                        {t('KeepKey')}
                    </Text>
                </Flex>
            </Link>

            {/* Navigation Links */}
            <Flex gap={6} align="center">
                <Link lang={locale} href="/features">
                    <Text>{t('Features')}</Text>
                </Link>
                <Link lang={locale} href="/pricing">
                    <Text>{t('Pricing')}</Text>
                </Link>
                <Link lang={locale} href="/about">
                    <Text>{t('About')}</Text>
                </Link>
                <Link lang={locale} href="/support">
                    <Text>{t('Support')}</Text>
                </Link>
            </Flex>

            <Flex gap={3} align="center">
                {/* Social Media Icons */}
                <IconButton
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    onClick={() => window.open("https://twitter.com/KeepKey", "_blank")}
                    variant="ghost"
                />
                <IconButton
                    aria-label="Discord"
                    icon={<FaDiscord />}
                    onClick={() => window.open("https://discord.com/invite/keepkey", "_blank")}
                    variant="ghost"
                />
                <IconButton
                    aria-label="Github"
                    icon={<FaGithub />}
                    onClick={() => window.open("https://github.com/KeepKey", "_blank")}
                    variant="ghost"
                />

                {/* Language Switcher */}
                <LangSwitcher />

                {/* Call-to-Action Button */}
                <Button colorScheme="teal" size="md">
                    {t('Get Started')}
                </Button>
            </Flex>
        </Flex>
    );
};
