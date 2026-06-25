import React from 'react';
import { constructMetadata } from '@/components/seo/constructMetadata';
import TermsContent from '@/components/terms/TermsContent';

export const metadata = constructMetadata({
    title: 'Terms of Service | MeeHelper Hyderabad',
    description: 'Read the terms and conditions for using MeeHelper appliance repair services in Hyderabad.',
    canonicalPath: '/terms-of-service',
});

export default function TermsOfServicePage() {
    return <TermsContent />;
}
