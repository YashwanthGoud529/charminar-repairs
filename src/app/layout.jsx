import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import ClientScripts from '../components/ClientScripts';
import MainLayoutWrapper from '@/components/shared/MainLayoutWrapper';
import ScrollToTop from '@/components/shared/ScrollToTop';
import Providers from './providers';
import { Outfit } from 'next/font/google';
import { constructMetadata } from '@/components/seo/constructMetadata';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = constructMetadata({
  title: 'Appliance Repair Hyderabad | Charminar Repairs Service',
  description: 'Trusted appliance repair in Hyderabad. Certified service for ACs, fridges & washers. 1-Year Warranty. Book same-day repair.',
  canonicalPath: '/',
  keywords: 'appliance repair Hyderabad, washing machine repair Hyderabad, AC repair Hyderabad, refrigerator repair Hyderabad, microwave repair Hyderabad, TV repair Hyderabad, same-day appliance repair, doorstep repair Hyderabad, Charminar Repairs, home appliance service center Hyderabad, 1 year warranty repair',
});

import StyledJsxRegistry from './registry';

// JSON-LD: Organization + LocalBusiness schema for Google rich results
const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      "@type": "LocalBusiness",
      "name": "Charminar Repairs",
      "image": "/images/charminar-repairs-logo.jpeg",
      "url": "https://www.charminarrepairs.com",
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
        "https://www.facebook.com/charminarrepairs",
        "https://www.instagram.com/charminarrepairs"
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.charminarrepairs.com/#organization',
      name: 'Charminar Repairs',
      url: 'https://www.charminarrepairs.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.charminarrepairs.com/#logo',
        url: '/images/charminar-repairs-logo.jpeg',
        width: 300,
        height: 100,
        caption: 'Charminar Repairs',
      },
      image: {
        '@id': 'https://www.charminarrepairs.com/#logo',
      },
      sameAs: [
        'https://www.facebook.com/charminarrepairs',
        'https://www.instagram.com/charminarrepairs',
        'https://twitter.com/charminarrepairs',
        'https://www.youtube.com/@charminarrepairs',
        'https://g.co/kgs/charminarrepairs',
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
      email: 'contact@charminarrepairs.com',
      foundingDate: '2013',
      areaServed: {
        '@type': 'City',
        name: 'Hyderabad',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.charminarrepairs.com/#website',
      url: 'https://www.charminarrepairs.com',
      name: 'Charminar Repairs',
      description: 'Professional home appliance repair service in Hyderabad with same-day service and 1-year warranty.',
      publisher: {
        '@id': 'https://www.charminarrepairs.com/#organization',
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.charminarrepairs.com/{search_term_string}',
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
    <html lang="en-IN" className={`${outfit.variable}`}>
      <head>
        <meta charSet="utf-8" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Font Awesome — loaded async to eliminate render-blocking */}
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" as="style" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" media="print" onLoad="this.media='all'" crossOrigin="anonymous" />
        <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" /></noscript>

        {/* Preload Logo for LCP */}
        <link rel="preload" href="/images/charminar-repairs-logo.jpeg" as="image" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="home">
        {/* Google Tag Manager — deferred until user interacts to save ~106KiB blocking */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WBWPP63W');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBWPP63W"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>

        <StyledJsxRegistry>
          <Providers>
            <MainLayoutWrapper>
              {children}
            </MainLayoutWrapper>
            <ScrollToTop />
          </Providers>
        </StyledJsxRegistry>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9089863982371941" crossOrigin="anonymous" strategy="lazyOnload" />
      </body>
    </html>
  );
}
