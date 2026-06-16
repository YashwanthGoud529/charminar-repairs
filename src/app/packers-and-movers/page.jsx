import React from 'react';
import PackersMoversTemplate from '@/components/packers-movers/PackersMoversTemplate';
import { constructMetadata } from '@/components/seo/constructMetadata';
import PackersMoversFAQSection from '@/components/packers-movers/PackersMoversFAQSection';
import LocalReviews from '@/components/services/LocalReviews';

export const metadata = constructMetadata({
    title: 'Professional Packers and Movers in Hyderabad | Insured Relocation',
    description: 'Looking for reliable packers and movers in Hyderabad? Charminar Repairs offers 100% safe, closed container-truck relocation with 3-layer packing and free transit damage coverage. Calculate shifting cost instantly!',
    canonicalPath: '/packers-and-movers/',
});

const PackersMoversPage = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Packers and Movers in Hyderabad',
        'description': 'Professional doorstep shifting and packing services across Hyderabad with covered container trucks and free insurance.',
        'provider': {
            '@type': 'LocalBusiness',
            'name': 'Charminar Repairs Packers & Movers',
            'telephone': '+91-8008615049',
            'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Karwan',
                'addressLocality': 'Hyderabad',
                'addressRegion': 'Telangana',
                'addressCountry': 'IN'
            }
        }
    };

    return (
        <div className="packers-movers-template" style={{ backgroundColor: '#fdfdfd' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PackersMoversTemplate displayLocation="Hyderabad" />
            
            <div className="container custom-container py-4">
                <LocalReviews serviceName="Packers and Movers" locationLabel="Hyderabad" />
            </div>

            <PackersMoversFAQSection location="Hyderabad" />
        </div>
    );
};

export default PackersMoversPage;
