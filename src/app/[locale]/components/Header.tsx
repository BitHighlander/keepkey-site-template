"use client";

import { Link } from '@/src/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import LangSwitcher from './LangSwitcher';
import keepkeyLogo from '../../../../public/images/logos/keepkey_logo.png';
import {
    Box,
    Flex,
    Text,
    Button,
    IconButton,
    useBreakpointValue,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
} from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaGithub, FaBars } from 'react-icons/fa'; // Social media icons and hamburger

interface Props {
    locale: string;
}

export const Header: FC<Props> = ({ locale }) => {
    const t = useTranslations();
    const logoSize = useBreakpointValue({ base: 12, md: 14 }); // Adjust size based on screen size
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

    const handleLogoClick = () => {
        window.open("https://keepkey.info", "_blank"); // Opens the link in a new tab
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <Flex
                maxW="8xl"
                mx="auto"
                px={5}
                py={5}
                justify="space-between"
                align="center"
            >
                {/* Logo */}
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

                {/* Navigation Links for Desktop */}
                <Flex display={{ base: 'none', md: 'flex' }} gap={6} align="center">
                    <Link lang={locale} href={"/features" as any}>
                        <Text>{t('Features')}</Text>
                    </Link>
                    <Link lang={locale} href={"/pricing" as any}>
                        <Text>{t('Pricing')}</Text>
                    </Link>
                    <Link lang={locale} href={"/about" as any}>
                        <Text>{t('About')}</Text>
                    </Link>
                    <Link lang={locale} href={"/support" as any}>
                        <Text>{t('Support')}</Text>
                    </Link>
                </Flex>

                {/* Mobile Hamburger Menu Button */}
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    icon={<FaBars />}
                    aria-label="Open Menu"
                    onClick={toggleMenu}
                    variant="ghost"
                />

                {/* Social Media Icons and Call-to-Action for Desktop */}
                <Flex display={{ base: 'none', md: 'flex' }} gap={3} align="center">
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

                    <LangSwitcher />

                    <Button colorScheme="teal" size="md">
                        {t('Get Started')}
                    </Button>
                </Flex>
            </Flex>

            {/* Mobile Drawer Menu */}
            <Drawer isOpen={isOpen} placement="right" onClose={toggleMenu}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
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
                        </DrawerHeader>
                        <DrawerBody>
                            <VStack align="start" spacing={4}>
                                <Link lang={locale} href={"/features" as any}>
                                    <Text>{t('Features')}</Text>
                                </Link>
                                <Link lang={locale} href={"/pricing" as any}>
                                    <Text>{t('Pricing')}</Text>
                                </Link>
                                <Link lang={locale} href={"/about" as any}>
                                    <Text>{t('About')}</Text>
                                </Link>
                                <Link lang={locale} href={"/support" as any}>
                                    <Text>{t('Support')}</Text>
                                </Link>
                                {/* Social Media Icons for Mobile */}
                                <Flex gap={3}>
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
                                </Flex>

                                <LangSwitcher />

                                <Button colorScheme="teal" size="md" w="full">
                                    {t('Get Started')}
                                </Button>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};
