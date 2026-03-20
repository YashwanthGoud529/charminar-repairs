import React from 'react';
import PrivacyPolicyContent from '@/components/privacy/PrivacyPolicyContent';
import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Privacy Policy | Charminar Repairs Services',
    description: 'Our commitment to protecting your personal data when using our appliance repair services in Hyderabad.',
    canonicalPath: '/privacy-policy',
});

const PrivacyPolicyPage = () => {
    return <PrivacyPolicyContent />;
};

export default PrivacyPolicyPage;
