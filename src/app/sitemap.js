import { HYDERABAD_LOCATIONS } from '@/config/locations';
import { CANONICAL_SLUGS, SERVICE_CANONICAL_MAP } from '@/config/services';
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
  // We no longer need chunks as we are reducing the total URL count drastically
  return [{ id: 0 }];
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.charminarrepairs.com';

export default async function sitemap({ id }) {
  const lastModified = new Date();
  
  // 1. Get All Unique Canonical Slugs
  const uniqueCanonicalSlugs = [...new Set(CANONICAL_SLUGS)].sort();
  const subServiceSlugs = [];
  Object.values(SERVICE_DATA_MAP).forEach(service => {
      service.subServices?.forEach(sub => subServiceSlugs.push(sub.id));
  });

  const baseServiceSlugs = [...new Set([...uniqueCanonicalSlugs, ...subServiceSlugs])].sort();
  
  // 2. Add Brands for ALL appliance services (where brands exist)
  const brandServiceSlugs = [];
  Object.entries(SERVICE_CANONICAL_MAP).forEach(([name, slug]) => {
      const brands = SERVICE_DATA_MAP[name]?.brands || [];
      brands.forEach(b => {
          brandServiceSlugs.push(`${toSlug(b)}-${slug}`);
      });
  });

  const allMainSlugs = [...new Set([...baseServiceSlugs, ...brandServiceSlugs])].sort();

  // 3. Static Routes
  const staticRoutes = [
    '', '/about-us', '/service-areas', '/careers', '/privacy-policy',
    '/terms-of-service', '/refund-policy', '/contact-us', '/blog', '/pricing',
  ].map((route) => ({
    url: `${baseUrl}${route}/`, lastModified, changeFrequency: 'daily', priority: 1.0,
  }));

  // 4. Service Routes (Mainly Hyderabad-focused)
  const serviceRoutes = allMainSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}/`, lastModified, changeFrequency: 'weekly', priority: 0.9,
  }));

  // 5. Limited Location Landing Pages (just the top-level area categories)
  // We only include/index the area list pages to avoid micro-location page duplication
  const areaLandingRoutes = [
    '/service-areas/',
  ].map((route) => ({
    url: `${baseUrl}${route}/`, lastModified, changeFrequency: 'monthly', priority: 0.6,
  }));

  // 6. Blog Routes
  const sortedBlogs = [...allBlogs].sort((a, b) => a.slug.localeCompare(b.slug));
  const blogRoutes = sortedBlogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}/`, lastModified, changeFrequency: 'weekly', priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaLandingRoutes,
    ...blogRoutes,
  ];
}
