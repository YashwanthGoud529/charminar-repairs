const { HYDERABAD_LOCATIONS } = require('./src/config/locations');
const { CANONICAL_SLUGS, SERVICE_CANONICAL_MAP } = require('./src/config/services');
const { SERVICE_DATA_MAP } = require('./src/config/serviceData');
const { blogs } = require('./src/lib/blogs');

const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[''‘]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

function getAllPermutationSlugs() {
    const uniqueCanonicalSlugs = [...new Set(CANONICAL_SLUGS)].sort();
    const subServiceSlugs = [];
    Object.values(SERVICE_DATA_MAP).forEach(service => {
        service.subServices?.forEach(sub => subServiceSlugs.push(sub.id));
    });

    const baseServiceSlugs = [...new Set([...uniqueCanonicalSlugs, ...subServiceSlugs])].sort();
    
    const brandServiceSlugs = [];
    const MAJOR_SERVICES = ['ac-repairing', 'refrigerator-repairing', 'washing-machine-repairing', 'tv-repairing', 'microwave-repairing'];
    
    Object.entries(SERVICE_CANONICAL_MAP).forEach(([name, slug]) => {
        if (MAJOR_SERVICES.includes(slug)) {
            const brands = SERVICE_DATA_MAP[name]?.brands || [];
            brands.forEach(b => {
                const bSlug = toSlug(b);
                brandServiceSlugs.push(`${bSlug}-${slug}`);
            });
        }
    });

    const allBaseSlugs = [...new Set([...baseServiceSlugs, ...brandServiceSlugs])].sort();
    const nearMeSlugs = allBaseSlugs.map(s => `${s}-near-me`);
    const allSearchableSlugs = [...allBaseSlugs, ...nearMeSlugs];

    return {
        allSearchableSlugs,
        allBaseSlugs,
        uniqueCanonicalSlugs,
        subServiceSlugs,
        brandServiceSlugs
    };
}

const { allSearchableSlugs, allBaseSlugs, uniqueCanonicalSlugs, subServiceSlugs, brandServiceSlugs } = getAllPermutationSlugs();
const sortedLocations = [...HYDERABAD_LOCATIONS, 'Hyderabad'].sort();
const sortedBlogs = blogs;

console.log('--- Page Counts ---');
console.log('Static Routes:', 10);
console.log('Unique Canonical Slugs:', uniqueCanonicalSlugs.length);
console.log('Sub-Service Slugs:', subServiceSlugs.length);
console.log('Brand-Service Slugs:', brandServiceSlugs.length);
console.log('Total Base Slugs:', allBaseSlugs.length);
console.log('All Searchable Slugs (Base + Near-Me):', allSearchableSlugs.length);
console.log('Locations:', sortedLocations.length);
console.log('Blogs:', sortedBlogs.length);

console.log('\n--- Calculated Totals ---');
console.log('Base Pages (Static + Services + Locations + Blogs):', 10 + allSearchableSlugs.length + sortedLocations.length + sortedBlogs.length);
console.log('Dynamic Permutations (Service x Location):', allSearchableSlugs.length * sortedLocations.length);
console.log('Total URLs in Sitemap:', 10 + allSearchableSlugs.length + sortedLocations.length + sortedBlogs.length + (allSearchableSlugs.length * sortedLocations.length));
