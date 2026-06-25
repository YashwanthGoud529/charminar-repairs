import React from 'react';
import AboutContent from '@/components/about/AboutContent';
import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'About MeeHelper | 13+ Years of Appliance Repair Excellence in Hyderabad',
    description: 'Learn about MeeHelper, Hyderabad\'s most trusted doorstep repair service. 13+ years experience in fixing washing machines, fridges, ACs, and more.',
    canonicalPath: '/about-us',
});

const AboutPage = () => {
    const aboutSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About MeeHelper',
        description: 'MeeHelper is Hyderabad\'s premier home appliance repair service with over 13 years of trusted experience.',
        url: 'https://www.meehelper.com/about-us',
        publisher: {
            '@type': 'Organization',
            name: 'MeeHelper',
            logo: '/logo.png'
        }
    };

    return <AboutContent aboutSchema={aboutSchema} />;
};

export default AboutPage;
