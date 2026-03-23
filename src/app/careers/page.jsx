import React from 'react';
import CareersContent from '@/components/careers/CareersContent';
import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Careers at Charminar Repairs | Join Hyderabad\'s Leading Appliance Repair Team',
    description: 'Join Charminar Repairs in Hyderabad! We are hiring expert technicians for washing machine repair, fridge repair, and AC services across all areas of Hyderabad. Apply now for rewarding career opportunities.',
    canonicalPath: '/careers',
});

const CareersPage = () => {
    const careersSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Careers at Charminar Repairs',
        description: 'Career opportunities for appliance repair technicians in Hyderabad. Join our team for washing machine, refrigerator, and air conditioner repair jobs.',
        url: 'https://www.charminarrepairs.com/careers',
        publisher: {
            '@type': 'Organization',
            name: 'Charminar Repairs',
            logo: '/images/charminar-repairs-logo.jpeg'
        }
    };

    return <CareersContent careersSchema={careersSchema} />;
};

export default CareersPage;
