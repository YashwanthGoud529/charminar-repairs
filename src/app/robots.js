export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/cart/',
          '/checkout/',
        ],
      },
    ],
    sitemap: 'https://www.charminarrepairs.com/sitemap.xml',
    host: 'https://www.charminarrepairs.com'
  };
}
