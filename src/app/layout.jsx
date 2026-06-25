import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import MainLayoutWrapper from '@/components/shared/MainLayoutWrapper';
import ScrollToTop from '@/components/shared/ScrollToTop';
import ThirdPartyScripts from '@/components/shared/ThirdPartyScripts';
import Providers from './providers';
import { Poppins } from 'next/font/google';
import { constructMetadata } from '@/components/seo/constructMetadata';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = constructMetadata({
  title: 'Appliance Repair Hyderabad | MeeHelper Service',
  description: 'Trusted appliance repair in Hyderabad. Certified service for ACs, fridges & washers. 180-Day Warranty. Book same-day repair.',
  canonicalPath: '/',
  keywords: 'appliance repair Hyderabad, washing machine repair Hyderabad, AC repair Hyderabad, refrigerator repair Hyderabad, microwave repair Hyderabad, TV repair Hyderabad, same-day appliance repair, doorstep repair Hyderabad, MeeHelper, home appliance service center Hyderabad, 180-day warranty repair',
});

import StyledJsxRegistry from './registry';

// JSON-LD: Organization + LocalBusiness schema for Google rich results
const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      "@type": "LocalBusiness",
      "name": "MeeHelper",
      "image": "/logo.png",
      "url": "https://www.meehelper.com",
      "telephone": "+91 8008615049",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Karwan",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500006",
        "addressCountry": "IN"
      },
      "areaServed": "Hyderabad",
      "priceRange": "₹₹",
      "sameAs": [
        "https://www.facebook.com/meehelper",
        "https://www.instagram.com/meehelper",
        "https://www.linkedin.com/company/meehelper",
        "https://www.youtube.com/@meehelper",
        "https://twitter.com/meehelper"
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.meehelper.com/#organization',
      name: 'MeeHelper',
      url: 'https://www.meehelper.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.meehelper.com/#logo',
        url: '/logo.png',
        width: 300,
        height: 100,
        caption: 'MeeHelper',
      },
      image: {
        '@id': 'https://www.meehelper.com/#logo',
      },
      sameAs: [
        'https://www.facebook.com/meehelper',
        'https://www.instagram.com/meehelper',
        'https://twitter.com/meehelper',
        'https://www.youtube.com/@meehelper',
        'https://www.linkedin.com/company/meehelper',
        'https://g.co/kgs/meehelper',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-8008615049',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Telugu', 'Hindi', 'Urdu'],
          contactOption: 'TollFree',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '08:00',
            closes: '20:00',
          },
        }
      ],
      email: 'contact@meehelper.com',
      foundingDate: '2013',
      areaServed: {
        '@type': 'City',
        name: 'Hyderabad',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.meehelper.com/#website',
      url: 'https://www.meehelper.com',
      name: 'MeeHelper',
      description: 'Professional home appliance repair service in Hyderabad with same-day service and 180-day warranty.',
      publisher: {
        '@id': 'https://www.meehelper.com/#organization',
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.meehelper.com/{search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      ],
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${poppins.variable}`}>
      <head>
        <meta charSet="utf-8" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Load Font Awesome stylesheet statically */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Preload Critical Assets for better LCP */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/assets/Images/appliance/icons/ac.jpg" as="image" />
        <link rel="preload" href="/assets/Images/appliance/icons/washing-machine.jpg" as="image" />
        <link rel="preload" href="/assets/Images/appliance/icons/fridge.jpg" as="image" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="home">
        <StyledJsxRegistry>
          <Providers>
            <MainLayoutWrapper>
              {children}
            </MainLayoutWrapper>
            <ScrollToTop />
          </Providers>
        </StyledJsxRegistry>

        <ThirdPartyScripts />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
