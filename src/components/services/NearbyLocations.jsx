import React from 'react';
import Link from 'next/link';
import { HYDERABAD_LOCATIONS } from '@/config/locations';

const NearbyLocations = ({ serviceSlug, serviceName, currentLocation }) => {
    // Get 8 random locations to suggest
    const suggestedLocations = HYDERABAD_LOCATIONS
        .filter(l => l !== currentLocation)
        .sort(() => 0.5 - Math.random())
        .slice(0, 8);

    const toSlug = (str) =>
        str
            .toLowerCase()
            .replace(/[''`]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

    return (
        <section className="nearby-locations-section py-5 bg-white border-top">
            <div className="container custom-container px-lg-4">
                <h3 className="fw-black text-dark fs-4 mb-4">Nearby Areas for {serviceName}</h3>
                <div className="row g-3">
                    {suggestedLocations.map((loc, i) => (
                        <div key={i} className="col-lg-3 col-md-4 col-6">
                            <Link 
                                href={`/${serviceSlug}-in-${toSlug(loc)}/`} 
                                className="d-block p-3 border border-light bg-light rounded-3 text-decoration-none text-muted transition-all hover-dark hover-border-primary text-nowrap text-truncate"
                                style={{ fontSize: '13px' }}
                                title={`${serviceName} in ${loc}`}
                            >
                                <i className="fas fa-map-marker-alt me-2 text-primary opacity-50"></i>
                                {serviceName} in {loc}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NearbyLocations;
