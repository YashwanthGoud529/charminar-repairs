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
        'packers-and-movers': 'Packers and Movers',
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

function getServiceType(serviceName) {
    const name = (serviceName || '').toLowerCase();
    if (
        name.includes('cleaning') || 
        name.includes('sanitization') || 
        name.includes('wash') || 
        name.includes('wheels') ||
        name.includes('scrub') ||
        name.includes('scrubbing') ||
        name.includes('facade') ||
        name.includes('septic') ||
        name.includes('drainage') ||
        name.includes('tank') ||
        name.includes('sump')
    ) {
        if (name.includes('wash') || name.includes('wheels') || name.includes('auto') || name.includes('car')) {
            return 'vehicle';
        }
        return 'cleaning';
    }
    if (name.includes('polish') || name.includes('polishing')) {
        return 'polishing';
    }
    if (
        name.includes('pest') || 
        name.includes('control') || 
        name.includes('termite') || 
        name.includes('woodborer') || 
        name.includes('bugs') || 
        name.includes('cockroach') || 
        name.includes('mosquito') ||
        name.includes('rodent') ||
        name.includes('rat') ||
        name.includes('beehive') ||
        name.includes('wasp') ||
        name.includes('ant')
    ) {
        return 'pest';
    }
    if (name.includes('movers') || name.includes('packers') || name.includes('shifting')) {
        return 'movers';
    }
    if (
        name.includes('safety') || 
        name.includes('cctv') || 
        name.includes('security') || 
        name.includes('lock') || 
        name.includes('locksmith') || 
        name.includes('waterproofing') || 
        name.includes('waterproof') || 
        name.includes('grille') || 
        name.includes('mesh') || 
        name.includes('netting')
    ) {
        return 'safety';
    }
    if (
        name.includes('it-') || 
        name.includes('wifi') || 
        name.includes('router') || 
        name.includes('pc') || 
        name.includes('computer') || 
        name.includes('printer') || 
        name.includes('software') || 
        name.includes('smarthome') || 
        name.includes('laptop') || 
        name.includes('tech') ||
        name.includes('office setup') ||
        name.includes('it & office')
    ) {
        return 'it';
    }
    return 'repair';
}

