'use client';

import { capitalize } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'; // Chakra UI components

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
  }

  const pathname = usePathname();
  const urlSegments = useSelectedLayoutSegments();
  const { isOpen, onToggle } = useDisclosure(); // Chakra's useDisclosure hook

  const options: Option[] = [
    { country: 'English', code: 'en' },
    // { country: 'Deutsch', code: 'de' },
    // { country: 'Français', code: 'fr' },
    { country: 'Español', code: 'es' },
    // { country: 'Русский', code: 'ru' },
    // { country: '日本語', code: 'ja' },
    // { country: 'العربية', code: 'ar' },
    // { country: 'فارسی', code: 'fa' },
  ];

  return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Menu isOpen={isOpen} onClose={onToggle}>
          <MenuButton
              as={IconButton}
              aria-label="Language Switcher"
              icon={<FiGlobe />}
              onClick={onToggle}
              variant="outline"
              colorScheme="yellow"
              border="1px"
              borderColor="gold"
              _hover={{ bg: 'gold', color: 'black' }}
          />
          <MenuList bg="black" borderColor="gray.700" mt={2}>
            {options.map((lang) => (
                <Link key={lang.code} href={`/${lang.code}/${urlSegments.join('/')}`}>
                  <MenuItem
                      as="button"
                      onMouseDown={(e) => e.preventDefault()}  // Prevents focus issues on button click
                      bg={pathname === `/${lang.code}` ? 'gray.700' : 'black'}
                      _hover={{ bg: 'gray.800' }}
                      _focus={{ bg: 'gray.700' }}
                  >
                    {capitalize(lang.country)}
                  </MenuItem>
                </Link>
            ))}
          </MenuList>
        </Menu>
      </Box>
  );
};

export default LangSwitcher;
