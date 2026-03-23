import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/shared/PageHero';
import { HYDERABAD_LOCATIONS } from '@/config/locations';
import { SERVICE_CANONICAL_MAP } from '@/config/services';
import { constructMetadata } from '@/components/seo/constructMetadata';
import './LocationPage.css';

// Helper to convert string to URL-friendly slug
const toSlug = (str) =>
    str
        .toLowerCase()
        .replace(/[''`]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

export async function generateMetadata({ params }) {
    const { slug } = await params;
    
    // Find matching location
    const matchedLoc = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === slug);
    if (!matchedLoc) return { title: 'Location Not Found' };

    return constructMetadata({
        title: `Appliance Repair Services in ${matchedLoc}, Hyderabad | Charminar Repairs`,
        description: `Looking for appliance repair in ${matchedLoc}? From AC and Refrigerator to Washing Machine and TV repair, Charminar Repairs offers 100% doorstep services in ${matchedLoc} with a 2-hour arrival guarantee. Book now for expert service!`,
        canonicalPath: `/service-areas/${slug}/`,
    });
}

const LocationServicePage = async ({ params }) => {
    const { slug } = await params;
    
    // Find matching location
    const matchedLoc = HYDERABAD_LOCATIONS.find(loc => toSlug(loc) === slug);
    if (!matchedLoc) return notFound();

    // Group services into categories
    const relevantServices = Object.entries(SERVICE_CANONICAL_MAP).map(([name, sSlug]) => ({
        name,
        slug: sSlug,
        link: `/${sSlug}-in-${slug}/`
    }));

    return (
        <main className="location-service-page bg-light min-vh-100 pb-5">
            <PageHero 
                title={`Expert Services in ${matchedLoc}`}
                subtitle={`Need help in ${matchedLoc}? Our nearest technician is standing by. We offer complete home appliance restoration across the Greater Hyderabad, Secunderabad, Medchal & Malkajgiri regions.`}
                breadcrumb={matchedLoc}
            />

            <section className="location-services py-5">
                <div className="container">
                    <div className="row g-4 align-items-center mb-5">
                        <div className="col-lg-7">
                            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">HYDERABAD LOCALITY HUB</span>
                            <h2 className="fw-bold text-dark display-6 mb-3">Home Restoration Near {matchedLoc}</h2>
                            <p className="text-muted fs-5">Charminar Repairs is your trusted partner for high-performance appliance repair in the <strong>{matchedLoc}</strong> residential and business area. Our experts arrive within 60-90 minutes of booking.</p>
                        </div>
                        <div className="col-lg-5 text-lg-end">
                             <a href="tel:8008615049" className="btn btn-primary btn-lg shadow-lg px-5 py-3 rounded-4">
                                 <i className="fas fa-phone-alt me-2"></i> CALL 8008615049
                             </a>
                        </div>
                    </div>

                    <div className="row g-4">
                        {relevantServices.map((service, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4">
                                <Link href={service.link} className="text-decoration-none h-100">
                                    <div className="service-at-location-card p-4 rounded-4 bg-white shadow-sm border h-100 hover-border-primary transition-all">
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="icon-badge bg-primary bg-opacity-10 text-primary p-3 rounded-circle">
                                                <i className="fas fa-tools fs-5"></i>
                                            </div>
                                            <span className="text-muted small fw-bold">₹100 MIN</span>
                                        </div>
                                        <h4 className="fw-bold text-dark mb-2">{service.name}</h4>
                                        <p className="text-muted small mb-4">Expert {service.name.toLowerCase()} performed at your doorstep in {matchedLoc} with 180-day warranty.</p>
                                        <div className="mt-auto d-flex align-items-center justify-content-between text-primary small fw-bold">
                                            <span>CHECK PRICING</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
;

export default LocationServicePage;
