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

const CHUNK_SIZE = 5000;

// Sort inputs to ensure stable chunking across parallel sitemap requests
const sortedLocations = [...HYDERABAD_LOCATIONS].sort();
const sortedBlogs = [...allBlogs].sort((a, b) => a.slug.localeCompare(b.slug));

// Gather unique main categories
const uniqueCanonicalSlugs = [...new Set(CANONICAL_SLUGS)].sort();

// Gather all unique sub-services
const subServiceSlugs = [];
Object.values(SERVICE_DATA_MAP).forEach(service => {
  if (service.subServices) {
    service.subServices.forEach(sub => {
      subServiceSlugs.push(sub.id);
    });
  }
});

const ALL_SERVICE_SLUGS = [...new Set([...uniqueCanonicalSlugs, ...subServiceSlugs])].sort();

export async function generateSitemaps() {
  const allPermutations = ALL_SERVICE_SLUGS.length * sortedLocations.length;
  // Total includes 10 statics, unique categories, unique areas, blogs, and permutations
  const totalUrls = 
    10 + 
    uniqueCanonicalSlugs.length + 
    sortedLocations.length + 
    sortedBlogs.length + 
    allPermutations;

  const numChunks = Math.ceil(totalUrls / CHUNK_SIZE);
  
  return Array.from({ length: numChunks }, (_, i) => ({ id: i }));
}

export default async function sitemap({ id }) {
  const baseUrl = 'https://www.charminarrepairs.com';
  const lastModified = new Date();

  // 1. Statics and main entries
  const staticRoutes = [
    '', '/about-us', '/service-areas', '/careers', '/privacy-policy',
    '/terms-of-service', '/refund-policy', '/contact-us', '/blog', '/pricing',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified,
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  const serviceRoutes = uniqueCanonicalSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const areaLandingRoutes = sortedLocations.map((loc) => ({
    url: `${baseUrl}/service-areas/${toSlug(loc)}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogRoutes = sortedBlogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}/`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 2. massive Local permutations
  const locationServiceRoutes = [];
  for (const slug of ALL_SERVICE_SLUGS) {
    for (const location of sortedLocations) {
      locationServiceRoutes.push({
        url: `${baseUrl}/${slug}-in-${toSlug(location)}/`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  // Combine ALL into a massive list (Order MUST be stable across all chunks)
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaLandingRoutes,
    ...blogRoutes,
    ...locationServiceRoutes,
  ];

  // Slice the items for this specific chunk
  const start = id * CHUNK_SIZE;
  const end = start + CHUNK_SIZE;
  
  return allRoutes.slice(start, end);
}
