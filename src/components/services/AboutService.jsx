import React from 'react';
import { SERVICE_DATA_MAP, DEFAULT_SERVICE } from '@/config/serviceData';
import './AboutService.css';

const COMPANY = {
    name: 'Charminar Repairs',
    phone: '8008615049',
    phoneDisplay: '+91-8008615049',
    warranty: '180',
    priceStart: '100',
    location: 'Karwan, Hyderabad, Telangana 500006',
};

const WHY_CHOOSE = [
    { icon: 'fas fa-user-shield', title: 'Certified Technicians', desc: 'Background-verified experts trained for all major brands and models.' },
    { icon: 'fas fa-bolt', title: 'Same-Day Service', desc: 'Book by 5 PM and get doorstep service within 60 minutes of booking.' },
    { icon: 'fas fa-tag', title: 'Starts at ₹100', desc: 'Transparent flat-rate pricing with zero hidden charges — ever.' },
    { icon: 'fas fa-cog', title: 'Genuine Spare Parts', desc: 'OEM-approved components for long-lasting, reliable repairs.' },
    { icon: 'fas fa-shield-alt', title: '180-Day Warranty', desc: 'Every repair is backed by our 180-day service warranty, free of charge.' },
    { icon: 'fas fa-rupee-sign', title: 'Pay After Repair', desc: 'No advance payment. Pay only when you\'re 100% satisfied with the repair.' },
];



