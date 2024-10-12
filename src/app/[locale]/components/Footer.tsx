import { Box, Flex, Link as ChakraLink, Text, Icon } from '@chakra-ui/react'
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useTranslations } from 'next-intl';
import Link from 'next/link'

export default function Footer() {
  const t = useTranslations('footer');

  return (
      <Box as="footer" bg="darkGold" pt="14" pb="7">
        <Flex flexWrap="wrap" justifyContent="center" gap="5" alignItems="center" mt="6">
          {/* Discord */}
          <ChakraLink href="https://discord.com/invite/fYB4DPmQtW" isExternal>
            <Icon as={FaDiscord} w={5} h={5} color="black" />
            <Text>{t('discord')}</Text>
          </ChakraLink>
          {/* Twitter */}
          <ChakraLink href="https://twitter.com/KeepKeyDevs" isExternal>
            <Icon as={FaTwitter} w={5} h={5} color="black" />
            <Text>{t('twitter')}</Text>
          </ChakraLink>
          {/* Instagram */}
          <ChakraLink href="https://www.instagram.com/cryptokeepkey" isExternal>
            <Icon as={FaInstagram} w={5} h={5} color="black" />
            <Text>{t('instagram')}</Text>
          </ChakraLink>
          {/* Youtube */}
          <ChakraLink href="https://www.youtube.com/channel/UC6QCaloeHk-pgeC8Hhqxbuw" isExternal>
            <Icon as={FaYoutube} w={5} h={5} color="black" />
            <Text>{t('youtube')}</Text>
          </ChakraLink>
        </Flex>

        <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mt="6">
          <Link href="/limited-warranty" passHref>
            <ChakraLink px="4" _hover={{ textDecoration: 'underline' }} color="black">
              {t('limited_warranty')}
            </ChakraLink>
          </Link>
          <Text>|</Text>
          <Link href="/privacy-policy" passHref>
            <ChakraLink px="4" _hover={{ textDecoration: 'underline' }} color="black">
              {t('privacy_policy')}
            </ChakraLink>
          </Link>
          <Text>|</Text>
          <Link href="/refund-policy" passHref>
            <ChakraLink px="4" _hover={{ textDecoration: 'underline' }} color="black">
              {t('refund_policy')}
            </ChakraLink>
          </Link>
          <Text>|</Text>
          <Link href="/shipping-policy" passHref>
            <ChakraLink px="4" _hover={{ textDecoration: 'underline' }} color="black">
              {t('shipping_policy')}
            </ChakraLink>
          </Link>
          <Text>|</Text>
          <Link href="/terms-of-use" passHref>
            <ChakraLink px="4" _hover={{ textDecoration: 'underline' }} color="black">
              {t('terms_of_use')}
            </ChakraLink>
          </Link>
          <Text>|</Text>
          <Link href="/security" passHref>
            <ChakraLink px="4" _hover={{ textDecoration: 'underline' }} color="black">
              {t('security')}
            </ChakraLink>
          </Link>
        </Flex>

        <Text textAlign="center" mt="6" color="black">
          {t('copyright', { year: new Date().getFullYear() })}
        </Text>
      </Box>
  )
}
