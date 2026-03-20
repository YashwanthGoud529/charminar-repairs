import React from 'react';
import PageHero from '@/components/shared/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Contact Charminar Repairs | Book Expert Appliance Service in Hyderabad',
    description: 'Contact Hyderabad\'s leading appliance repair experts. Call 8008615049 or book online for same-day washing machine, fridge, AC, or TV repairs.',
    canonicalPath: '/contact-us',
});

const ContactUsPage = () => {
    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Charminar Repairs',
        description: 'Contact Charminar Repairs for trusted appliance repair in Hyderabad. Same-day service available at 8008615049.',
        url: 'https://www.charminarrepairs.com/contact-us',
        mainEntity: {
            '@type': 'LocalBusiness',
            name: 'Charminar Repairs',
            telephone: '+91-8008615049',
            email: 'contact@charminarrepairs.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Karwan',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                postalCode: '500006',
                addressCountry: 'IN'
            }
        }
    };

    return (
        <main className="contact-page bg-light-soft">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            {/* Unified Page Hero */}
            <PageHero
                title="Get in Touch"
                subtitle="Have a question or need a quick repair? Our experts are just a message away. Reach out to Hyderabad's most trusted appliance service today."
                breadcrumb="Contact Us"
            />

            {/* Main Content Section */}
            <section className="contact-section py-5 position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-50 z-n1"></div>
                <div className="bg-blob position-absolute top-0 end-0 translate-middle opacity-10"></div>
                
                <div className="container custom-container py-5 mt-n4">
                    <div className="row g-5">
                        {/* Left Column: Info & Socials */}
                        <div className="col-lg-5 col-xl-4">
                            <div className="info-sidebar sticky-top" style={{ top: '120px', zIndex: 10 }}>
                                <div className="section-tag mb-3">CONTACT CHANNELS</div>
                                <h2 className="fw-black text-dark-blue mb-4 fs-1 tracking-tight" style={{ fontWeight: 900 }}>Let's solve your appliance issues.</h2>
                                <p className="text-muted mb-5 fs-6">Choose your preferred method of contact. Our support team typically responds within 30 minutes during business hours.</p>

                                {/* Contact Cards Group */}
                                <div className="d-flex flex-column gap-4 mb-5">
                                    <div className="premium-contact-card">
                                        <div className="card-icon bg-purple-soft">
                                            <i className="fas fa-phone-alt text-purple fs-4"></i>
                                        </div>
                                        <div className="card-content">
                                            <h6>Call Support</h6>
                                            <p>8008615049 / 7286937941</p>
                                            <span className="availability">Available 9AM - 9PM</span>
                                        </div>
                                    </div>

                                    <div className="premium-contact-card">
                                        <div className="card-icon bg-blue-soft">
                                            <i className="fas fa-envelope text-primary fs-4"></i>
                                        </div>
                                        <div className="card-content">
                                            <h6>Email Address</h6>
                                            <p>contact@charminarrepairs.com</p>
                                            <span className="availability">24/7 Response Guaranteed</span>
                                        </div>
                                    </div>

                                    <div className="premium-contact-card">
                                        <div className="card-icon bg-green-soft">
                                            <i className="fas fa-map-marker-alt text-success fs-4"></i>
                                        </div>
                                        <div className="card-content">
                                            <h6>Visit Us</h6>
                                            <p>Karwan, Hyderabad, TS 500006</p>
                                            <span className="availability">Main Service Hub</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Premium Form */}
                        <div className="col-lg-7 col-xl-8">
                            <div className="form-container-premium position-relative">
                                <div className="form-decoration-line"></div>
                                <div className="p-4 p-md-5 bg-white shadow-2xl rounded-5 border border-light">
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div className="step-indicator">01</div>
                                        <h3 className="fw-extrabold m-0 text-dark-blue fs-2" style={{ fontWeight: 800 }}>Request a Repair Visit</h3>
                                    </div>
                                    <p className="text-muted mb-5">Fill out the form below and we'll assign a certified technician to your location instantly.</p>
                                    <ContactForm />
                                </div>

                                {/* Trust Banner below form */}
                                <div className="mt-4 p-4 rounded-4 bg-dark text-white d-flex align-items-center justify-content-between flex-wrap gap-4 border-start border-purple border-4 shadow-lg">
                                    <div className="d-flex align-items-center gap-3">
                                        <img src="/images/ok_icon.png" width="40" alt="trust" />
                                        <div>
                                            <h6 className="mb-0 fw-bold">100% Secure & Private</h6>
                                            <p className="small mb-0 opacity-75">Your data is safe with our encrypted booking system.</p>
                                        </div>
                                    </div>
                                    <div className="d-none d-md-block border-end border-white opacity-25" style={{height: '40px'}}></div>
                                    <div className="text-md-end">
                                        <p className="small mb-1 opacity-75">Need Urgent Help?</p>
                                        <a href="tel:8008615049" className="text-purple fw-bold text-decoration-none fs-5" style={{ fontWeight: 700 }}>Call 8008615049</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style id="contact-page-refined">{`
                .contact-page { font-family: var(--font-outfit), sans-serif; }
                .custom-container { max-width: 1400px !important; }
                .fw-black { font-weight: 900; }
                .bg-light-soft { background-color: #fbfcff !important; }
                .text-dark-blue { color: #0c1228; }
                .text-purple { color: #673ab7 !important; }
                .border-purple { border-color: #673ab7 !important; }
                .tracking-tight { letter-spacing: -0.03em; }
                
                .section-tag {
                    color: #673ab7;
                    font-weight: 800;
                    font-size: 13px;
                    letter-spacing: 2px;
                    border-left: 3px solid #673ab7;
                    padding-left: 12px;
                }

                .premium-contact-card {
                    display: flex;
                    gap: 20px;
                    padding: 24px;
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.04);
                    border-radius: 8px;
                    transition: all 0.3s;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.02);
                }

                .premium-contact-card:hover {
                    transform: translateX(10px);
                    box-shadow: 0 20px 40px rgba(103, 58, 183, 0.1);
                    border-color: rgba(103, 58, 183, 0.2);
                }

                .card-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .bg-purple-soft { background: #f4effc; }
                .bg-blue-soft { background: #f0f7ff; }
                .bg-green-soft { background: #f2fff5; }

                .card-content h6 {
                    font-weight: 800;
                    margin-bottom: 4px;
                    color: #1a1a1a;
                }

                .card-content p {
                    margin-bottom: 2px;
                    font-weight: 600;
                    color: #666;
                }

                .availability {
                    font-size: 11px;
                    font-weight: 700;
                    color: #94a3b8;
                    text-transform: uppercase;
                }

                .step-indicator {
                    width: 44px;
                    height: 44px;
                    background: #673ab7;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    font-weight: 900;
                    font-size: 18px;
                }

                .form-decoration-line {
                    position: absolute;
                    top: -20px;
                    right: 40px;
                    width: 100px;
                    height: 5px;
                    background: #673ab7;
                    border-radius: 8px;
                    z-index: 1;
                }

                .bg-blob {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(103, 58, 183, 1) 0%, rgba(103, 58, 183, 0) 70%);
                    filter: blur(80px);
                }

                .shadow-2xl {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
                }

                .rounded-5 { border-radius: 8px !important; }

                @media (max-width: 991px) {
                    .info-sidebar { position: static !important; margin-bottom: 40px; }
                }
            `}</style>
        </main>
    );
};

export default ContactUsPage;
