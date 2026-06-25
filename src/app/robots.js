export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/partner/',
          '/api/',
          '/_next/',
          '/cart/',
          '/checkout/',
        ],
      },
    ],
    sitemap: 'https://www.meehelper.com/sitemap.xml',
    host: 'https://www.meehelper.com'
  };
}