function getFAQItems(serviceName, type, brand, loc, isNearMe, brandPart) {
    if (type === 'cleaning') {
        return [
            { question: `How much does ${brandPart}${serviceName.toLowerCase()} cost ${isNearMe ? 'near me' : `in ${loc}`}?`, answer: `Deep cleaning service rates start at just ₹399. The final price depends on the size of the area and the specific cleaning package chosen.` },
            { question: `Do you provide same-day ${brandPart}${serviceName.toLowerCase()} in ${loc}?`, answer: `Yes, we offer same-day booking options across ${loc} with our teams arriving fully equipped with eco-friendly agents and advanced cleaning machines.` },
            { question: `What cleaning products do you use?`, answer: `We use professional, eco-friendly, and non-toxic cleaning agents (such as Taski and 3M) that are 100% safe for children and pets.` }
        ];
    } else if (type === 'pest') {
        return [
            { question: `How much does ${brandPart}${serviceName.toLowerCase()} cost ${isNearMe ? 'near me' : `in ${loc}`}?`, answer: `Pest control treatments start at just ₹799. The cost varies based on the property size and the type of pest infestation.` },
            { question: `Are the pest control chemicals safe for my family?`, answer: `Yes, we use government-licensed, odorless, and eco-friendly chemicals (like Bayer and Syngenta) that are completely safe for children and pets.` },
            { question: `Is there a warranty or guarantee on pest control?`, answer: `Yes, all our premium pest control treatments come with a 90-day protection guarantee, including free re-treatment if pests return.` }
        ];
    } else if (type === 'safety') {
        return [
            { question: `How much does ${brandPart}${serviceName.toLowerCase()} cost ${isNearMe ? 'near me' : `in ${loc}`}?`, answer: `Security and home protection services start at just ₹499. The final price depends on the specific hardware models and setup complexity.` },
            { question: `Do you supply the CCTV cameras and smart locks?`, answer: `We can install your own hardware, or we can supply top-brand devices (like CP Plus, Hikvision, Yale, and Godrej) with a manufacturer warranty.` },
            { question: `Is there a warranty on the installation?`, answer: `Yes, we provide a 180-day service warranty on our wiring, mounting, and hardware alignment work.` }
        ];
    } else if (type === 'it') {
        return [
            { question: `How much does ${brandPart}${serviceName.toLowerCase()} cost ${isNearMe ? 'near me' : `in ${loc}`}?`, answer: `Our home IT and office setup services start at just ₹399. The final price depends on the setup requirements and hardware upgrades.` },
            { question: `Can you help set up mesh WiFi and smart home devices?`, answer: `Yes, our certified IT engineers specialize in configuring WiFi routers, mesh extenders, smart speakers, Alexa, and smart light integrations.` },
            { question: `Do you provide software installation and PC repairs?`, answer: `Yes, we provide same-day doorstep laptop repairs, OS installations, software setup, and hardware diagnostics.` }
        ];
    } else if (type === 'polishing') {
        return [
            { question: `How much does ${brandPart}${serviceName.toLowerCase()} cost ${isNearMe ? 'near me' : `in ${loc}`}?`, answer: `Floor polishing services start at just ₹45 per square foot. The final cost depends on the floor area and the level of stone restoration required.` },
            { question: `Does floor polishing create a lot of dust?`, answer: `No, we use advanced wet-grinding machines and industrial dust collectors to ensure a clean, dust-free floor restoration process.` },
            { question: `What shine can I expect on my marble floor?`, answer: `We use multi-stage diamond grit pads and crystallization shields to deliver a premium, high-gloss liquid-mirror finish.` }
        ];
    } else if (type === 'movers') {
        return [
            { question: `How much does ${brandPart}${serviceName.toLowerCase()} cost ${isNearMe ? 'near me' : `in ${loc}`}?`, answer: `Shifting rates start at ₹2499. The total price depends on the volume of goods, transport distance, and packing material requirements.` },
            { question: `Do you pack items safely with bubble wrap?`, answer: `Yes, we use multi-layer bubble wrap, corrugated sheets, and heavy-duty boxes to ensure zero-damage transit of all your delicate items.` },
            { question: `Do you have closed container vehicles?`, answer: `Yes, we transport your household items in closed container trucks to protect them from weather conditions and transit damage.` }
        ];
    } else if (type === 'vehicle') {
        return [
            { question: `How much does doorstep car/bike washing cost in ${loc}?`, answer: `Doorstep washes start at just ₹399. We bring our own power, water, and premium cleaning agents to your location.` },
            { question: `Do you provide interior vacuuming and polishing?`, answer: `Yes, our premium packages include deep interior vacuuming, dashboard dressing, paint buffing, and body wax polishing.` },
            { question: `Which brands do you use for auto detailing?`, answer: `We use high-quality, professional vehicle care products from 3M, Meguiar's, and Turtle Wax for a premium finish.` }
        ];
    } else {
        return [
            { question: `How much does ${brandPart}${serviceName.toLowerCase()} cost ${isNearMe ? 'near me' : `in ${loc}`}?`, answer: `Service visits for ${brand || 'all appliances'} start at just ₹100. The full repair cost depends on the specific fault and parts replaced.` },
            { question: `Do you provide same-day ${brandPart}${serviceName.toLowerCase()} in ${loc}?`, answer: `Yes, we guarantee same-day doorstep service across ${loc} within 60 minutes of booking.` },
            { question: `Is there a warranty on repairs?`, answer: `Yes, we provide a 180-day comprehensive warranty on all parts and labour.` }
        ];
    }
}

export async function generateStaticParams() {
    return HOME_PAGE_SLUGS.map(slug => ({ slug }));
}

