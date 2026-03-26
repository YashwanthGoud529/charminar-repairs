import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import Breadcrumbs from '@/components/services/Breadcrumbs';
import AboutService from '@/components/services/AboutService';
import LocalReviews from '@/components/services/LocalReviews';
import NearbyLocations from '@/components/services/NearbyLocations';
import { notFound } from 'next/navigation';
import { HYDERABAD_LOCATIONS } from '@/config/locations';
import { SERVICE_CANONICAL_MAP, CANONICAL_SLUGS, HOME_PAGE_SLUGS } from '@/config/services';
import { constructMetadata } from '@/components/seo/constructMetadata';
import FAQ from '@/components/shared/FAQ';
import { SERVICE_DATA_MAP } from '@/config/serviceData';

// ─── Slug to Title Resolution (Memoized) ──────────────────────────────────────
let _cachedSlugMap = null;
let _cachedSortedSlugs = null;

function getSlugResolution() {
    if (_cachedSlugMap) return { SLUG_TO_TITLE: _cachedSlugMap, SORTED_SERVICE_SLUGS: _cachedSortedSlugs };

    const map = {
        ...Object.entries(SERVICE_CANONICAL_MAP).reduce((acc, [title, slug]) => ({ ...acc, [slug]: title }), {}),
        'ac-repairing': 'Air Conditioner Repair',
        'air-conditioner-service': 'Air Conditioner Repair',
        'fridge-repairing': 'Refrigerator Repair',
        'refrigerator-repairing': 'Refrigerator Repair',
        'washing-machine-repairing': 'Washing Machine Repair',
        'television-repairing': 'Television Repair',
        'tv-repairing': 'Television Repair',
        'ro-repairing': 'Water Purifier (RO) Service',
        'water-purifier-servicing': 'Water Purifier (RO) Service',
        'geyser-repairing': 'Geyser & Water Heater Repair',
        'chimney-repairing': 'Kitchen Chimney Service',
    };

    Object.values(SERVICE_DATA_MAP).forEach(service => {
        if (service.subServices) {
            service.subServices.forEach(sub => {
                map[sub.id] = sub.name;
            });
        }
    });

    _cachedSlugMap = map;
    _cachedSortedSlugs = Object.keys(map).sort((a, b) => b.length - a.length);
    return { SLUG_TO_TITLE: map, SORTED_SERVICE_SLUGS: _cachedSortedSlugs };
}

