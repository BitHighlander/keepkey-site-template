'use client';
import { FC, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@chakra-ui/react';

interface CTAButtonProps {
    locale: string;
}

export const CTAButton: FC<CTAButtonProps> = ({ locale }) => {
    const t = useTranslations();
    const [keepkeyAvailable, setKeepkeyAvailable] = useState(false);

    // Function to check KeepKey Desktop availability
    const checkKeepkeyAvailability = async (spec: string): Promise<boolean> => {
        try {
            console.log(`Checking availability at ${spec}`);
            const response = await fetch(spec, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                },
            });

            if (response.ok) {
                console.log('KeepKey Desktop is available.');
                return true;
            } else {
                console.log('KeepKey Desktop not available, received non-200 response:', response.status);
            }
        } catch (error) {
            console.error('Network error or KeepKey Desktop not running:', error);
        }

        return false;
    };

    // onStart function that checks KeepKey Desktop availability and sets state
    const onStart = async () => {
        const isAvailable = await checkKeepkeyAvailability('http://localhost:1646/spec/swagger.json');
        setKeepkeyAvailable(isAvailable);
        console.log('KeepKey availability state set to:', isAvailable);
    };

    // Call onStart once on component mount
    useEffect(() => {
        onStart();
    }, []);

    const handleButtonClick = async () => {
        console.log('Checking KeepKey availability before navigating...');
        const isAvailable = await checkKeepkeyAvailability('http://localhost:1646/spec/swagger.json');
        console.log('isAvailable:', isAvailable);
        console.log('locale:', locale);

        if (isAvailable) {
            console.log('KeepKey Desktop is available. Redirecting to KeepKey app...');
            window.location.href = 'http://app.keepkey.info'; // Navigate to the app if available
        } else {
            console.log(`KeepKey Desktop is not available. Redirecting to KeepKey website: https://keepkey.info/${locale}/launch`);
            window.location.href = `https://keepkey.info/${locale}/launch`; // Redirect to KeepKey website if not available
        }
    };

    return (
        <Button
            colorScheme="green"
            size="md"
            onClick={handleButtonClick}
        >
            {keepkeyAvailable ? t('Open App') : t('Launch')}
        </Button>
    );
};
