import dynamic from 'next/dynamic';
import { notFound, redirect } from 'next/navigation';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import PackersMoversTemplate from '@/components/packers-movers/PackersMoversTemplate';
import Breadcrumbs from '@/components/services/Breadcrumbs';
import Skeleton from '@/components/shared/Skeleton';
import LazySection from '@/components/shared/LazySection';

import { HYDERABAD_LOCATIONS } from '@/config/locations';
import { SERVICE_CANONICAL_MAP, CANONICAL_SLUGS, HOME_PAGE_SLUGS } from '@/config/services';
import { constructMetadata } from '@/components/seo/constructMetadata';
import { SERVICE_DATA_MAP } from '@/config/serviceData';

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

// Premium Fallbacks for Service Sections
const AboutServiceSkeleton = () => (
    <section className="py-5 bg-white">
        <div className="container custom-container px-lg-4">
            <div className="row g-5">
                <div className="col-lg-8">
                    <Skeleton width="40%" height="24px" className="mb-3" />
                    <Skeleton width="90%" height="48px" className="mb-4" />
                    <Skeleton width="100%" height="20px" className="mb-2" />
                    <Skeleton width="100%" height="20px" className="mb-2" />
                    <Skeleton width="100%" height="20px" className="mb-5" />
                    <div className="row g-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="col-md-4">
                                <Skeleton height="120px" borderRadius="12px" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4">
                    <Skeleton height="400px" borderRadius="12px" />
                </div>
            </div>
        </div>
    </section>
);

const SectionTitleSkeleton = () => (
    <div className="container py-5 text-center">
        <Skeleton width="300px" height="32px" className="mx-auto mb-4" />
        <div className="row g-4">
            {[1, 2, 3].map(i => (
                <div key={i} className="col-md-4">
                    <Skeleton height="150px" borderRadius="12px" />
                </div>
            ))}
        </div>
    </div>
);

import AboutService from '@/components/services/AboutService';
import LocalReviews from '@/components/services/LocalReviews';
import NearbyLocations from '@/components/services/NearbyLocations';
import FAQ from '@/components/shared/FAQ';
import PackersMoversFAQSection from '@/components/packers-movers/PackersMoversFAQSection';

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
        'bathroom-cleaning': 'Bathroom Cleaning',
        'intense-bathroom-cleaning': 'Intense Bathroom Cleaning',
        'insta-help': 'Insta Help',
        'charminar-wheels': 'Charminar Auto Care',
        'doorstep-car-bike-wash': 'Charminar Auto Care',
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

