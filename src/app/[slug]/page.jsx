import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import Breadcrumbs from '@/components/services/Breadcrumbs';
import AboutService from '@/components/services/AboutService';
import LocalReviews from '@/components/services/LocalReviews';
import NearbyLocations from '@/components/services/NearbyLocations';
import { notFound, redirect } from 'next/navigation';
import { HYDERABAD_LOCATIONS } from '@/config/locations';
import { SERVICE_CANONICAL_MAP, CANONICAL_SLUGS, HOME_PAGE_SLUGS } from '@/config/services';
import { constructMetadata } from '@/components/seo/constructMetadata';
import FAQ from '@/components/shared/FAQ';

import { SERVICE_DATA_MAP } from '@/config/serviceData';

// ─── Slug to Title Resolution ────────────────────────────────────────────────
const SLUG_TO_TITLE = {
    ...Object.entries(SERVICE_CANONICAL_MAP).reduce((acc, [title, slug]) => ({ ...acc, [slug]: title }), {}),
    
    // Explicit Aliases
    'ac-repairing': 'Air Conditioner Repair',
    'air-conditioner-service': 'Air Conditioner Repair',
    'fridge-repairing': 'Refrigerator Repair',
    'washing-machine-repairing': 'Washing Machine Repair',
    'ro-repairing': 'Water Purifier (RO) Service',
    'geyser-repairing': 'Geyser & Water Heater Repair',
    'professional-appliance-repair': 'Professional Appliance Repair',
    'appliance-repair-hyderabad': 'Professional Appliance Repair',
};

