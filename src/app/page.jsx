import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import { BRAND } from '@/config/branding';
import Skeleton from '@/components/shared/Skeleton';
import LazySection from '@/components/shared/LazySection';

// Premium Fallbacks
const SectionSkeleton = () => (
    <section className="py-5 bg-light-soft overflow-hidden">
        <div className="container custom-container">
            <Skeleton width="280px" height="32px" className="mb-4" />
            <div className="row g-4 flex-nowrap">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="col-10 col-md-3">
                        <Skeleton height="240px" borderRadius="12px" className="mb-3" />
                        <Skeleton width="80%" height="20px" className="mb-2" />
                        <Skeleton width="40%" height="16px" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Category = dynamic(() => import('@/components/home/Category'), { 
    loading: () => <div className="container py-4"><Skeleton height="200px" /></div>,
    ssr: true 
});
const MostBookedServices = dynamic(() => import('@/components/home/MostBookedServices'), { 
    loading: () => <SectionSkeleton />,
    ssr: true 
});
const AdBanner = dynamic(() => import('@/components/home/AdBanner'), { 
    loading: () => <div className="container py-4"><Skeleton height="150px" borderRadius="12px" /></div>,
    ssr: true 
});
const AllServicesList = dynamic(() => import('@/components/home/AllServicesList'), { 
    loading: () => <SectionSkeleton />,
    ssr: true 
});
const PestControl = dynamic(() => import('@/components/home/PestControl'), { 
    loading: () => <SectionSkeleton />,
    ssr: true 
});
const HomeSafety = dynamic(() => import('@/components/home/HomeSafety'), { 
    loading: () => <SectionSkeleton />,
    ssr: true 
});

import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: `Appliance Repair Hyderabad | Trusted ${BRAND.name}`,
    description: `Top-rated appliance repair in Hyderabad. Expert service for AC, Fridge & Washing Machine. Same-day doorstep repair with 1-year warranty. Book now with ${BRAND.name}!`,
    canonicalPath: '/',
    keywords: `appliance repair hyderabad, home services hyderabad, ac repair hyderabad, refrigerator repair hyderabad, washing machine repair hyderabad, tv repair hyderabad, microwave repair hyderabad, ${BRAND.shortName} hyderabad`
});

export default function Home() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `https://www.charminarrepairs.com/#faq`,
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Do you provide same-day appliance repair in Hyderabad?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Yes, ${BRAND.name} offers same-day doorstep appliance repair services across Hyderabad. Our certified technicians typically arrive within 2 hours of booking.`
                }
            },
            {
                '@type': 'Question',
                name: 'Do you provide a warranty on repairs?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely! We provide a comprehensive 1-year warranty on all genuine spare parts replaced by our technicians, ensuring peace of mind.'
                }
            },
            {
                '@type': 'Question',
                name: 'Which areas in Hyderabad do you serve?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We serve all major localities in Hyderabad and Secunderabad including Gachibowli, Madhapur, Banjara Hills, Jubilee Hills, Kukatpally, L.B. Nagar, and Dilsukhnagar.'
                }
            },
            {
                '@type': 'Question',
                name: 'What types of appliances do you repair?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We repair all major home appliances including Air Conditioners, Refrigerators, Washing Machines, Televisions, Microwaves, Water Purifiers, and Geysers.'
                }
            }
        ]
    };

    return (
        <main className="home-page overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Hero />
            
            <LazySection fallback={<div className="container py-4"><Skeleton height="200px" /></div>}>
                <Category />
            </LazySection>
            
            {/* SEO Content Section to boost word count and keyword consistency */}
            <section className="seo-content-boost py-5 bg-white">
                <div className="container py-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 animate-fade-in-up">
                            <h2 className="fw-bold text-dark mb-4">Hyderabad's #1 Destination for Professional <span className="text-primary">Home Services</span> & Appliance Repair</h2>
                            <p className="text-muted fs-5 mb-4">
                                At <strong>{BRAND.name}</strong>, we understand that a malfunctioning appliance can disrupt your entire household schedule. That's why we've built a world-class network of certified technicians across Hyderabad and Secunderabad to provide **instant door-step solutions**. Whether you need an AC repair in Gachibowli or a washing machine service in Dilsukhnagar, our experts are just a call away.
                            </p>
                            <p className="text-muted mb-4 opacity-75">
                                Our commitment to technical excellence and customer satisfaction has made us the most trusted name in the industry. We don't just fix symptoms; we diagnose the root cause of every breakdown to ensure long-term reliability. With our transparent pricing starting at just ₹100 and a comprehensive 180-day warranty, you get professional service without the premium price tag.
                            </p>
                            <div className="d-flex gap-4 mt-5 mobile-center">
                                <div className="stat-item hover-lift">
                                    <div className="h3 fw-bold text-primary mb-0">150k+</div>
                                    <div className="small text-muted text-uppercase tracking-wider">Repairs Done</div>
                                </div>
                                <div className="vr text-muted opacity-25 d-none d-md-block"></div>
                                <div className="stat-item hover-lift">
                                    <div className="h3 fw-bold text-primary mb-0">13+</div>
                                    <div className="small text-muted text-uppercase tracking-wider">Years Experience</div>
                                </div>
                                <div className="vr text-muted opacity-25 d-none d-md-block"></div>
                                <div className="stat-item hover-lift">
                                    <div className="h3 fw-bold text-primary mb-0">2Hr</div>
                                    <div className="small text-muted text-uppercase tracking-wider">Arrival Time</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="h4 fw-bold mb-4 mobile-center">Comprehensive Care for Every Machine</h3>
                            <div className="accordion accordion-flush shadow-sm rounded-3 border overflow-hidden" id="seoAccordion">
                                {[
                                    { t: "Expert AC Maintenance & Gas Filling", d: "We provide complete split and window AC repair, deep jet cleaning, and gas charging services across Hyderabad." },
                                    { t: "Advanced Refrigerator & Fridge Solutions", d: "Our technicians specialize in double-door, side-by-side, and inverter fridge repairs using genuine compressors." },
                                    { t: "Precision Washing Machine Restoration", d: "From PCB repairs to drum replacements, we fix all top-load and front-load washing machine issues same-day." },
                                    { t: "Kitchen Appliance & RO Service", d: "Ensure your family's health with professional RO water purifier servicing and kitchen chimney cleaning." }
                                ].map((item, i) => (
                                    <div className="accordion-item" key={i}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fw-bold text-dark hover-lift" type="button" data-bs-toggle="collapse" data-bs-target={`#seo-item-${i}`}>
                                                {item.t}
                                            </button>
                                        </h2>
                                        <div id={`seo-item-${i}`} className="accordion-collapse collapse" data-bs-parent="#seoAccordion">
                                            <div className="accordion-body text-muted">
                                                {item.d}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <LazySection fallback={<SectionSkeleton />}>
                <MostBookedServices />
            </LazySection>

            <LazySection fallback={<div className="container py-4"><Skeleton height="150px" borderRadius="12px" /></div>}>
                <AdBanner />
            </LazySection>

            <LazySection fallback={<SectionSkeleton />}>
                <AllServicesList />
            </LazySection>

            <LazySection fallback={<SectionSkeleton />}>
                <PestControl />
            </LazySection>

            <LazySection fallback={<SectionSkeleton />}>
                <HomeSafety />
            </LazySection>
        </main>
    );
}
