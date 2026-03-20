'use client';

import React from 'react';
import PageHero from '@/components/shared/PageHero';

const PrivacyPolicyContent = () => {
    return (
        <main className="privacy-policy-main">
            <PageHero
                title="Privacy Policy"
                subtitle="We are committed to protecting your personal information. Learn how Charminar Repairs collects, uses, and safeguards your data while providing appliance repair services across Hyderabad."
                breadcrumb="Privacy Policy"
            />

            {/* Content Section */}
            <section className="privacy-content py-5 bg-light">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="policy-box p-5 bg-white shadow-sm border" style={{ borderRadius: '8px' }}>
                                <section className="mb-5">
                                    <h2 className="h4 fw-bold mb-4" style={{ color: '#0c1228' }}>1. Information We Collect</h2>
                                    <p className="text-muted leading-relaxed">
                                        At <strong>Charminar Repairs Services</strong>, Hyderabad, we collect personal details such as your name, contact number, email, address, and appliance details when you book services for washing machines, refrigerators, air conditioners, and other home appliances.
                                    </p>
                                    <div className="p-3 bg-light border-start border-purple border-4" style={{ borderRadius: '8px' }}>
                                        <ul className="text-muted mb-0 small list-unstyled">
                                            <li className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#673ab7" viewBox="0 0 16 16" className="me-2"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" /></svg> Name, Email, Phone Number, Address</li>
                                            <li className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#673ab7" viewBox="0 0 16 16" className="me-2"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" /></svg> Appliance Details and Service Requests</li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="mb-5">
                                    <h2 className="h4 fw-bold mb-4" style={{ color: '#0c1228' }}>2. How We Use Your Information</h2>
                                    <p className="text-muted leading-relaxed">
                                        We use your personal information to provide professional home appliance repair services in Hyderabad, ensuring fast response times including same-day repair. Your details help us manage service appointments and communicate service updates effectively.
                                    </p>
                                    <ul className="text-muted mt-3">
                                        <li className="mb-2">To manage service bookings and technician visits</li>
                                        <li className="mb-2">To provide updates and confirmations for same-day repairs</li>
                                        <li className="mb-2">To analyze trends for improving customer experience</li>
                                    </ul>
                                </section>

                                <section className="mb-5">
                                    <h2 className="h4 fw-bold mb-4" style={{ color: '#0c1228' }}>3. Sharing Your Information</h2>
                                    <p className="text-muted leading-relaxed">
                                        Your data is shared only with our verified in-house technicians and secure IT infrastructure providers to help deliver 100% reliable and genuine service. We never sell your data to third parties or advertising agencies.
                                    </p>
                                </section>

                                <section className="mb-5">
                                    <h2 className="h4 fw-bold mb-4" style={{ color: '#0c1228' }}>4. Data Security & Retention</h2>
                                    <p className="text-muted leading-relaxed">
                                        Your privacy is our priority. Our systems are secured with encryption and firewall technologies. We maintain a 100% SECURE booking experience. We retain your data only for the time necessary to fulfill your service and 1-year warranty requirements.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="h4 fw-bold mb-4" style={{ color: '#0c1228' }}>5. Your Rights</h2>
                                    <p className="text-muted leading-relaxed mb-4">
                                        You have full rights to control your data. You can request updates, deletions, or copies of your stored information anytime. We are committed to full transparency.
                                    </p>
                                    <div className="row g-3">
                                        {['Access and Modify Data', 'Data Deletion', 'Object to Processing'].map((right, i) => (
                                            <div key={i} className="col-md-4">
                                                <div className="p-3 border text-center small fw-bold text-muted bg-light" style={{ borderRadius: '8px' }}>
                                                    {right}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sticky-top" style={{ top: '120px' }}>
                                <div className="p-4 bg-white shadow-sm border mb-4" style={{ borderRadius: '8px' }}>
                                    <h5 className="fw-bold mb-4" style={{ color: '#0c1228' }}>Need Assistance?</h5>
                                    <p className="text-muted small mb-4">If you have any questions regarding our privacy policy or your data, please contact our support team.</p>
                                    <div className="d-flex flex-column gap-3">
                                        <a href="tel:8008615049" className="btn btn-primary py-3 fw-bold text-white shadow-sm" style={{ background: '#673ab7', border: 'none', borderRadius: '8px' }}>
                                            Call 8008615049
                                        </a>
                                        <a href="mailto:contact@charminarrepairs.com" className="btn btn-outline-dark py-3 fw-bold" style={{ borderRadius: '8px' }}>
                                            Email Support
                                        </a>
                                    </div>
                                </div>
                                <div className="p-4 bg-dark text-white shadow-sm border" style={{ borderRadius: '8px' }}>
                                    <div className="text-purple mb-3 h2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#673ab7" viewBox="0 0 16 16"><path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" /></svg>
                                    </div>
                                    <h5 className="fw-bold mb-3">100% Secure Service</h5>
                                    <p className="small opacity-75 mb-0">We use industry-standard encryption to protect your service booking data and personal information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .text-purple { color: #673ab7; }
                .border-purple { border-color: #673ab7 !important; }
                .leading-relaxed { line-height: 1.8; }
            `}</style>
        </main>
    );
};

export default PrivacyPolicyContent;
