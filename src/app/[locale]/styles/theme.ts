import { extendTheme } from '@chakra-ui/react';

const colors = {
    keepkeyGold: {
        50: '#fff9e6',
        100: '#ffeab3',
        200: '#ffdb80',
        300: '#ffcc4d',
        400: '#ffbd1a',
        500: '#e6a300',
        600: '#b37f00',
        700: '#805b00',
        800: '#4d3800',
        900: '#1a1400',
    },
    keepkeyBlack: {
        50: '#e3e3e3',
        100: '#b6b6b6',
        200: '#8a8a8a',
        300: '#5d5d5d',
        400: '#333333',
        500: '#0d0d0d',
        600: '#0a0a0a',
        700: '#080808',
        800: '#050505',
        900: '#030303',
    },
};

export const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
    colors: {
        keepkeyGold: colors.keepkeyGold,
        black: colors.keepkeyBlack,
    },
    fonts: {
        heading: 'Plus Jakarta Sans, sans-serif',  // Or use var(--font-rubik) if you're adding custom fonts
        body: 'Plus Jakarta Sans, sans-serif',
    },
});