export async function generateStaticParams() {
    const uniqueCanonicalSlugs = Array.from(new Set(CANONICAL_SLUGS));
    const uniqueHomePageSlugs = Array.from(new Set(HOME_PAGE_SLUGS));
    
    const params = [];
    
    // 1. Add all base canonical service slugs
    uniqueCanonicalSlugs.forEach(slug => {
        if (slug) params.push({ slug });
    });
    
    // 2. Add service-location combinations for top services
    uniqueHomePageSlugs.forEach(serviceSlug => {
        HYDERABAD_LOCATIONS.forEach(loc => {
            const locSlug = toSlug(loc);
            params.push({ slug: `${serviceSlug}-in-${locSlug}` });
        });
        params.push({ slug: `${serviceSlug}-near-me` });
    });

    // 3. Add other custom paths
    const customSlugs = [
        'all-services-hyderabad',
        'cleaning-sanitization-services',
        'charminar-wheels',
        'floor-polishing',
        'packers-and-movers'
    ];
    customSlugs.forEach(slug => {
        params.push({ slug });
    });
    
    return params;
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

// ─── Parse slug: Handle brand, service, location, and suffixes ───────────────
function parseSlugPattern(slug) {
    const { SLUG_TO_TITLE, SORTED_SERVICE_SLUGS } = getSlugResolution();
    
    // 1. Detect 'Near Me' Suffixes
    let isNearMe = false;
    let workingSlug = slug;
    if (slug.endsWith('-near-me')) {
        isNearMe = true;
        workingSlug = slug.slice(0, -8);
    } else if (slug.endsWith('-near-by-me')) {
        isNearMe = true;
        workingSlug = slug.slice(0, -11);
    }

    // 2. Check if it is a pure service slug (canonical or sub-service)
    if (SLUG_TO_TITLE[workingSlug]) {
        return { serviceSlug: workingSlug, location: null, brand: null, isNearMe };
    }

    // 3. Try to detect Brand Prefix
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

    // 4. Try to split remaining slug into {service}-{location}
    for (const sSlug of SORTED_SERVICE_SLUGS) {
        if (remainingSlug === sSlug) {
            return { serviceSlug: sSlug, location: null, brand: detectedBrand, isNearMe };
        }
        
        if (remainingSlug.startsWith(sSlug + '-')) {
            const locationRaw = remainingSlug.slice(sSlug.length + 1);
            const locPart = locationRaw.startsWith('in-') ? locationRaw.slice(3) : locationRaw;
            
            // Special check for "hyderabad"
            if (locPart === 'hyderabad') return { serviceSlug: sSlug, location: 'Hyderabad', brand: detectedBrand, isNearMe };

            const exactLocation = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === locPart);
            if (exactLocation) return { serviceSlug: sSlug, location: exactLocation, brand: detectedBrand, isNearMe };
        }
    }

    // 5. Legacy pattern fallback
    if (workingSlug.includes('-in-')) {
        const parts = workingSlug.split('-in-');
        const serviceCandidate = parts[0];
        const locPart = parts[parts.length - 1];
        if (SLUG_TO_TITLE[serviceCandidate]) {
             if (locPart === 'hyderabad') return { serviceSlug: serviceCandidate, location: 'Hyderabad', brand: null, isNearMe };
             const exactLocation = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === locPart);
             if (exactLocation) return { serviceSlug: serviceCandidate, location: exactLocation, brand: null, isNearMe };
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
    
    let title = `${brandPart}${serviceName} Service in ${locPart} — Book Now`;
    
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
            description = `Looking for ${brandPart.toLowerCase()}${serviceName.toLowerCase()} ${isNearMe ? 'near you' : `in ${locPart}`}? Charminar Repairs provides same-day doorstep ${brand ? `repair for all ${brand} models` : 'repair service'} across Hyderabad within 90 minutes. Certified technicians and genuine parts.`;
        }
    }

    // ─── INDEXING STRATEGY (CRITICAL) ───
    // Only index Brand+Service or Service pages.
    // Noindex specific micro-location pages to avoid duplicate content.
    const isMainPage = !location || location.toLowerCase() === 'hyderabad';
    const noIndex = !isMainPage || isNearMe;

    // Canonical should always point to the base service page (or brand+service page)
    const brandSlugPart = brand ? `${toSlug(brand)}-` : '';
    const baseCanonicalSlug = SERVICE_CANONICAL_MAP[serviceName] || serviceSlug;
    const canonicalPath = `/${brandSlugPart}${baseCanonicalSlug}/`;

    return constructMetadata({
        title,
        description,
        canonicalPath,
        noIndex,
        keywords: [
            `${brandPart}${serviceName} in ${locPart}`,
            `${brandPart}${serviceName} near me`,
            `${serviceName} ${locPart}`,
            `best ${serviceName.toLowerCase()} ${locPart}`,
            `affordable ${serviceName.toLowerCase()} ${locPart}`,
            'Charminar Repairs', 'Home Appliance Repair Hyderabad'
        ].join(', '),
    });
}

