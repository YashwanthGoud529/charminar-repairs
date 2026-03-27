import { NextResponse } from 'next/server';
import { HYDERABAD_LOCATIONS } from '@/config/locations';
import { CANONICAL_SLUGS, SERVICE_CANONICAL_MAP } from '@/config/services';
import { SERVICE_DATA_MAP } from '@/config/serviceData';
import { blogs as allBlogs } from '@/lib/blogs';

export async function GET() {
  try {
    const toSlug = (str) =>
      str
        .toLowerCase()
        .replace(/['''`]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    function getAllPermutationSlugs() {
      const uniqueCanonicalSlugs = [...new Set(CANONICAL_SLUGS)].sort();
      const subServiceSlugs = [];
      Object.values(SERVICE_DATA_MAP).forEach((service) => {
        service.subServices?.forEach((sub) => subServiceSlugs.push(sub.id));
      });

      const baseServiceSlugs = [...new Set([...uniqueCanonicalSlugs, ...subServiceSlugs])].sort();

      const brandServiceSlugs = [];
      const MAJOR_SERVICES = [
        'ac-repairing',
        'refrigerator-repairing',
        'washing-machine-repairing',
        'tv-repairing',
        'microwave-repairing',
      ];

      Object.entries(SERVICE_CANONICAL_MAP).forEach(([name, slug]) => {
        if (MAJOR_SERVICES.includes(slug)) {
          const brands = SERVICE_DATA_MAP[name]?.brands || [];
          brands.forEach((b) => {
            const bSlug = toSlug(b);
            brandServiceSlugs.push(`${bSlug}-${slug}`);
          });
        }
      });

      const allBaseSlugs = [...new Set([...baseServiceSlugs, ...brandServiceSlugs])].sort();
      const nearMeSlugs = allBaseSlugs.map((s) => `${s}-near-me`);
      const allSearchableSlugs = [...allBaseSlugs, ...nearMeSlugs];

      return {
        allSearchableSlugs,
        allBaseSlugs,
        uniqueCanonicalSlugs,
        subServiceSlugs,
        brandServiceSlugs,
      };
    }

    const {
      allSearchableSlugs,
      allBaseSlugs,
      uniqueCanonicalSlugs,
      subServiceSlugs,
      brandServiceSlugs,
    } = getAllPermutationSlugs();

    const sortedLocations = [...HYDERABAD_LOCATIONS, 'Hyderabad'].sort();
    const sortedBlogs = [...allBlogs].sort((a, b) => a.slug.localeCompare(b.slug));

    const counts = {
      staticRoutes: 10,
      canonicalServices: uniqueCanonicalSlugs.length,
      subServices: subServiceSlugs.length,
      brands: brandServiceSlugs.length,
      totalBaseSlugs: allBaseSlugs.length,
      allSearchableSlugs: allSearchableSlugs.length,
      locations: sortedLocations.length,
      blogs: sortedBlogs.length,
    };

    const totals = {
      basePages: counts.staticRoutes + counts.allSearchableSlugs + counts.locations + counts.blogs,
      permutations: counts.allSearchableSlugs * counts.locations,
      grandTotal: counts.staticRoutes + counts.allSearchableSlugs + counts.locations + counts.blogs + (counts.allSearchableSlugs * counts.locations)
    };

    return NextResponse.json({
      success: true,
      counts,
      totals,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error calculating page stats:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