const toSlug = (str) =>
    str
        .toLowerCase()
        .replace(/[''`]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

export async function generateStaticParams() {
    return HOME_PAGE_SLUGS.map(slug => ({ slug }));
}

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

function parseSlugPattern(slug) {
    const { SLUG_TO_TITLE, SORTED_SERVICE_SLUGS } = getSlugResolution();
    
    // 1. Detect Suffixes
    let isNearMe = false;
    let workingSlug = slug;
    if (slug.endsWith('-near-me')) {
        isNearMe = true;
        workingSlug = slug.slice(0, -8);
    } else if (slug.endsWith('-near-by-me')) {
        isNearMe = true;
        workingSlug = slug.slice(0, -11);
    }

    // 2. Pure slug check
    if (SLUG_TO_TITLE[workingSlug]) return { serviceSlug: workingSlug, location: null, brand: null, isNearMe };

    // 3. Brand detection
    let detectedBrand = null;
    let remainingSlug = workingSlug;

    const allBrands = new Set();
    Object.values(SERVICE_DATA_MAP).forEach(s => s.brands?.forEach(b => allBrands.add(b)));
    
    for (const b of allBrands) {
        const bSlug = toSlug(b);
        if (workingSlug.startsWith(bSlug + '-')) {
            detectedBrand = b;
            remainingSlug = workingSlug.slice(bSlug.length + 1);
            break;
        }
    }

    // 4. Pattern check
    for (const sSlug of SORTED_SERVICE_SLUGS) {
        if (remainingSlug === sSlug) return { serviceSlug: sSlug, location: null, brand: detectedBrand, isNearMe };
        if (remainingSlug.startsWith(sSlug + '-')) {
            const locationRaw = remainingSlug.slice(sSlug.length + 1);
            const locPart = locationRaw.startsWith('in-') ? locationRaw.slice(3) : locationRaw;
            
            if (locPart === 'hyderabad') return { serviceSlug: sSlug, location: 'Hyderabad', brand: detectedBrand, isNearMe };
            
            const exactLocation = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === locPart);
            if (exactLocation) return { serviceSlug: sSlug, location: exactLocation, brand: detectedBrand, isNearMe };
        }
    }

    return { serviceSlug: workingSlug, location: null, brand: null, isNearMe };
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const { serviceSlug, location, brand, isNearMe } = parseSlugPattern(slug);
    const { SLUG_TO_TITLE } = getSlugResolution();
    const serviceName = SLUG_TO_TITLE[serviceSlug];

    if (!serviceName) return { title: 'Service Not Found' };

    const brandPart = brand ? `${brand} ` : '';
    const locPart = isNearMe ? 'Near Me' : (location ? `${location}, Hyderabad` : 'Hyderabad');
    const title = `${brandPart}${serviceName} Service in ${locPart} | Charminar Repairs Service`;
    const description = `Looking for ${brandPart.toLowerCase()}${serviceName.toLowerCase()} ${isNearMe ? 'near you' : `in ${locPart}`}? Expert doorstep repair with certified technicians, 100% genuine parts & 1-year warranty. Same-day service in Hyderabad.`;

    return constructMetadata({
        title,
        description,
        canonicalPath: `/services/${slug}/`,
        keywords: [brandPart + serviceName, locPart, `${serviceName} ${locPart}`].join(', '),
    });
}

export default async function ServiceDetailsPage({ params }) {
    const { slug } = await params;
    const { serviceSlug, location, brand, isNearMe } = parseSlugPattern(slug);
    const { SLUG_TO_TITLE } = getSlugResolution();
    const serviceName = SLUG_TO_TITLE[serviceSlug];

    if (!serviceName) return notFound();

    const brandPart = brand ? `${brand} ` : '';
    const locLabel = isNearMe ? 'Near Me' : (location ? `${location}, Hyderabad` : 'Hyderabad');
    const locSuffix = ` in ${locLabel}`;
    
    const image = getServiceImage(serviceName);
    const longDescription = `${brandPart}${serviceName}${locSuffix} is one of Charminar Repairs' leading premium offerings. Residents of ${locLabel} can count on our background-verified and certified experts for same-day resolution of all ${brand || 'appliance'} faults. We use genuine components and provide a comprehensive 1-year warranty on all household items.`;

    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': `${brandPart}${serviceName} in ${locLabel}`,
            'description': longDescription,
            'image': image,
            'brand': brand ? { '@type': 'Brand', 'name': brand } : undefined,
            'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '4.9',
                'reviewCount': '3241',
                'bestRating': '5',
                'worstRating': '1'
            },
            'review': [
                {
                    '@type': 'Review',
                    'author': { '@type': 'Person', 'name': 'Sameer K.' },
                    'datePublished': '2026-03-24',
                    'reviewBody': `I had my ${brandPart}${serviceName.toLowerCase()} done at my resident in ${locLabel} yesterday. Great experience.`,
                    'reviewRating': { '@type': 'Rating', 'ratingValue': '5' }
                }
            ],
            'offers': {
                '@type': 'Offer',
                'price': '100',
                'priceCurrency': 'INR',
                'availability': 'https://schema.org/InStock',
            },
            'provider': {
                '@type': 'LocalBusiness',
                'name': 'Charminar Repairs',
                'telephone': '+91-8008615049',
                'image': 'https://www.charminarrepairs.com/images/charminar-repairs-logo.jpeg',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Karwan',
                    'addressLocality': 'Hyderabad',
                    'addressRegion': 'Telangana',
                    'addressCountry': 'IN'
                }
            }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.charminarrepairs.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Hyderabad', 'item': 'https://www.charminarrepairs.com/' },
                { '@type': 'ListItem', 'position': 3, 'name': serviceName, 'item': `https://www.charminarrepairs.com/services/${serviceSlug}/` },
                { '@type': 'ListItem', 'position': 4, 'name': `${brandPart}${serviceName} in ${locLabel}`, 'item': `https://www.charminarrepairs.com/services/${slug}/` }
            ]
        }
    ];

    return (
        <div style={{ backgroundColor: '#fcfcfc' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumbs service={brand ? brand + ' ' + serviceName : serviceName} location={location || (isNearMe ? 'Near Me' : null)} />
            <ServiceTemplate
                title={`${brandPart}${serviceName}${locSuffix}`}
                description={`Premium doorstep ${brandPart}${serviceName.toLowerCase()} service with certified experts.`}
                image={image}
                longDescription={longDescription}
                slug={slug}
            />
            <AboutService serviceName={serviceName} locationLabel={location || (isNearMe ? 'Hyderabad' : 'Hyderabad')} />
            <FAQ 
                title={`${brandPart}${serviceName} in ${locLabel} - FAQ`}
                items={[
                    { question: `Why choose Charminar for ${brandPart}${serviceName.toLowerCase()} in ${locLabel}?`, answer: `We offer same-day, certified doorstep repairs for ${brand || 'premium appliances'} with a full 180-day guarantee.` },
                    { question: "Is the repair covered by warranty?", answer: "Yes, every repair comes with 1-year warranty on all spare parts." }
                ]}
            />
            <LocalReviews serviceName={serviceName} locationLabel={location || (isNearMe ? 'Hyderabad' : 'Hyderabad')} />
            <NearbyLocations serviceSlug={serviceSlug} serviceName={serviceName} currentLocation={location} />
        </div>
    );
}
