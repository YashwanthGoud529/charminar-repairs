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

// ─── Slug to Title Resolution (Copy from [slug]/page.jsx) ───────────────────
const SLUG_TO_TITLE = {
    ...Object.entries(SERVICE_CANONICAL_MAP).reduce((acc, [title, slug]) => ({ ...acc, [slug]: title }), {}),
    'ac-repairing': 'Air Conditioner Repair',
    'air-conditioner-service': 'Air Conditioner Repair',
    'fridge-repairing': 'Refrigerator Repair',
    'washing-machine-repairing': 'Washing Machine Repair',
    'ro-repairing': 'Water Purifier (RO) Service',
    'geyser-repairing': 'Geyser & Water Heater Repair',
};

const toSlug = (str) =>
    str
        .toLowerCase()
        .replace(/[''`]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

const SORTED_SERVICE_SLUGS = Object.keys(SLUG_TO_TITLE).sort((a, b) => b.length - a.length);

export async function generateStaticParams() {
    // We only pre-render the root segments for build speed.
    // Location combinations are now handled 100% dynamically (On-Demand).
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
    if (SLUG_TO_TITLE[slug]) return { serviceSlug: slug, location: null };
    for (const sSlug of SORTED_SERVICE_SLUGS) {
        if (slug.startsWith(sSlug + '-')) {
            const locationRaw = slug.slice(sSlug.length + 1);
            const exactLocation = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === locationRaw);
            if (exactLocation) return { serviceSlug: sSlug, location: exactLocation };
            if (locationRaw.startsWith('in-')) {
                const locIn = locationRaw.slice(3);
                const exactInLoc = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === locIn);
                if (exactInLoc) return { serviceSlug: sSlug, location: exactInLoc };
            }
        }
    }
    if (slug.includes('-in-')) {
        const parts = slug.split('-in-');
        const sSlug = parts[0];
        const locationRaw = parts[parts.length - 1];
        if (SLUG_TO_TITLE[sSlug]) {
             const exactLocation = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === locationRaw);
             if (exactLocation) return { serviceSlug: sSlug, location: exactLocation };
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
    const title = `${serviceName} in ${locLabel} | Charminar Repairs Service`;
    const description = `Expert ${serviceName.toLowerCase()} in ${locLabel}. Same-day doorstep doorstep service for LG, Samsung, IFB & top brands. Certified technicians, 100% genuine parts & 1-year warranty. Book now!`;
    return constructMetadata({
        title,
        description,
        canonicalPath: `/services/${slug}/`,
        keywords: [serviceName, locLabel, `${serviceName} ${locLabel}`].join(', '),
    });
}

export default async function ServiceDetailsPage({ params }) {
    const { slug } = await params;
    const { serviceSlug, location } = parseSlugPattern(slug);
    const serviceName = SLUG_TO_TITLE[serviceSlug];
    if (!serviceName) return notFound();

    const image = getServiceImage(serviceName);
    const locLabel = location ? `${location}, Hyderabad` : 'Hyderabad';
    const locSuffix = location ? ` in ${location}, Hyderabad` : ' in Hyderabad';
    const longDescription = `Charminar Repairs is the leading provider for expert ${serviceName}${locSuffix}. Residents of ${locLabel} can count on our background-verified and certified experts for same-day resolution of all appliance faults. We use genuine components and provide a comprehensive 1-year warranty on all household items.`;

    return (
        <div style={{ backgroundColor: '#fcfcfc' }}>
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
                title={`${serviceName} in ${locLabel} - FAQ`}
                items={[
                    { question: `Why choose Charminar for ${serviceName.toLowerCase()} in ${locLabel}?`, answer: `We offer same-day, certified doorstep repairs with 1-year warranty.` },
                    { question: "Is the repair covered?", answer: "Yes, every repair comes with 1-year warranty on parts." }
                ]}
            />
            <LocalReviews serviceName={serviceName} locationLabel={location} />
            <NearbyLocations serviceSlug={serviceSlug} serviceName={serviceName} currentLocation={location} />
        </div>
    );
}
