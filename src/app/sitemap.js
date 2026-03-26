import { HYDERABAD_LOCATIONS } from '@/config/locations';
import { CANONICAL_SLUGS } from '@/config/services';
import { SERVICE_DATA_MAP } from '@/config/serviceData';
import { blogs as allBlogs } from '@/lib/blogs';

export const dynamic = 'force-static';

const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[''`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const CHUNK_SIZE = 45000;

// ─── Sitemap Logic ────────────────────────────────────────────────────────────

// 1. Get All Permutations (including brands and near-me)
function getAllPermutationSlugs() {
    // Unique canonical slugs and sub-services
    const uniqueCanonicalSlugs = [...new Set(CANONICAL_SLUGS)].sort();
    const subServiceSlugs = [];
    Object.values(SERVICE_DATA_MAP).forEach(service => {
        service.subServices?.forEach(sub => subServiceSlugs.push(sub.id));
    });

    const baseServiceSlugs = [...new Set([...uniqueCanonicalSlugs, ...subServiceSlugs])].sort();
    
    // Add Brands for major services
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
    
    // Add "near-me" versions
    const nearMeSlugs = allBaseSlugs.map(s => `${s}-near-me`);
    const allSearchableSlugs = [...allBaseSlugs, ...nearMeSlugs];

    return allSearchableSlugs;
}

export async function generateSitemaps() {
  const allSearchableSlugs = getAllPermutationSlugs();
  const sortedLocations = [...HYDERABAD_LOCATIONS, 'Hyderabad'].sort();
  const sortedBlogs = [...allBlogs].sort((a, b) => a.slug.localeCompare(b.slug));

  const allPermutations = allSearchableSlugs.length * sortedLocations.length;
  
  // Base URLs: 10 static + categories + locations + blogs
  const baseCount = 10 + allSearchableSlugs.length + sortedLocations.length + sortedBlogs.length;
  const totalUrls = baseCount + allPermutations;

  const numChunks = Math.ceil(totalUrls / CHUNK_SIZE);
  return Array.from({ length: numChunks }, (_, i) => ({ id: i }));
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.charminarrepairs.com';

export default async function sitemap({ id }) {
  const lastModified = new Date();
  const allSearchableSlugs = getAllPermutationSlugs();
  const sortedLocations = [...HYDERABAD_LOCATIONS, 'Hyderabad'].sort();
  const sortedBlogs = [...allBlogs].sort((a, b) => a.slug.localeCompare(b.slug));

  // 1. Base components
  const staticRoutes = [
    '', '/about-us', '/service-areas', '/careers', '/privacy-policy',
    '/terms-of-service', '/refund-policy', '/contact-us', '/blog', '/pricing',
  ].map((route) => ({
    url: `${baseUrl}${route}/`, lastModified, changeFrequency: 'daily', priority: 1.0,
  }));

  const serviceRoutes = allSearchableSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}/`, lastModified, changeFrequency: 'weekly', priority: 0.9,
  }));

  const areaLandingRoutes = sortedLocations.map((loc) => ({
    url: `${baseUrl}/service-areas/${toSlug(loc)}/`, lastModified, changeFrequency: 'monthly', priority: 0.6,
  }));

  const blogRoutes = sortedBlogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}/`, lastModified, changeFrequency: 'weekly', priority: 0.8,
  }));

  const baseRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaLandingRoutes,
    ...blogRoutes,
  ];

  // 2. Permutation slicing
  const allPermutationsCount = allSearchableSlugs.length * sortedLocations.length;
  const globalStart = id * CHUNK_SIZE;
  const globalEnd = (id + 1) * CHUNK_SIZE;

  const routes = [];

  // Add relevant base routes for this chunk
  if (globalStart < baseRoutes.length) {
    routes.push(...baseRoutes.slice(globalStart, globalEnd));
  }

  // Calculate permutation range
  const permStart = Math.max(0, globalStart - baseRoutes.length);
  const permEnd = Math.max(0, globalEnd - baseRoutes.length);

  for (let i = permStart; i < Math.min(permEnd, allPermutationsCount); i++) {
    const serviceIndex = Math.floor(i / sortedLocations.length);
    const locationIndex = i % sortedLocations.length;
    
    const slug = allSearchableSlugs[serviceIndex];
    const loc = sortedLocations[locationIndex];
    
    routes.push({
      url: `${baseUrl}/${slug}-in-${toSlug(loc)}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  return routes;
}
