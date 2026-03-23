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

    // SVG Map Marker Icon
    const MapMarkerIcon = () => (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="me-2 text-primary opacity-50"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
    );

    return (
        <section className="nearby-locations-section py-5 bg-white border-top">
            <div className="container custom-container px-lg-4">
                <h3 className="fw-black text-dark fs-4 mb-4">Nearby Areas for {serviceName}</h3>
                <div className="row g-3">
                    {suggestedLocations.map((loc, i) => (
                        <div key={i} className="col-lg-3 col-md-4 col-6">
                            <Link 
                                href={`/${serviceSlug}-in-${toSlug(loc)}/`} 
                                className="d-flex align-items-center p-3 border border-light bg-light rounded-3 text-decoration-none text-muted transition-all hover-dark hover-border-primary text-nowrap text-truncate"
                                style={{ fontSize: '13px' }}
                                title={`${serviceName} in ${loc}`}
                            >
                                <MapMarkerIcon />
                                <span className="text-truncate">{serviceName} in {loc}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NearbyLocations;
