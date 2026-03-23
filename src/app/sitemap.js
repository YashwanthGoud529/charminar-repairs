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
// const SITEMAP_SIZE = 500000; // Consolidated: Single file for all 50k potential routes

export default function sitemap() {
  const baseUrl = 'https://www.charminarrepairs.com';
  const lastModified = new Date();

  // 1. Static Routes
  const staticRoutes = [
    '', '/about-us', '/service-areas', '/careers', '/privacy-policy',
    '/terms-of-service', '/refund-policy', '/contact-us', '/blog', '/pricing',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Main Service Routes
  const serviceRoutes = CANONICAL_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. Area Landing Hubs
  const areaLandingRoutes = HYDERABAD_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/service-areas/${toSlug(loc)}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // 4. Massive Local permututations (Unlimited - up to 50,000 in one file)
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

  // Combine everything into one single XML sitemap file as requested
  return [...staticRoutes, ...serviceRoutes, ...areaLandingRoutes, ...locationServiceRoutes];
}
