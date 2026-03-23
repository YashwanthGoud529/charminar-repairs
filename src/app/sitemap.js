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

// Extract all sub-service slugs once
const subServiceSlugs = [];
Object.values(SERVICE_DATA_MAP).forEach(service => {
  if (service.subServices) {
    service.subServices.forEach(sub => {
      subServiceSlugs.push(sub.id);
    });
  }
});

const ALL_SERVICE_SLUGS = [...CANONICAL_SLUGS, ...subServiceSlugs];
const SITEMAP_SIZE = 45000; // Safe limit per sitemap file

export async function generateSitemaps() {
  const totalRoutes = ALL_SERVICE_SLUGS.length * HYDERABAD_LOCATIONS.length;
  const count = Math.ceil(totalRoutes / SITEMAP_SIZE);
  return Array.from({ length: count }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }) {
  const baseUrl = 'https://www.charminarrepairs.com';
  const lastModified = new Date();

  // Part 0 includes static and main service routes
  if (id === 0) {
    const staticRoutes = [
      '', '/about-us', '/service-areas', '/careers', '/privacy-policy',
      '/terms-of-service', '/refund-policy', '/contact-us', '/blog', '/pricing',
    ].map((route) => ({
      url: `${baseUrl}${route}/`,
      lastModified,
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : 0.8,
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

    const locationServiceRoutes = [];
    let currentIdx = 0;
    const startIdx = id * SITEMAP_SIZE;
    const endIdx = (id + 1) * SITEMAP_SIZE;

    for (const slug of ALL_SERVICE_SLUGS) {
      for (const location of HYDERABAD_LOCATIONS) {
        if (currentIdx >= startIdx && currentIdx < endIdx) {
          locationServiceRoutes.push({
            url: `${baseUrl}/${slug}-in-${toSlug(location)}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
          });
        }
        currentIdx++;
      }
    }

    return [...staticRoutes, ...serviceRoutes, ...areaLandingRoutes, ...locationServiceRoutes];
  } else {
    // Subsequent parts only include location-specific combinations
    const locationServiceRoutes = [];
    let currentIdx = 0;
    const startIdx = id * SITEMAP_SIZE;
    const endIdx = (id + 1) * SITEMAP_SIZE;

    for (const slug of ALL_SERVICE_SLUGS) {
      for (const location of HYDERABAD_LOCATIONS) {
        if (currentIdx >= startIdx && currentIdx < endIdx) {
          locationServiceRoutes.push({
            url: `${baseUrl}/${slug}-in-${toSlug(location)}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
          });
        }
        currentIdx++;
      }
    }

    return locationServiceRoutes;
  }
}
