import React from 'react';
import CareersContent from '@/components/careers/CareersContent';
import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Careers at MeeHelper | Join Hyderabad\'s Leading Appliance Repair Team',
    description: 'Join MeeHelper in Hyderabad! We are hiring expert technicians for washing machine repair, fridge repair, and AC services across all areas of Hyderabad. Apply now for rewarding career opportunities.',
    canonicalPath: '/careers',
});

const CareersPage = () => {
    const careersSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Careers at MeeHelper',
        description: 'Career opportunities for appliance repair technicians in Hyderabad. Join our team for washing machine, refrigerator, and air conditioner repair jobs.',
        url: 'https://www.meehelper.com/careers',
        publisher: {
            '@type': 'Organization',
            name: 'MeeHelper',
            logo: '/logo.png'
        }
    };

    return <CareersContent careersSchema={careersSchema} />;
};

export default CareersPage;
