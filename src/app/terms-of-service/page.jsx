import React from 'react';
import { constructMetadata } from '@/components/seo/constructMetadata';
import TermsContent from '@/components/terms/TermsContent';

export const metadata = constructMetadata({
    title: 'Terms of Service | Charminar Repairs Hyderabad',
    description: 'Read the terms and conditions for using Charminar Repairs appliance repair services in Hyderabad.',
    canonicalPath: '/terms-of-service',
});

export default function TermsOfServicePage() {
    return <TermsContent />;
}
