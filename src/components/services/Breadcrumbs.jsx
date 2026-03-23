import React from 'react';
import Link from 'next/link';
import { getServiceSlug } from '@/config/services';

const Breadcrumbs = ({ service, location }) => {
    const serviceSlug = getServiceSlug(service);
    
    // SVG Chevron Icon
    const ChevronIcon = () => (
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.5 }}>
            <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    return (
        <nav className="py-3 bg-white border-bottom mb-4 d-md-block d-none" aria-label="breadcrumb">
            <div className="container custom-container px-lg-4">
                <div className="d-flex align-items-center gap-3 small text-muted">
                    <Link href="/" className="text-decoration-none text-muted hover-primary">Home</Link>
                    <ChevronIcon />
                    <Link href="/" className="text-decoration-none text-muted hover-primary">Hyderabad</Link>
                    <ChevronIcon />
                    <Link href={`/${serviceSlug}/`} className="text-decoration-none text-muted hover-primary">
                        {service}
                    </Link>
                    {location && (
                        <>
                            <ChevronIcon />
                            <span className="text-primary fw-bold" style={{ letterSpacing: '0.01em' }}>
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
