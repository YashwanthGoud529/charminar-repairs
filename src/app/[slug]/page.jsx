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
const buildSlugMap = () => {
    const map = {
        ...Object.entries(SERVICE_CANONICAL_MAP).reduce((acc, [title, slug]) => ({ ...acc, [slug]: title }), {}),
        'ac-repairing': 'Air Conditioner Repair',
        'air-conditioner-service': 'Air Conditioner Repair',
        'fridge-repairing': 'Refrigerator Repair',
        'refrigerator-repairing': 'Refrigerator Repair',
        'washing-machine-repairing': 'Washing Machine Repair',
        'television-repairing': 'Television Repair',
        'tv-repairing': 'Television Repair',
        'tv-repair': 'Television Repair',
        'ro-repairing': 'Water Purifier (RO) Service',
        'water-purifier-servicing': 'Water Purifier (RO) Service',
        'geyser-repairing': 'Geyser & Water Heater Repair',
        'chimney-repairing': 'Kitchen Chimney Service',
        'kitchen-chimney-servicing': 'Kitchen Chimney Service',
        'microwave-repairing': 'Microwave Oven Repair',
        'pest-control-services': 'Pest Control Services',
        'home-repair-services': 'Home Repair Services',
        'appliance-repair-services': 'Home Repair Services',
        'all-services-hyderabad': 'Explore Our Services',
        'bathroom-cleaning': 'Intense Bathroom Cleaning', // Match key in SERVICE_DATA_MAP
        'insta-help': 'Insta Help',
        'foam-jet-ac-service': 'Foam-jet AC Service',
    };

    // Add all sub-services from data map
    Object.values(SERVICE_DATA_MAP).forEach(service => {
        if (service.subServices) {
            service.subServices.forEach(sub => {
                map[sub.id] = sub.name;
            });
        }
    });

    return map;
};

const SLUG_TO_TITLE = buildSlugMap();

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
    // Safety: only redirect if we have a valid canonical slug target
    const canonicalServiceSlug = SERVICE_CANONICAL_MAP[serviceName] || serviceSlug;
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
        <div style={{ backgroundColor: '#fdfdfd' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumbs service={serviceName} location={location} />
            <ServiceTemplate
                title={`${serviceName}${locSuffix}`}
                description={`Premium doorstep ${serviceName.toLowerCase()} service with certified experts.`}
                image={image}
                longDescription={longDescription}
                slug={slug}
            />
            <AboutService serviceName={serviceName} locationLabel={loc} />
            <LocalReviews serviceName={serviceName} locationLabel={loc} />
            <NearbyLocations serviceSlug={serviceSlug} serviceName={serviceName} currentLocation={location} />
            <FAQ 
                title={`${serviceName} in ${locLabel} - FAQ`}
                items={[
                    { question: `How much does ${serviceName.toLowerCase()} cost in ${locLabel}?`, answer: `Service visits start at just ₹100. The full repair cost depends on the specific fault and parts replaced.` },
                    { question: `Do you provide same-day ${serviceName.toLowerCase()} in ${loc}?`, answer: `Yes, we guarantee same-day doorstep service across ${loc} within 60 minutes of booking.` },
                    { question: "Is there a warranty on repairs?", answer: "Yes, we provide a 180-day comprehensive warranty on all parts and labour." }
                ]}
            />
        </div>
    );
}
