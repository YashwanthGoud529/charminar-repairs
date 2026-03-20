'use client';

import React from 'react';
import Link from 'next/link';
import './BookBanner.css';

const BookBanner = () => {
    return (
        <section className="book-banner section-py">
            <div className="custom-container">
                <div className="banner-inner d-flex flex-column flex-lg-row align-items-center justify-content-between p-4 p-lg-5">
                    <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
                        <h2 className="text-white mb-3">
                            Ready to Repair your <span className="highlight">Damaged Appliances?</span>
                        </h2>
                        <p className="text-white-50 fs-5 mb-0">
                            Book your service today and get a flat 10% discount on your first repair. Verified technicians at your doorstep.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <Link href="/contact-us/" className="btn btn-warning px-5 py-3 fw-bolder fs-5 text-uppercase btn-book-now">
                            Book Your Service Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookBanner;