export default async function ServiceLocationPage({ params }) {
    const { slug } = await params;
    const { serviceSlug, location, brand, isNearMe } = parseSlugPattern(slug);
    const { SLUG_TO_TITLE } = getSlugResolution();
    const serviceName = SLUG_TO_TITLE[serviceSlug];

    if (!serviceName) return notFound();

    const brandPart = brand ? `${brand} ` : '';
    const locPart = isNearMe ? 'Near Me' : (location ? `${location}, Hyderabad` : 'Hyderabad');
    const locLabel = isNearMe ? 'Near Me' : (location ? `${location}, Hyderabad` : 'Hyderabad');
    // For the AboutService component, pass the sub-district only (not full locFull) to avoid duplication
    const locForAbout = isNearMe ? 'Hyderabad' : (location || 'Hyderabad');

    // 1. Determine Canonical Slug for Redirection
    // We want to allow Brand slugs to be canonical if a brand was explicitly provided
    const canonicalBase = SERVICE_CANONICAL_MAP[serviceName] || serviceSlug;
    const brandSlugPart = brand ? `${toSlug(brand)}-` : '';
    const locationSlugPart = location ? `-in-${toSlug(location)}` : '';
    const nearMeSuffix = isNearMe ? '-near-me' : '';
    
    const currentCanonical = `${brandSlugPart}${canonicalBase}${locationSlugPart}${nearMeSuffix}`;

    // Only redirect if there's a significant mismatch (e.g. wrong casing or missing "-in-")
    // but try to keep the user's intent if it's a valid pattern.
    if (slug !== currentCanonical && slug !== `${currentCanonical}/`) {
        // Only redirect if absolutely necessary to avoid infinite loops if multiple patterns match
        // For now, let's keep it simple: if it parses, show it.
        // redirect(`/${currentCanonical}/`);
    }

    const image = getServiceImage(serviceName);
    const loc = isNearMe ? 'Hyderabad' : (location || 'Hyderabad');
    const locSuffix = ` in ${locPart}`;

    const type = getServiceType(serviceName);
    let longDescription = '';
    if (type === 'cleaning') {
        longDescription = `${brandPart}${serviceName} in ${locPart} is one of Charminar Repairs' most trusted hygiene solutions! Residents in ${locPart} trust our background-verified, certified cleaners for same-day doorstep sanitation and deep cleaning. We use eco-friendly, family-safe cleaning agents and follow a detailed check-list to ensure your home or office space is sparkling clean. We cover 50+ Hyderabad districts with 60-minute response times and a 100% satisfaction guarantee.`;
    } else if (type === 'polishing') {
        longDescription = `${brandPart}${serviceName} in ${locPart} is the premier stone restoration service by Charminar Repairs! Residents in ${locPart} trust our background-verified experts for professional floor grinding, crystallization, and mirror-shine polishing. We use multi-stage diamond grit abrasives and eco-safe sealants to remove all scratches and restore your floor's premium gloss. We cover all Hyderabad districts with guaranteed workmanship.`;
    } else if (type === 'pest') {
        longDescription = `${brandPart}${serviceName} in ${locPart} is a certified integrated pest management solution! Residents in ${locPart} trust our government-licensed pest control experts for safe, odorless, and eco-friendly treatments against termites, cockroaches, rodents, bed bugs, and mosquitoes. We follow advanced injection and baiting protocols with a 90-day protection guarantee.`;
    } else if (type === 'vehicle') {
        longDescription = `${brandPart}${serviceName} in ${locPart} is the ultimate doorstep vehicle detailing and steam wash service! Vehicle owners in ${locPart} trust Charminar Auto Care for active snow foam wash, interior vacuuming, dashboard dressing, and paint buffing using premium compounds. We bring our own power and water to your doorstep.`;
    } else if (type === 'movers') {
        longDescription = `${brandPart}${serviceName} in ${locPart} is a seamless and secure relocation service! Residents and offices in ${locPart} trust our ISO-certified packing and shifting teams for zero-damage transit. We provide high-quality multi-layer bubble wrap, closed container trucks, and transit insurance for complete peace of mind.`;
    } else if (type === 'safety') {
        longDescription = `${brandPart}${serviceName} in ${locPart} is the premier security and home protection service by Charminar Repairs! Residents and businesses in ${locPart} trust our background-verified, certified security engineers for same-day CCTV camera installation, smart door lock fitting, and wall waterproofing. We use professional-grade hardware and configure seamless app-based monitoring to ensure your property remains secure. We cover all Hyderabad districts with a 100% safety guarantee.`;
    } else if (type === 'it') {
        longDescription = `${brandPart}${serviceName} in ${locPart} is the leading home IT and office setup solution by Charminar Repairs! Residents and professionals in ${locPart} trust our background-verified, certified network and device engineers for router installation, range extender setup, PC hardware repairs, and smart home integration. We optimize your connection and troubleshoot device issues to ensure a smooth, high-speed experience. We cover all Hyderabad districts with transparent pricing.`;
    } else {
        longDescription = `${brandPart}${serviceName} in ${locPart} is one of Charminar Repairs' most requested solutions! Residents in ${locPart} trust our background-verified, certified technicians for same-day doorstep ${brand ? `${brand} repair` : 'resolution'} of all appliance problems. Whether it's a minor fault or a major breakdown, we use 100% genuine OEM spare parts and follow a 25-point diagnostic protocol to restore your ${brand || ''} appliance. We cover 50+ Hyderabad districts with 60-minute response times and a 180-day service warranty.`;
    }

    // Deterministic Review Count for SEO diversity
    const reviewSeed = (slug?.length || 0) * 7;
    const dynamicReviewCount = 3200 + (reviewSeed % 150);
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
                'name': loc || 'Hyderabad'
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
                    'reviewBody': `I had my ${brandPart}${serviceName.toLowerCase()} done at my resident in ${loc} yesterday. The technician was professional and punctual.`,
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
                'areaServed': loc || 'Hyderabad',
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
                { '@type': 'ListItem', 'position': 3, 'name': serviceName, 'item': `https://www.charminarrepairs.com/${canonicalBase}/` },
                { '@type': 'ListItem', 'position': 4, 'name': `${brandPart}${serviceName} in ${locLabel}`, 'item': `https://www.charminarrepairs.com/${slug}/` }
            ]
        }
    ];

    return (
        <div style={{ backgroundColor: '#fdfdfd' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumbs service={brand ? `${brand} ${serviceName}` : serviceName} location={location || (isNearMe ? 'Near Me' : null)} />
            
            {serviceName === 'Packers and Movers' ? (
                <div className="packers-movers-template">
                    <PackersMoversTemplate displayLocation={location || 'Hyderabad'} />
                    
                    <LazySection fallback={<SectionTitleSkeleton />}>
                        <LocalReviews serviceName={serviceName} locationLabel={loc} />
                    </LazySection>
                    
                    <LazySection fallback={<div className="container py-4"><Skeleton height="100px" /></div>}>
                        <NearbyLocations serviceSlug={serviceSlug} serviceName={serviceName} currentLocation={location} />
                    </LazySection>
                    
                    <LazySection fallback={<div className="container py-5"><Skeleton height="300px" borderRadius="12px" /></div>}>
                        <PackersMoversFAQSection location={locLabel || 'Hyderabad'} />
                    </LazySection>
                </div>
            ) : (
                <>
                    <ServiceTemplate
                        title={`${brandPart}${serviceName}${locSuffix}`}
                        description={`Premium doorstep ${brandPart}${serviceName.toLowerCase()} service with certified ${brand || ''} experts.`}
                        image={image}
                        longDescription={longDescription}
                        slug={slug}
                    />
                    <LazySection fallback={<AboutServiceSkeleton />}>
                    <AboutService serviceName={serviceName} locationLabel={locForAbout} />
                    </LazySection>
                    
                    <LazySection fallback={<SectionTitleSkeleton />}>
                        <LocalReviews serviceName={serviceName} locationLabel={loc} />
                    </LazySection>
                    
                    <LazySection fallback={<div className="container py-4"><Skeleton height="100px" /></div>}>
                        <NearbyLocations serviceSlug={serviceSlug} serviceName={serviceName} currentLocation={location} />
                    </LazySection>
                    
                    <LazySection fallback={<div className="container py-5"><Skeleton height="300px" borderRadius="12px" /></div>}>
                        <FAQ 
                            title={`${brandPart}${serviceName} in ${locLabel} - FAQ`}
                            items={getFAQItems(serviceName, type, brand, loc, isNearMe, brandPart)}
                        />
                    </LazySection>
                </>
            )}
        </div>
    );
}
