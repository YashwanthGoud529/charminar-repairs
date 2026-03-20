import React from 'react';
import PricingContent from '@/components/pricing/PricingContent';
import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Transparent Pricing for Appliance Repairs in Hyderabad',
    description: 'Check our affordable and transparent pricing for AC, Refrigerator, and Washing Machine repairs in Hyderabad. No hidden costs, genuine parts, and 1-year warranty.',
    canonicalPath: '/pricing',
});

const PricingPage = () => {
    return <PricingContent />;
};

export default PricingPage;
