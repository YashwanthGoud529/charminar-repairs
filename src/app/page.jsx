import React from 'react';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/home/Hero'), { ssr: true });
const Category = dynamic(() => import('@/components/home/Category'), { ssr: true });
const MostBookedServices = dynamic(() => import('@/components/home/MostBookedServices'), { ssr: true });
const AdBanner = dynamic(() => import('@/components/home/AdBanner'), { ssr: true });
const AllServicesList = dynamic(() => import('@/components/home/AllServicesList'), { ssr: true });
const PestControl = dynamic(() => import('@/components/home/PestControl'), { ssr: true });
const HomeSafety = dynamic(() => import('@/components/home/HomeSafety'), { ssr: true });

import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Expert Appliance Repair Hyderabad | Charminar Repairs Service',
    description: 'Trusted doorstep appliance repair in Hyderabad. Certified experts for AC, Refrigerator, Washing Machine, TV & Microwave. 1-Year Warranty on parts. Same-day service in 2 hours. Book now for high-quality, professional repairs.',
    canonicalPath: '/',
    keywords: 'appliance repair hyderabad, ac repair hyderabad, refrigerator repair hyderabad, washing machine repair hyderabad, tv repair hyderabad, microwave repair hyderabad, ro service hyderabad, geyser repair hyderabad'
});

export default function Home() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://www.charminarrepairs.com/#faq',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Do you provide same-day appliance repair in Hyderabad?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Charminar Repairs offers same-day doorstep appliance repair services across Hyderabad. Our certified technicians typically arrive within 2 hours of booking.'
                }
            },
            {
                '@type': 'Question',
                name: 'Do you provide a warranty on repairs?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely! We provide a comprehensive 1-year warranty on all genuine spare parts replaced by our technicians, ensuring peace of mind.'
                }
            },
            {
                '@type': 'Question',
                name: 'Which areas in Hyderabad do you serve?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We serve all major localities in Hyderabad and Secunderabad including Gachibowli, Madhapur, Banjara Hills, Jubilee Hills, Kukatpally, L.B. Nagar, and Dilsukhnagar.'
                }
            },
            {
                '@type': 'Question',
                name: 'What types of appliances do you repair?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We repair all major home appliances including Air Conditioners, Refrigerators, Washing Machines, Televisions, Microwaves, Water Purifiers, and Geysers.'
                }
            }
        ]
    };

    return (
        <main className="home-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Hero />
            <Category />
            <MostBookedServices />
            <AdBanner />
            <AllServicesList />
            <PestControl />
            <HomeSafety />
        </main>
    );
}
