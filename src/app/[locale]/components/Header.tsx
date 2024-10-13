'use client';
import { Link } from '@/src/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
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
import { FaTwitter, FaDiscord, FaGithub, FaBars } from 'react-icons/fa';
import { CTAButton } from "./header/cta"; // Social media icons and hamburger

interface Props {
    locale: string;
}

export const Header: FC<Props> = ({ locale }:any) => {
    const t = useTranslations();
    const logoSize = useBreakpointValue({ base: 12, md: 14 });
    const [isOpen, setIsOpen] = useState(false);
    const [keepkeyAvailable, setKeepkeyAvailable] = useState(false); // KeepKey availability state

    const handleLogoClick = () => {
        window.open("https://keepkey.info", "_blank");
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    // Function to check KeepKey Desktop availability
    const checkKeepkeyAvailability = async () => {
        try {
            const response = await axios.get('http://localhost:1646/spec/swagger.json');
            if (response.status === 200) {
                setKeepkeyAvailable(true); // Set to true if KeepKey Desktop is available
            }
        } catch (error) {
            setKeepkeyAvailable(false); // If there's an error, KeepKey Desktop is not running
        }
    };

    // useEffect to check KeepKey Desktop availability on start
    useEffect(() => {
        checkKeepkeyAvailability();
    }, []); // Only run once on component mount

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
                    </Flex>
                </Link>

                {/* Navigation Links for Desktop */}
                <Flex display={{ base: 'none', md: 'flex' }} gap={6} align="center">
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
                    <Link href="https://docs.keepkey.info" isexternal="true">
                        <Text>Docs</Text> {/* New Docs entry */}
                    </Link>
                </Flex>

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

                    <CTAButton locale={locale} /> {/* Special Get Started Button */}
                </Flex>

                {/* Mobile Hamburger Menu Button */}
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    icon={<FaBars />}
                    aria-label="Open Menu"
                    onClick={toggleMenu}
                    variant="ghost"
                />
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

                                <LangSwitcher />

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
                                        onClick={() => window.open("https://discord.gg/FDQEbB79N2", "_blank")}
                                        variant="ghost"
                                    />
                                    <IconButton
                                        aria-label="Github"
                                        icon={<FaGithub />}
                                        onClick={() => window.open("https://github.com/KeepKey", "_blank")}
                                        variant="ghost"
                                    />
                                </Flex>

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
