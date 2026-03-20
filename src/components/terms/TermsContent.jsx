'use client';

import React from 'react';
import PageHero from '@/components/shared/PageHero';

const TermsContent = () => {
    return (
        <main className="terms-page pb-5">
            <PageHero 
                title="Terms of Service" 
                subtitle="Guidelines and agreements for our appliance repair services."
                breadcrumb="Terms of Service"
            />
            
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="bg-white p-4 p-md-5 shadow-sm rounded-8">
                            <section className="mb-5">
                                <h3 className="fw-bold mb-4">1. Service Agreement</h3>
                                <p className="text-muted">By booking a service with Charminar Repairs, you agree to the terms outlined here. Our technicians provide doorstep repair services for home appliances in Hyderabad and Secunderabad.</p>
                            </section>

                            <section className="mb-5">
                                <h3 className="fw-bold mb-4">2. Warranty Policy</h3>
                                <p className="text-muted">We provide a 1-year warranty on genuine spare parts replaced by our technicians. This warranty covers the specific part replaced and the labor associated with it. It does not cover new issues or physical damage caused by the user.</p>
                            </section>

                            <section className="mb-5">
                                <h3 className="fw-bold mb-4">3. Visiting Charges</h3>
                                <p className="text-muted">A nominal visiting/inspection charge is applicable for every visit. However, if you proceed with the suggested repair, the visiting charges are waived off and only the repair cost is charged.</p>
                            </section>

                            <section className="mb-5">
                                <h3 className="fw-bold mb-4">4. Payment Terms</h3>
                                <p className="text-muted">Payment must be made immediately upon completion of the service. We accept Cash, UPI (GPay, PhonePe), and Online Transfers.</p>
                            </section>

                            <section className="mb-5">
                                <h3 className="fw-bold mb-4">5. Liability</h3>
                                <p className="text-muted">Charminar Repairs is not liable for any pre-existing issues found during inspection or for damages resulting from appliances that were already in a state of critical failure.</p>
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

export default TermsContent;
