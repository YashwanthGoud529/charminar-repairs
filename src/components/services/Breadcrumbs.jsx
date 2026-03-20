import React from 'react';
import Link from 'next/link';
import { getServiceSlug } from '@/config/services';

const Breadcrumbs = ({ service, location }) => {
    const serviceSlug = getServiceSlug(service);
    return (
        <nav className="py-3 bg-white border-bottom mb-4 d-md-block d-none" aria-label="breadcrumb">
            <div className="container custom-container px-lg-4">
                <div className="d-flex align-items-center gap-2 small text-muted">
                    <Link href="/" className="text-decoration-none text-muted hover-primary">Home</Link>
                    <i className="fas fa-chevron-right" style={{ fontSize: '8px' }}></i>
                    <Link href="/" className="text-decoration-none text-muted hover-primary">Hyderabad</Link>
                    <i className="fas fa-chevron-right" style={{ fontSize: '8px' }}></i>
                    <Link href={`/${serviceSlug}/`} className="text-decoration-none text-muted hover-primary">
                        {service}
                    </Link>
                    {location && (
                        <>
                            <i className="fas fa-chevron-right" style={{ fontSize: '8px' }}></i>
                            <span className="text-primary fw-bold">
                                {service} in {location}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
