import { Box, Flex, Link as ChakraLink, Text, Icon, Divider } from '@chakra-ui/react';
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');

  return (
      <Box as="footer" bg="darkGold" pt="14" pb="7">
        <Flex flexWrap="wrap" justifyContent="center" gap="5" alignItems="center" mt="6">
          {/* Discord */}
          <ChakraLink href="https://discord.com/invite/fYB4DPmQtW" isExternal>
            <Flex flexDirection="column" alignItems="center">
              <Icon as={FaDiscord} w={5} h={5} color="white" />
              <Text>{t('discord')}</Text>
            </Flex>
          </ChakraLink>
          {/* Twitter */}
          <ChakraLink href="https://twitter.com/KeepKeyDevs" isExternal>
            <Flex flexDirection="column" alignItems="center">
              <Icon as={FaTwitter} w={5} h={5} color="white" />
              <Text>{t('twitter')}</Text>
            </Flex>
          </ChakraLink>
          {/* Instagram */}
          <ChakraLink href="https://www.instagram.com/cryptokeepkey" isExternal>
            <Flex flexDirection="column" alignItems="center">
              <Icon as={FaInstagram} w={5} h={5} color="white" />
              <Text>{t('instagram')}</Text>
            </Flex>
          </ChakraLink>
          {/* Youtube */}
          <ChakraLink href="https://www.youtube.com/channel/UC6QCaloeHk-pgeC8Hhqxbuw" isExternal>
            <Flex flexDirection="column" alignItems="center">
              <Icon as={FaYoutube} w={5} h={5} color="white" />
              <Text>{t('youtube')}</Text>
            </Flex>
          </ChakraLink>
        </Flex>

        {/* Divider between social media icons and links */}
        <Divider my="8" borderColor="whiteAlpha.500" />

        <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mt="6">
          <ChakraLink as={Link} href="/limited-warranty" px="4" _hover={{ textDecoration: 'underline' }} color="white">
            {t('limited_warranty')}
          </ChakraLink>
          <Text>|</Text>
          <ChakraLink as={Link} href="/privacy-policy" px="4" _hover={{ textDecoration: 'underline' }} color="white">
            {t('privacy_policy')}
          </ChakraLink>
          <Text>|</Text>
          <ChakraLink as={Link} href="/refund-policy" px="4" _hover={{ textDecoration: 'underline' }} color="white">
            {t('refund_policy')}
          </ChakraLink>
          <Text>|</Text>
          <ChakraLink as={Link} href="/shipping-policy" px="4" _hover={{ textDecoration: 'underline' }} color="white">
            {t('shipping_policy')}
          </ChakraLink>
          <Text>|</Text>
          <ChakraLink as={Link} href="/terms-of-use" px="4" _hover={{ textDecoration: 'underline' }} color="white">
            {t('terms_of_use')}
          </ChakraLink>
          <Text>|</Text>
          <ChakraLink as={Link} href="/security" px="4" _hover={{ textDecoration: 'underline' }} color="white">
            {t('security')}
          </ChakraLink>
        </Flex>

        <Text textAlign="center" mt="6" color="white">
          {t('copyright', { year: new Date().getFullYear() })}
        </Text>
      </Box>
  );
}