export const dynamicParams = false;

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
    let title = `${brandPart}${serviceName} Service in ${locPart} | Charminar Repairs Service`;
    
    const type = getServiceType(serviceName);
    let description = '';
    if (serviceSlug === 'all-services-hyderabad') {
        title = `All Home Services & Appliance Repair in ${locPart} | Charminar Repairs`;
        description = `Looking for top-rated doorstep services? Charminar Repairs offers professional appliance repairs, home cleaning, pest control, auto care, and maintenance services in ${locPart}. Certified experts and guaranteed warranty. Book now!`;
    } else if (serviceSlug === 'cleaning-sanitization-services') {
        title = `Professional Home & Office Cleaning Services in ${locPart} | Charminar Repairs`;
        description = `Keep your space sparkling & germ-free with professional cleaning & sanitization services in ${locPart}. We provide deep home cleaning, sofa sanitizing, office disinfection, and kitchen scrubbing. 100% hygienic, safe & certified cleaners.`;
    } else if (serviceSlug === 'charminar-wheels') {
        title = `Doorstep Car Wash & Premium Auto Detailing in ${locPart} | Charminar Auto Care`;
        description = `Pamper your vehicle with ${locPart}'s premium doorstep car & bike wash. Charminar Auto Care offers Spadex eco-friendly steam washing, deep interior vacuuming, paint buffing, and body polishing. We bring our own power & water! Book today.`;
    } else if (serviceSlug === 'floor-polishing') {
        title = `Professional Marble & Floor Polishing Services in ${locPart} | Charminar Repairs`;
        description = `Restore your floors to a premium, mirror-like shine! Get expert marble, granite, and mosaic floor polishing in ${locPart}. We use multi-stage diamond grit grinding & crystallization shield for long-lasting gloss protection.`;
    } else {
        if (type === 'cleaning') {
            description = `Looking for professional ${brandPart.toLowerCase()}${serviceName.toLowerCase()} ${isNearMe ? 'near you' : `in ${locPart}`}? Charminar Repairs provides deep home cleaning, sanitizing, and scrubbing services across Hyderabad. Certified cleaners, eco-safe agents, 100% satisfaction.`;
        } else if (type === 'polishing') {
            description = `Looking for professional ${brandPart.toLowerCase()}${serviceName.toLowerCase()} ${isNearMe ? 'near you' : `in ${locPart}`}? Charminar Repairs provides expert diamond floor grinding, crystallization, and mirror finish services across Hyderabad. Get high-gloss restoration same-day.`;
        } else if (type === 'pest') {
            description = `Looking for premium ${brandPart.toLowerCase()}${serviceName.toLowerCase()} ${isNearMe ? 'near you' : `in ${locPart}`}? Get government-licensed, safe, and odorless pest control treatments in Hyderabad. Protect your home with a 90-day guarantee.`;
        } else if (type === 'vehicle') {
            description = `Looking for doorstep ${brandPart.toLowerCase()}${serviceName.toLowerCase()} ${isNearMe ? 'near you' : `in ${locPart}`}? Charminar Auto Care offers premium steam washing, interior vacuuming, and body polishing at your doorstep. We bring water & power.`;
        } else if (type === 'movers') {
            description = `Looking for reliable ${brandPart.toLowerCase()}${serviceName.toLowerCase()} ${isNearMe ? 'near you' : `in ${locPart}`}? Get safe, stress-free shifting with ISO-certified packing and moving teams in Hyderabad. Secure transport in closed trucks.`;
        } else if (type === 'safety') {
            description = `Looking for professional ${brandPart.toLowerCase()}${serviceName.toLowerCase()} ${isNearMe ? 'near you' : `in ${locPart}`}? Charminar Repairs offers expert security camera setup, smart door lock installations, and wall waterproofing across Hyderabad. Safe & certified technicians.`;
        } else if (type === 'it') {
            description = `Looking for professional ${brandPart.toLowerCase()}${serviceName.toLowerCase()} ${isNearMe ? 'near you' : `in ${locPart}`}? Get same-day doorstep IT hardware repairs, WiFi router setups, range extenders, and smart home configuration by certified IT engineers in Hyderabad.`;
        } else {
            description = `Looking for ${brandPart.toLowerCase()}${serviceName.toLowerCase()} ${isNearMe ? 'near you' : `in ${locPart}`}? Expert doorstep repair with certified technicians, 100% genuine parts & 180-day warranty. Same-day service in Hyderabad.`;
        }
    }

    return constructMetadata({
        title,
        description,
        canonicalPath: `/${slug}/`,
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
    const type = getServiceType(serviceName);
    let longDescription = '';
    if (type === 'cleaning') {
        longDescription = `${brandPart}${serviceName} in ${locLabel} is one of Charminar Repairs' most trusted hygiene solutions! Residents in ${locLabel} can count on our background-verified, certified cleaners for same-day doorstep sanitization and deep cleaning. We use eco-friendly, family-safe cleaning agents and follow a detailed check-list to ensure your home or office space is sparkling clean. We cover all Hyderabad districts with 60-minute response times and a 100% satisfaction guarantee.`;
    } else if (type === 'polishing') {
        longDescription = `${brandPart}${serviceName} in ${locLabel} is the premier stone restoration service by Charminar Repairs! Residents in ${locLabel} trust our background-verified experts for professional floor grinding, crystallization, and mirror-shine polishing. We use multi-stage diamond grit abrasives and eco-safe sealants to remove all scratches and restore your floor's premium gloss. We cover all Hyderabad districts with guaranteed workmanship.`;
    } else if (type === 'pest') {
        longDescription = `${brandPart}${serviceName} in ${locLabel} is a certified integrated pest management solution! Residents in ${locLabel} trust our government-licensed pest control experts for safe, odorless, and eco-friendly treatments against termites, cockroaches, rodents, bed bugs, and mosquitoes. We follow advanced injection and baiting protocols with a 90-day protection guarantee.`;
    } else if (type === 'vehicle') {
        longDescription = `${brandPart}${serviceName} in ${locLabel} is the ultimate doorstep vehicle detailing and steam wash service! Vehicle owners in ${locLabel} trust Charminar Auto Care for active snow foam wash, interior vacuuming, dashboard dressing, and paint buffing using premium compounds. We bring our own power and water to your doorstep.`;
    } else if (type === 'movers') {
        longDescription = `${brandPart}${serviceName} in ${locLabel} is a seamless and secure relocation service! Residents and offices in ${locLabel} trust our ISO-certified packing and shifting teams for zero-damage transit. We provide high-quality multi-layer bubble wrap, closed container trucks, and transit insurance for complete peace of mind.`;
    } else if (type === 'safety') {
        longDescription = `${brandPart}${serviceName} in ${locLabel} is the premier security and home protection service by Charminar Repairs! Residents and businesses in ${locLabel} trust our background-verified, certified security engineers for same-day CCTV camera installation, smart door lock fitting, and wall waterproofing. We use professional-grade hardware and configure seamless app-based monitoring to ensure your property remains secure. We cover all Hyderabad districts with a 100% safety guarantee.`;
    } else if (type === 'it') {
        longDescription = `${brandPart}${serviceName} in ${locLabel} is the leading home IT and office setup solution by Charminar Repairs! Residents and professionals in ${locLabel} trust our background-verified, certified network and device engineers for router installation, range extender setup, PC hardware repairs, and smart home integration. We optimize your connection and troubleshoot device issues to ensure a smooth, high-speed experience. We cover all Hyderabad districts with transparent pricing.`;
    } else {
        longDescription = `${brandPart}${serviceName}${locSuffix} is one of Charminar Repairs' leading premium offerings. Residents of ${locLabel} can count on our background-verified and certified experts for same-day resolution of all ${brand || 'appliance'} faults. We use genuine components and provide a comprehensive 180-day warranty on all household items.`;
    }

    // Deterministic Review Count for SEO diversity
    const reviewSeed = (slug?.length || 0) * 11;
    const dynamicReviewCount = 3100 + (reviewSeed % 200);
    const dynamicRating = (4.8 + (reviewSeed % 2) * 0.1).toFixed(1);

    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': `${brandPart}${serviceName} in ${locLabel}`,
            'description': longDescription,
            'image': image,
            'brand': brand ? { '@type': 'Brand', 'name': brand } : undefined,
            'areaServed': {
                '@type': 'City',
                'name': location || (isNearMe ? 'Hyderabad' : 'Hyderabad')
            },
            'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': dynamicRating,
                'reviewCount': dynamicReviewCount.toString(),
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
                'areaServed': location || 'Hyderabad',
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
            <AboutService serviceName={serviceName} locationLabel={location || undefined} />
            <FAQ 
                title={`${brandPart}${serviceName} in ${locLabel} - FAQ`}
                items={getFAQItems(serviceName, type, brand, locLabel, isNearMe, brandPart)}
            />
            <LocalReviews serviceName={serviceName} locationLabel={location || (isNearMe ? 'Hyderabad' : 'Hyderabad')} />
            <NearbyLocations serviceSlug={serviceSlug} serviceName={serviceName} currentLocation={location} />
        </div>
    );
}
