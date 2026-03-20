import { HYDERABAD_LOCATIONS } from '@/config/locations';
import { CANONICAL_SLUGS } from '@/config/services';

export const dynamic = 'force-static';

const SERVICE_SLUGS = CANONICAL_SLUGS;

const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[''`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export default function sitemap() {
  const baseUrl = 'https://www.charminarrepairs.com';
  const lastModified = new Date();

  const staticRoutes = [
    '',
    '/about-us',
    '/service-areas',
    '/careers',
    '/privacy-policy',
    '/terms-of-service',
    '/refund-policy',
    '/contact-us',
    '/blog',
    '/pricing',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Base Service Routes
  const serviceRoutes = SERVICE_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. Location-Specific Service Routes
  // This generates combinations like /ac-repair-in-ameerpet/
  const locationServiceRoutes = [];
  SERVICE_SLUGS.forEach((slug) => {
    HYDERABAD_LOCATIONS.forEach((location) => {
      locationServiceRoutes.push({
        url: `${baseUrl}/${slug}-in-${toSlug(location)}/`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return [...staticRoutes, ...serviceRoutes, ...locationServiceRoutes];
}
