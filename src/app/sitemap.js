import { HYDERABAD_LOCATIONS } from '@/config/locations';
import { CANONICAL_SLUGS } from '@/config/services';
import { SERVICE_DATA_MAP } from '@/config/serviceData';

export const dynamic = 'force-static';

const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[''`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const CHUNK_SIZE = 5000;

// Gather all slugs once
const subServiceSlugs = [];
Object.values(SERVICE_DATA_MAP).forEach(service => {
  if (service.subServices) {
    service.subServices.forEach(sub => {
      subServiceSlugs.push(sub.id);
    });
  }
});

const ALL_SERVICE_SLUGS = [...CANONICAL_SLUGS, ...subServiceSlugs];

export async function generateSitemaps() {
  const allPermutations = ALL_SERVICE_SLUGS.length * HYDERABAD_LOCATIONS.length;
  // Total includes statics, main services, area hubs, and localized pages
  const totalUrls = allPermutations + 10 + CANONICAL_SLUGS.length + HYDERABAD_LOCATIONS.length;
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

  const serviceRoutes = CANONICAL_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const areaLandingRoutes = HYDERABAD_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/service-areas/${toSlug(loc)}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // 2. massive Local permutations
  const locationServiceRoutes = [];
  for (const slug of ALL_SERVICE_SLUGS) {
    for (const location of HYDERABAD_LOCATIONS) {
      locationServiceRoutes.push({
        url: `${baseUrl}/${slug}-in-${toSlug(location)}/`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  // Combine ALL into a massive list
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaLandingRoutes,
    ...locationServiceRoutes,
  ];

  // Slice the items for this specific chunk
  const start = id * CHUNK_SIZE;
  const end = start + CHUNK_SIZE;
  
  return allRoutes.slice(start, end);
}
