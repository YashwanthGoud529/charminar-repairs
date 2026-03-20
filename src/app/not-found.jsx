'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="d-flex align-items-center justify-content-center min-vh-100 bg-white" style={{ paddingTop: '100px' }}>
            <div className="container text-center py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="mb-5">
                            <span className="badge-premium mb-4">404 ERROR</span>
                            <h1 className="fw-black text-purple mb-4 display-2" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Oops! Page Not Found</h1>
                            <p className="text-muted mb-5 fs-5">The URL you're trying to reach doesn't exist or has been moved. Let's get you back to fixing your home appliances!</p>
                        </div>
                        
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
                            <Link href="/" className="btn btn-purple px-5 py-3 fw-bold shadow-sm" style={{ borderRadius: '8px' }}>
                                Back to Direct Center
                            </Link>
                            <Link href="/pricing" className="btn btn-outline-purple px-5 py-3 fw-bold" style={{ borderRadius: '8px' }}>
                                View Pricing Card
                            </Link>
                        </div>

                        <div className="mt-5 pt-4 border-top border-light">
                            <p className="text-muted small mb-3">Professional Engineering Support:</p>
                            <a href="tel:8008615049" className="h3 fw-bold text-decoration-none text-dark transition-all hover-purple">
                                <i className="fas fa-phone-alt text-purple me-2"></i>
                                8008615049
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .text-purple { color: #673ab7; }
                .fw-black { font-weight: 900; }
                .btn-purple { background: #673ab7; color: white; border-color: #673ab7; transition: all 0.3s; }
                .btn-purple:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(103, 58, 183, 0.2); color: white; }
                .btn-outline-purple { color: #673ab7; border: 2px solid #673ab7; transition: all 0.3s; }
                .btn-outline-purple:hover { background: #673ab7; color: white; transform: translateY(-3px); }
                .badge-premium { background: rgba(103, 58, 183, 0.08); color: #673ab7; padding: 10px 24px; border-radius: 8px; font-weight: 800; font-size: 14px; letter-spacing: 1px; display: inline-block; }
                .hover-purple:hover { color: #673ab7 !important; }
                .transition-all { transition: all 0.3s; }
            `}</style>
        </main>
    );
}