const AboutService = ({ serviceName, locationLabel }) => {
    const loc = locationLabel || 'Hyderabad';
    const locFull = locationLabel ? `${locationLabel}, Hyderabad` : 'Hyderabad';

    const PROCESS_STEPS = [
        { step: '01', icon: 'fas fa-phone-alt', title: 'Book a Service', desc: `Call ${COMPANY.phoneDisplay} or book online to schedule your ${serviceName.toLowerCase()} in ${loc}. Takes less than 2 minutes.` },
        { step: '02', icon: 'fas fa-search', title: 'Free Diagnosis', desc: `Our ${loc} technician arrives on time and diagnoses the exact issue with your appliance at no extra cost.` },
        { step: '03', icon: 'fas fa-tools', title: 'On-Spot Repair', desc: `Most ${serviceName.toLowerCase()} issues in ${loc} are fixed on the spot using 100% genuine spare parts.` },
        { step: '04', icon: 'fas fa-check-circle', title: 'Warranty & Support', desc: `Every ${serviceName.toLowerCase()} in ${loc} comes with a ${COMPANY.warranty}-day service warranty and free post-repair support.` },
    ];
    const sData = SERVICE_DATA_MAP[serviceName] || DEFAULT_SERVICE;
    const commonIssues = sData.faultResolution || [];
    const brandsText = sData.brands?.slice(0, 6).join(', ') || 'LG, Samsung, Whirlpool, Bosch, IFB';

    return (
        <div className="about-service-wrapper">

            {/* ── INTRO PARAGRAPH ─────────────────────────────── */}
            <section className="as-intro-section">
                <div className="container custom-container px-lg-4">
                    <div className="as-intro-grid">
                        <div className="as-intro-text">
                            <div className="as-eyebrow">Expert Doorstep Service · {locFull}</div>
                            <h2 className="as-intro-title">
                                {serviceName} in {locFull}
                            </h2>
                            <div
                                className="as-intro-desc"
                                dangerouslySetInnerHTML={{ __html: sData.desc.replace(/Hyderabad/g, locFull) }}
                            />
                            <p className="as-intro-desc mt-3">
                                At <strong>Charminar Repairs</strong>, we offer expert <strong>{serviceName.toLowerCase()}</strong> to
                                restore your appliance's functionality quickly and affordably in <strong>{locFull}</strong>.
                                Whether it's a sudden breakdown, noisy operation, or error codes — our certified technicians
                                ensure your <strong>{brandsText}</strong> — and more — are repaired efficiently with same-day
                                doorstep service starting at just <strong>₹{COMPANY.priceStart}</strong>.
                            </p>
                            <div className="as-intro-cta-row">
                                <a href={`tel:${COMPANY.phone}`} className="as-cta-btn as-cta-primary">
                                    <i className="fas fa-phone-alt me-2"></i> Call {COMPANY.phoneDisplay}
                                </a>
                                <div className="as-badge-row">
                                    <span className="as-trust-badge"><i className="fas fa-shield-alt"></i> {COMPANY.warranty}-Day Warranty</span>
                                    <span className="as-trust-badge"><i className="fas fa-tag"></i> From ₹{COMPANY.priceStart}</span>
                                    <span className="as-trust-badge"><i className="fas fa-bolt"></i> 60-Min Arrival</span>
                                </div>
                            </div>
                        </div>
                        <div className="as-intro-stats">
                            <div className="as-stat-card">
                                <div className="as-stat-icon"><i className="fas fa-users"></i></div>
                                <div className="as-stat-num">10,000+</div>
                                <div className="as-stat-label">Happy Customers</div>
                            </div>
                            <div className="as-stat-card">
                                <div className="as-stat-icon"><i className="fas fa-clock"></i></div>
                                <div className="as-stat-num">60 Min</div>
                                <div className="as-stat-label">Arrival Time</div>
                            </div>
                            <div className="as-stat-card">
                                <div className="as-stat-icon"><i className="fas fa-shield-alt"></i></div>
                                <div className="as-stat-num">{COMPANY.warranty} Days</div>
                                <div className="as-stat-label">Service Warranty</div>
                            </div>
                            <div className="as-stat-card">
                                <div className="as-stat-icon"><i className="fas fa-star"></i></div>
                                <div className="as-stat-num">4.9 ★</div>
                                <div className="as-stat-label">Average Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ───────────────────────────────── */}
            <section className="as-why-section">
                <div className="container custom-container px-lg-4">
                    <div className="as-section-head">
                        <div className="as-eyebrow">Our Promise</div>
                        <h2 className="as-section-title">Why Choose Our {serviceName} Experts in {loc}?</h2>
                        <p className="as-section-sub">
                            Thousands of residents in <strong>{locFull}</strong> trust {COMPANY.name} for their appliance repairs.
                            Here's what makes us different:
                        </p>
                    </div>
                    <div className="as-why-grid">
                        {WHY_CHOOSE.map((item, idx) => (
                            <div key={idx} className="as-why-card">
                                <div className="as-why-icon-wrap">
                                    <i className={item.icon}></i>
                                </div>
                                <h4 className="as-why-title">{item.title}</h4>
                                <p className="as-why-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COMMON ISSUES ────────────────────────────────── */}
            {commonIssues.length > 0 && (
                <section className="as-issues-section">
                    <div className="container custom-container px-lg-4">
                        <div className="as-section-head">
                            <div className="as-eyebrow">Fault Diagnosis</div>
                            <h2 className="as-section-title">Common {serviceName} Issues We Fix in {loc}</h2>
                            <p className="as-section-sub">Our certified technicians quickly diagnose and repair all of these common problems.</p>
                        </div>
                        <div className="as-issues-grid">
                            {commonIssues.map((issue, idx) => (
                                <div key={idx} className="as-issue-card">
                                    <div className="as-issue-icon">
                                        <i className={issue.i || 'fas fa-wrench'}></i>
                                    </div>
                                    <div className="as-issue-content">
                                        <h4 className="as-issue-title">{issue.t}</h4>
                                        {issue.d && <p className="as-issue-desc">{issue.d}</p>}
                                    </div>
                                    <div className="as-issue-badge">
                                        <i className="fas fa-check"></i> Fixed
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── OUR PROCESS ──────────────────────────────────── */}
            <section className="as-process-section">
                <div className="container custom-container px-lg-4">
                    <div className="as-section-head">
                        <div className="as-eyebrow">How It Works</div>
                        <h2 className="as-section-title">Our {serviceName} Repair Process in {loc}</h2>
                        <p className="as-section-sub">Simple, fast, and transparent — from booking to warranty.</p>
                    </div>
                    <div className="as-process-track">
                        {PROCESS_STEPS.map((s, idx) => (
                            <div key={idx} className="as-process-step">
                                <div className="as-process-num">{s.step}</div>
                                <div className="as-process-icon-wrap">
                                    <i className={s.icon}></i>
                                </div>
                                <h4 className="as-process-title">{s.title}</h4>
                                <p className="as-process-desc">{s.desc}</p>
                                {idx < PROCESS_STEPS.length - 1 && <div className="as-process-connector" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SPECIALIZATIONS + COVERAGE ───────────────────── */}
            <section className="as-spec-section">
                <div className="container custom-container px-lg-4">
                    <div className="as-spec-grid">
                        {/* Specializations */}
                        {sData.specializations && (
                            <div className="as-spec-card">
                                <h3 className="as-spec-title">
                                    <i className="fas fa-medal me-2"></i> Technical Specializations
                                </h3>
                                <div className="as-spec-tags">
                                    {sData.specializations.map((spec, i) => (
                                        <span key={i} className="as-spec-tag">{spec}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Coverage */}
                        <div className="as-spec-card as-coverage-card">
                            <h3 className="as-spec-title">
                                <i className="fas fa-map-marker-alt me-2"></i> Service Coverage in {loc}
                            </h3>
                            <p className="as-spec-desc">
                                Our hyper-local network allows us to reach any address in <strong>{locFull}</strong> within
                                60 minutes. Whether you're in a gated community, apartment complex, or independent villa,
                                {COMPANY.name} brings the service centre to your doorstep.
                            </p>
                            <div className="as-coverage-highlights">
                                <div className="as-cov-item"><i className="fas fa-check-circle"></i> Residential &amp; Commercial</div>
                                <div className="as-cov-item"><i className="fas fa-check-circle"></i> 7 AM – 10 PM, 7 Days a Week</div>
                                <div className="as-cov-item"><i className="fas fa-check-circle"></i> 50+ Hyderabad Districts</div>
                                <div className="as-cov-item"><i className="fas fa-check-circle"></i> Weekend &amp; Emergency Slots</div>
                            </div>
                            <a href={`tel:${COMPANY.phone}`} className="as-cta-btn as-cta-outline mt-4">
                                <i className="fas fa-phone-alt me-2"></i> Book Now: {COMPANY.phoneDisplay}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutService;