const toSlug = (str) =>
    str
        .toLowerCase()
        .replace(/[''`]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

// Sorted by length descending to match longest possible service slug first
const SORTED_SERVICE_SLUGS = Object.keys(SLUG_TO_TITLE).sort((a, b) => b.length - a.length);

export async function generateStaticParams() {
    // Only pre-render the main canonical service pages for speed.
    // All 40,000+ location-specific pages will now be generated ON-DEMAND (Dynamically)
    // to keep the build size under 500MB while still covering every city in Hyderabad.
    return CANONICAL_SLUGS.map(slug => ({ slug }));
}

// Enable dynamic rendering for any slug combination not pre-rendered above
export const dynamicParams = true;

const getServiceImage = (serviceName) => {
    const serviceData = SERVICE_DATA_MAP[serviceName];
    if (serviceData?.photo) return serviceData.photo;
    const fallbackMap = {
        'Air Conditioner Repair': '/images/ac.png',
        'Refrigerator Repair': '/images/Refrigerator.png',
        'Washing Machine Repair': '/images/Laundry.png',
    };
    return fallbackMap[serviceName] || '/images/ac-repair.png';
};

// ─── Parse slug: "washing-machine-repair-alwal" ─────────────────────────
function parseSlugPattern(slug) {
    // 1. Check if it is a pure service slug
    if (SLUG_TO_TITLE[slug]) {
        return { serviceSlug: slug, location: null };
    }

    // 2. Try to split into {service}-{location}
    // We check from the start against our sorted service slugs
    for (const sSlug of SORTED_SERVICE_SLUGS) {
        if (slug.startsWith(sSlug + '-')) {
            const locationRaw = slug.slice(sSlug.length + 1);
            
            // Try matching with locations list
            const exactLocation = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === locationRaw);
            if (exactLocation) return { serviceSlug: sSlug, location: exactLocation };
            
            // Or try matching with '-in-' legacy format
            if (locationRaw.startsWith('in-')) {
                const locIn = locationRaw.slice(3);
                const exactInLoc = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === locIn);
                if (exactInLoc) return { serviceSlug: sSlug, location: exactInLoc };
            }
        }
    }

    // 3. Last resort fallback for "service-in-location"
    if (slug.includes('-in-')) {
        const parts = slug.split('-in-');
        const serviceSlugCandidate = parts[0];
        const locationRaw = parts[parts.length - 1];
        if (SLUG_TO_TITLE[serviceSlugCandidate]) {
             const exactLocation = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === locationRaw);
             if (exactLocation) return { serviceSlug: serviceSlugCandidate, location: exactLocation };
        }
    }

    return { serviceSlug: slug, location: null };
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const { serviceSlug, location } = parseSlugPattern(slug);
    const serviceName = SLUG_TO_TITLE[serviceSlug];

    if (!serviceName) return { title: 'Service Not Found' };

    const locLabel = location ? `${location}, Hyderabad` : 'Hyderabad';
    const title = `${serviceName} in ${locLabel} | Charminar Repairs — From ₹100`;
    const description = `Need ${serviceName.toLowerCase()} in ${locLabel}? Charminar Repairs offers same-day doorstep service within 60 minutes, starting at just ₹100. Certified technicians, genuine spare parts & 180-day warranty. Call now: +91-8008615049!`;

    return constructMetadata({
        title,
        description,
        canonicalPath: `/${slug}/`,
        keywords: [
            `${serviceName} in ${locLabel}`,
            `${serviceName} near me`,
            `${serviceName} ${locLabel}`,
            `best ${serviceName.toLowerCase()} ${locLabel}`,
            `affordable ${serviceName.toLowerCase()} ${locLabel}`,
            `doorstep ${serviceName.toLowerCase()} ${locLabel}`,
            'Charminar Repairs', 'Home Appliance Repair Hyderabad'
        ].join(', '),
    });
}

export default async function ServiceLocationPage({ params }) {
    const { slug } = await params;
    const { serviceSlug, location } = parseSlugPattern(slug);
    const serviceName = SLUG_TO_TITLE[serviceSlug];

    if (!serviceName) return notFound();

    // Redirect to canonical URL if needed
    const canonicalServiceSlug = SERVICE_CANONICAL_MAP[serviceName];
    const locSlug = location ? toSlug(location) : null;
    const currentCanonical = locSlug 
        ? `${canonicalServiceSlug}-in-${locSlug}`
        : canonicalServiceSlug;

    if (slug !== currentCanonical && slug !== `${currentCanonical}/`) {
        redirect(`/${currentCanonical}/`);
    }

    const image = getServiceImage(serviceName);
    const loc = location || 'Hyderabad';
    const locLabel = location ? `${location}, Hyderabad` : 'Hyderabad';
    const locSuffix = location ? ` in ${location}, Hyderabad` : ' in Hyderabad';

    const longDescription = `Charminar Repairs is ${locLabel}'s most trusted provider for expert ${serviceName}. Residents and businesses in ${locLabel} rely on our background-verified, certified technicians for same-day doorstep resolution of all appliance problems — starting at just ₹100. From critical electrical breakdowns to routine preventive maintenance, we use genuine OEM spare parts and a rigorous 25-point diagnostic protocol to restore your appliance to peak factory performance. Our service centre is located at Karwan, Hyderabad, and we proudly cover 50+ districts across ${locLabel} with a guaranteed 60-minute response time and 180-day service warranty on every repair.`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': `${serviceName} in ${locLabel}`,
        'description': longDescription,
        'offers': {
            '@type': 'Offer',
            'price': '100',
            'priceCurrency': 'INR',
            'availability': 'https://schema.org/InStock',
            'priceSpecification': {
                '@type': 'PriceSpecification',
                'minPrice': '100',
                'priceCurrency': 'INR'
            }
        },
        'provider': {
            '@type': 'LocalBusiness',
            'name': 'Charminar Repairs',
            'image': '/images/charminar-repairs-logo.png',
            'telephone': '+91-8008615049',
            'priceRange': '₹100 - ₹5000',
            'url': 'https://www.charminarrepairs.com',
            'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Karwan',
                'addressLocality': location || 'Hyderabad',
                'addressRegion': 'Telangana',
                'postalCode': '500006',
                'addressCountry': 'IN'
            },
            'geo': {
                '@type': 'GeoCoordinates',
                'latitude': '17.3850',
                'longitude': '78.4867'
            },
            'openingHoursSpecification': {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                'opens': '07:00',
                'closes': '22:00'
            },
            'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '4.9',
                'reviewCount': '10241'
            }
        },
        'areaServed': { '@type': 'City', 'name': locLabel },
        'termsOfService': '180-day service warranty on all repairs',
    };

    return (
        <div style={{ backgroundColor: '#fcfcfc' }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            
            <Breadcrumbs service={serviceName} location={location} />

            <ServiceTemplate
                title={`${serviceName}${locSuffix}`}
                description={`Premium doorstep ${serviceName.toLowerCase()} service with certified experts.`}
                image={image}
                longDescription={longDescription}
                slug={slug}
            />

            <AboutService serviceName={serviceName} locationLabel={location} />

            <FAQ 
                title={`${serviceName} in ${locLabel} — Frequently Asked Questions`}
                items={[
                    {
                        question: `How much does ${serviceName.toLowerCase()} cost in ${locLabel}?`,
                        answer: `${serviceName} in ${locLabel} starts at just ₹100 at Charminar Repairs. Our technician performs a free diagnosis on arrival and provides a transparent, no-obligation quote before starting any repair. You only pay after you're satisfied.`
                    },
                    {
                        question: `How quickly can you send a technician to ${loc}?`,
                        answer: `In ${locLabel}, we typically dispatch a certified technician within 60 minutes of booking. Call us on +91-8008615049 or book online, and we'll confirm your slot instantly. Same-day service is available for most areas in ${loc}.`
                    },
                    {
                        question: `Is the ${serviceName.toLowerCase()} covered under any warranty?`,
                        answer: `Yes! Every ${serviceName.toLowerCase()} performed by Charminar Repairs in ${locLabel} comes with a comprehensive 180-day service warranty on both parts and labour. If the same issue recurs within 180 days, we fix it absolutely free of charge.`
                    },
                    {
                        question: `Which brands do you repair in ${loc}?`,
                        answer: `Our technicians in ${locLabel} are trained to service all major brands including LG, Samsung, Whirlpool, IFB, Bosch, Godrej, Haier, Panasonic, Voltas, Daikin, and more. We carry genuine OEM spare parts for all models.`
                    },
                    {
                        question: `Do you offer doorstep service in ${loc}?`,
                        answer: `Absolutely! Charminar Repairs offers 100% doorstep ${serviceName.toLowerCase()} service across all areas of ${locLabel}. Our technician comes to your home or office — no need to carry your appliance anywhere. We're available 7 AM to 10 PM, 7 days a week including weekends.`
                    },
                    {
                        question: `Why choose Charminar Repairs for ${serviceName.toLowerCase()} in ${locLabel}?`,
                        answer: `Charminar Repairs is ${loc}'s most trusted appliance repair company with 10,000+ satisfied customers. We offer certified & background-verified technicians, 180-day warranty, genuine spare parts, transparent pricing from ₹100, and 60-minute arrival — all backed by our 100% satisfaction guarantee.`
                    },
                ]}
            />

            <LocalReviews serviceName={serviceName} locationLabel={location} />

            <NearbyLocations serviceSlug={canonicalServiceSlug || serviceSlug} serviceName={serviceName} currentLocation={location} />
        </div>
    );
}

