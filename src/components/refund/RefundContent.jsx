'use client';

import React from 'react';
import PageHero from '@/components/shared/PageHero';

const RefundContent = () => {
    return (
        <main className="refund-page pb-5">
            <PageHero 
                title="Refund & Cancellation" 
                subtitle="Our transparent policy on service cancellations and refunds."
                breadcrumb="Refund Policy"
            />
            
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="bg-white p-4 p-md-5 shadow-sm rounded-8">
                            <section className="mb-5">
                                <h3 className="fw-bold mb-4">1. Cancellation Policy</h3>
                                <p className="text-muted">Customers can cancel their service booking anytime before the technician arrives. No cancellation fee is charged if the cancellation happens at least 1 hour before the scheduled time.</p>
                            </section>

                            <section className="mb-5">
                                <h3 className="fw-bold mb-4">2. Refund Eligibility</h3>
                                <p className="text-muted">Refunds are only applicable in the following scenarios:</p>
                                <ul className="text-muted">
                                    <li>If a payment was made in advance and the service was not rendered.</li>
                                    <li>If a part replaced by us fails within the warranty period and we are unable to provide a replacement or repair.</li>
                                </ul>
                            </section>

                            <section className="mb-5">
                                <h3 className="fw-bold mb-4">3. Non-Refundable Items</h3>
                                <ul className="text-muted">
                                    <li>Visiting/Inspection charges are non-refundable once the technician has reached your location and performed the diagnosis.</li>
                                    <li>Labor charges for repairs already completed successfully.</li>
                                </ul>
                            </section>

                            <section className="mb-5">
                                <h3 className="fw-bold mb-4">4. Refund Process</h3>
                                <p className="text-muted">Approved refunds will be processed via the original payment method or UPI within 5-7 working days.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .rounded-8 { border-radius: 8px; }
            `}</style>
        </main>
    );
};

export default RefundContent;
