import React from 'react';
import AboutContent from '@/components/about/AboutContent';
import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'About Charminar Repairs | 13+ Years of Appliance Repair Excellence in Hyderabad',
    description: 'Learn about Charminar Repairs, Hyderabad\'s most trusted doorstep repair service. 13+ years experience in fixing washing machines, fridges, ACs, and more.',
    canonicalPath: '/about-us',
});

const AboutPage = () => {
    const aboutSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Charminar Repairs',
        description: 'Charminar Repairs is Hyderabad\'s premier home appliance repair service with over 12 years of trusted experience.',
        url: 'https://www.charminarrepairs.com/about-us',
        publisher: {
            '@type': 'Organization',
            name: 'Charminar Repairs',
            logo: '/images/charminar-repairs-logo.jpeg'
        }
    };

    return <AboutContent aboutSchema={aboutSchema} />;
};

export default AboutPage;
