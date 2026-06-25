'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BRAND } from '@/config/branding';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (email) {
            try {
                await addDoc(collection(db, 'newsletter_subscribers'), {
                    email,
                    source: 'Footer Newsletter',
                    subscribedAt: serverTimestamp()
                });
            } catch (_) {
                // silently fail — still show success to user
            }
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 5000);
        }
    };

    const ArrowRightIcon = () => (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ms-1">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );

    const ComingSoonBadge = () => (
        <span className="coming-soon-badge">Soon</span>
    );

    const brandPartners = [
        'Samsung', 'LG', 'Whirlpool', 'Bosch', 'IFB', 'Voltas', 'Godrej', 
        'Daikin', 'Carrier', 'Panasonic', 'Sony', 'TP-Link', 'Hikvision', 
        'CP Plus', 'Dell', 'HP'
    ];

    return (
        <footer className="footer-area">

            {/* ── Quick Book Strip ── */}
            <div className="footer-quick-book-strip">
                <div className="container-fluid px-lg-5">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <div className="d-flex align-items-center gap-3">
                            <div className="footer-quick-book-icon-wrap">
                                <i className="fas fa-tools footer-quick-book-icon"></i>
                            </div>
                            <div>
                                <div className="footer-quick-book-title">Appliance Trouble? Book a Technician in 60 Seconds</div>
                                <div className="footer-quick-book-subtitle">Same-day service · No visit charge on repair completion</div>
                            </div>
                        </div>
                        <div className="d-flex gap-2 flex-wrap">
                            <a href={`tel:+91${BRAND.phone}`} className="d-flex align-items-center gap-2 px-4 py-2 fw-bold footer-btn-call">
                                <i className="fas fa-phone-alt"></i> Call Now
                            </a>
                            <a href={`https://wa.me/91${BRAND.phone}?text=Hi%2C%20I%20need%20appliance%20repair%20service.`} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2 px-4 py-2 fw-bold footer-btn-wa">
                                <i className="fab fa-whatsapp"></i> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top scrolling partner brands */}
            <div className="footer-brands-bar py-3">
                <div className="container-fluid px-lg-5">
                    <div className="brands-title text-center mb-2">
                        <span className="small text-uppercase tracking-wider fw-bold opacity-75">Authorized & Expert Service Partners</span>
                    </div>
                    <div className="brands-slider-container">
                        <div className="brands-track">
                            {brandPartners.concat(brandPartners).map((brand, idx) => (
                                <div key={idx} className="brand-logo-item">
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="footer-main py-5">
                <div className="container-fluid px-lg-5 text-start">
                    <div className="row g-4">

                        {/* Column 1 - Contact, Social, Emergency Helpline */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="footer-logo mb-3">
                                <h3 className="brand-logo-text mb-1">{BRAND.name}</h3>
                                <p className="tagline-text opacity-75">{BRAND.tagline}</p>
                            </div>
                            
                            <address className="contact-info-block mb-4" itemScope itemType="https://schema.org/LocalBusiness">
                                <ul className="list-unstyled contact-list">
                                    <li className="mb-3 d-flex align-items-start gap-3">
                                        <div className="icon-badge bg-primary-soft text-primary">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <a href="https://www.google.com/search?q=meehelper+home+services&oq=meehelper+home+services&gs_lcrp=EgZjaHJvbWUyCAgAEEUYJxg5MggIARAAGBYYHjIICAIQABgWGB4yBwgDEAAY7wUyCggEEAAYgAQYogQyBwgFEAAY7wUyBggGEEUYPDIGCAcQRRg90gEJNjQzOWowajE1qAIMsAIB8QX13v2nzLXsBA&sourceid=chrome&ie=UTF-8#sv=CAwSpAIKBmxjbF9wdhI9CgNwdnESNkNnMHZaeTh4TVhsMk9ISnVhRjg0SWhjS0VXTm9ZWEp0YVc1aGNpQnlaWEJoYVhKekVBSVlBdxKaAQoDbHFpEpIBQ2hGamFHRnliV2x1WVhJZ2NtVndZV2x5YzBqb18taUw2YjJBZ0FoYUlSQUFFQUVZQUJnQkloRmphR0Z5YldsdVlYSWdjbVZ3WVdseWN5b0VDQUlRQUhvSlNIbGtaWEpoWW1Ga2tnRWZkMkZ6YUdWeVgyRnVaRjlrY25sbGNsOXlaWEJoYVhKZmMyVnlkbWxqWlESEgoDdGJzEgtscmY6ITNzSUFFPRIWCgFxEhFjaGFybWluYXIgcmVwYWlycxoSbG9jYWwtcGxhY2Utdmlld2VyGAog1db99Ak" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none hover-orange block-desc small">
                                                <span itemProp="streetAddress">Karwan</span>,{' '}
                                                <span itemProp="addressLocality">Hyderabad</span>,{' '}
                                                <span itemProp="addressRegion">Telangana</span>{' '}
                                                <span itemProp="postalCode">500006</span>
                                                <i className="fas fa-external-link-alt ms-1 footer-ext-icon"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start gap-3">
                                        <div className="icon-badge bg-success-soft text-success">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div>
                                            <div className="d-flex align-items-center gap-2">
                                                <a href={`tel:+91${BRAND.phone}`} className="text-white text-decoration-none hover-orange fw-bold small" itemProp="telephone">+91-{BRAND.phone}</a>
                                                <span className="badge-pulse-green">
                                                    <span className="dot"></span>Open Now
                                                </span>
                                            </div>
                                            <span className="text-muted small d-block footer-hours">Daily: 8:00 AM – 9:00 PM</span>
                                        </div>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start gap-3">
                                        <div className="icon-badge bg-info-soft text-info">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div>
                                            <a href={`mailto:${BRAND.email}`} className="text-white text-decoration-none hover-orange small" itemProp="email">{BRAND.email}</a>
                                        </div>
                                    </li>
                                </ul>
                            </address>

                            {/* Social Media Proof */}
                            <div className="social-links-footer mb-4">
                                <h5 className="widget-subtitle mb-2 small text-uppercase fw-bold text-white opacity-75">Connect With Us</h5>
                                <div className="d-flex gap-2 flex-wrap">
                                    <a href={`https://facebook.com/${BRAND.social.facebook}`} target="_blank" rel="noopener noreferrer" className="social-btn bg-facebook" aria-label="Facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href={`https://instagram.com/${BRAND.social.instagram}`} target="_blank" rel="noopener noreferrer" className="social-btn bg-instagram" aria-label="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href={`https://twitter.com/${BRAND.social.twitter}`} target="_blank" rel="noopener noreferrer" className="social-btn bg-twitter" aria-label="X (Twitter)">
                                        <i className="fab fa-x-twitter"></i>
                                    </a>
                                    <a href={`https://wa.me/91${BRAND.phone}`} target="_blank" rel="noopener noreferrer" className="social-btn bg-whatsapp" aria-label="WhatsApp">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/meehelper" target="_blank" rel="noopener noreferrer" className="social-btn bg-linkedin" aria-label="LinkedIn">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@meehelper" target="_blank" rel="noopener noreferrer" className="social-btn bg-youtube" aria-label="YouTube">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="mb-4">
                                <h5 className="widget-subtitle mb-2 small text-uppercase fw-bold text-white opacity-75">Working Hours</h5>
                                <table className="footer-hours-table">
                                    <tbody>
                                        {[
                                            { day: 'Mon – Fri', time: '8:00 AM – 9:00 PM', active: true },
                                            { day: 'Saturday', time: '8:00 AM – 9:00 PM', active: true },
                                            { day: 'Sunday', time: '9:00 AM – 7:00 PM', active: true },
                                            { day: 'Public Holidays', time: 'Emergency Only', active: false },
                                        ].map((row, i) => (
                                            <tr key={i}>
                                                <td className="footer-hours-day">{row.day}</td>
                                                <td className={`footer-hours-time ${row.active ? 'text-green-active' : 'text-orange-active'}`}>{row.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Emergency Helpline */}
                            <div className="emergency-helpline-box p-3 mb-2 border border-danger-subtle bg-danger-soft hover-lift">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="pulse-danger-icon shadow">
                                        <i className="fas fa-headset text-danger"></i>
                                    </div>
                                    <div>
                                        <span className="small text-danger fw-bold d-block text-uppercase footer-emergency-label">24/7 Emergency Support</span>
                                        <a href={`tel:+91${BRAND.phone}`} className="text-white text-decoration-none fw-bold hover-orange footer-emergency-phone">+91-{BRAND.phone}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 - Quick Links & Customer Support */}
                        <div className="col-xl-2 col-lg-3 col-md-6 col-6">
                            <h4 className="widget-title">Quick Links</h4>
                            <ul className="list-unstyled links-list mb-4">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us/">About Us</Link></li>
                                <li><Link href="/services/">All Services</Link></li>
                                <li><Link href="/pricing/">Pricing Plans</Link></li>
                                <li><Link href="/blog/">Blog &amp; Tips</Link></li>
                                <li><Link href="/careers/">Careers</Link></li>
                                <li><Link href="/contact-us/">Contact Us</Link></li>
                                <li><Link href="/partner/">Become a Partner</Link></li>
                            </ul>

                            <h4 className="widget-title">Customer Support</h4>
                            <ul className="list-unstyled links-list">
                                <li><Link href="/reviews/">Reviews &amp; Ratings</Link></li>
                                <li><Link href="/our-team/">Our Technicians</Link></li>
                                <li><Link href="/warranty/">Warranty &amp; Guarantee</Link></li>
                                <li><Link href="/certifications/">Certifications</Link></li>
                                <li><Link href="/case-studies/">Case Studies</Link></li>
                                <li><Link href="/faq/">FAQ Help Center</Link></li>
                                <li><Link href="/terms-of-service/">Service Agreement</Link></li>
                                <li><Link href="/privacy-policy/">Security &amp; Trust</Link></li>
                                <li><Link href="/join-as-technician/">Verify a Technician</Link></li>
                                <li><Link href="/privacy-policy/#accessibility" className="text-muted-custom">Accessibility Statement</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 - Services */}
                        <div className="col-xl-2 col-lg-3 col-md-6 col-6">
                            <h4 className="widget-title">Popular Services</h4>
                            <ul className="list-unstyled links-list mb-4">
                                <li><Link href="/washing-machine-repairing/">Washing Machine</Link></li>
                                <li><Link href="/ac-repairing/">AC Repair</Link></li>
                                <li><Link href="/refrigerator-repairing/">Refrigerator</Link></li>
                                <li><Link href="/microwave-repairing/">Microwave Oven</Link></li>
                                <li><Link href="/tv-repairing/">Television</Link></li>
                                <li><Link href="/laptop-repairing/">Laptop Repair</Link></li>
                                <li><Link href="/geyser-repairing/">Geyser</Link></li>
                                <li><Link href="/water-purifier-servicing/">Water Purifier</Link></li>
                                <li><Link href="/gas-stove-repairing/">Gas Stove</Link></li>
                                <li><Link href="/chimney-repairing/">Kitchen Chimney</Link></li>
                                <li><Link href="/deep-home-cleaning/">Deep Home Cleaning</Link></li>
                                <li><Link href="/pest-control-services/">Pest Control</Link></li>
                                <li><Link href="/packers-and-movers/">Packers &amp; Movers</Link></li>
                                <li><Link href="/meehelper-wheels/">MeeHelper Wheels</Link></li>
                                <li><Link href="/home-it-office-setup/">Home IT Setup</Link></li>
                            </ul>

                            <h4 className="widget-title">Appliance Guides</h4>
                            <ul className="list-unstyled links-list">
                                <li><Link href="/blog/ac-repair-gachibowli-servicing-guide/"><i className="fas fa-book-open me-2 text-orange footer-guide-icon"></i>AC Filter Cleaning</Link></li>
                                <li><Link href="/blog/washing-machine-electronic-error-codes-guide/"><i className="fas fa-book-open me-2 text-orange footer-guide-icon"></i>Washer Error Codes</Link></li>
                                <li><Link href="/blog/refrigerator-cooling-issues-hyderabad-summer/"><i className="fas fa-book-open me-2 text-orange footer-guide-icon"></i>Fridge Cooling Guide</Link></li>
                                <li><Link href="/blog/ro-water-purifier-service-hyderabad/"><i className="fas fa-book-open me-2 text-orange footer-guide-icon"></i>RO Purifier TDS Chart</Link></li>
                                <li><Link href="/blog/kitchen-chimney-cleaning-hyderabad-guide/"><i className="fas fa-book-open me-2 text-orange footer-guide-icon"></i>Chimney Care Tips</Link></li>
                            </ul>
                        </div>

                        {/* Column 4 - Business Solutions & Newsletter */}
                        <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                            <h4 className="widget-title">Business Solutions</h4>
                            <ul className="list-unstyled links-list mb-4">
                                <li><Link href="/amc/">Annual Maintenance (AMC)</Link></li>
                                <li><Link href="/corporate/">Corporate Services</Link></li>
                                <li><Link href="/emergency-repairs/">Emergency Repairs</Link></li>
                                <li><Link href="/how-it-works/">How It Works</Link></li>
                                <li><Link href="/offers/">Offers &amp; Coupons</Link></li>
                                <li><Link href="/compare-plans/">Compare Plans</Link></li>
                                <li><Link href="/corporate/">Real Estate AMC</Link></li>
                                <li><Link href="/amc/">Startup IT AMC</Link></li>
                                <li><Link href="/join-as-technician/">Join as Technician</Link></li>
                            </ul>

                            <h4 className="widget-title">Customer Care</h4>
                            <ul className="list-unstyled links-list mb-4">
                                <li><a href={`tel:+91${BRAND.phone}`} className="text-white text-decoration-none hover-orange"><i className="fas fa-headset me-2 text-orange footer-guide-icon"></i>Request Callback</a></li>
                                <li><a href={`https://wa.me/91${BRAND.phone}?text=Hi%2C%20I%20have%20a%20grievance%20or%20complaint%20regarding%20a%20service.`} target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none hover-orange"><i className="fas fa-envelope-open-text me-2 text-orange footer-guide-icon"></i>Grievance Desk</a></li>
                                <li><Link href="/join-as-technician/"><i className="fas fa-user-check me-2 text-orange footer-guide-icon"></i>Verify Engineer ID</Link></li>
                            </ul>

                            <h4 className="widget-title">Newsletter Signup</h4>
                            <div className="newsletter-block p-3">
                                <p className="small text-white opacity-75 mb-3">Subscribe for expert home tips, appliance hacks &amp; exclusive discount codes.</p>
                                {subscribed ? (
                                    <div className="alert alert-success py-2 px-3 small border-0 mb-0 footer-newsletter-alert">
                                        <i className="fas fa-check-circle me-1"></i> Thank you for subscribing!
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubscribe} className="newsletter-form d-flex flex-column gap-2">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            className="form-control form-control-sm border-secondary text-white placeholder-muted-custom" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required 
                                        />
                                        <button type="submit" className="btn btn-sm btn-primary w-100 fw-bold shadow">
                                            Subscribe
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>


                        {/* Column 5 - Service Areas & App Download */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-6">
                            <h4 className="widget-title">Service Areas</h4>
                            <ul className="list-unstyled links-list mb-4">
                                <li><Link href="/ac-repairing-in-gachibowli/">Gachibowli</Link></li>
                                <li><Link href="/washing-machine-repairing-in-madhapur/">Madhapur</Link></li>
                                <li><Link href="/refrigerator-repairing-in-banjara-hills/">Banjara Hills</Link></li>
                                <li><Link href="/tv-repairing-in-jubilee-hills/">Jubilee Hills</Link></li>
                                <li><Link href="/ac-repairing-in-kukatpally/">Kukatpally</Link></li>
                                <li><Link href="/washing-machine-repairing-in-kondapur/">Kondapur</Link></li>
                                <li><Link href="/ac-repairing-in-hitech-city/">Hitech City</Link></li>
                                <li><Link href="/washing-machine-repairing-in-secunderabad/">Secunderabad</Link></li>
                                <li><Link href="/refrigerator-repairing-in-begumpet/">Begumpet</Link></li>
                                <li><Link href="/washing-machine-repairing-in-miyapur/">Miyapur</Link></li>
                                <li><Link href="/service-areas/" className="fw-bold text-orange">Browse All Areas <ArrowRightIcon /></Link></li>
                            </ul>

                            <h4 className="widget-title">Download App <ComingSoonBadge /></h4>
                            <div className="app-download-container d-flex flex-column gap-2 mb-3">
                                {/* App Store Badge — Coming Soon */}
                                <div className="app-download-btn d-flex align-items-center gap-3 px-3 py-2 text-white footer-app-download-wrap" title="Coming Soon on App Store">
                                    <svg width="22" height="26" viewBox="0 0 170 170" fill="currentColor" className="text-white">
                                        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.37.13-9.13-1.9-14.29-6.07-3.57-2.91-7.39-7.58-11.45-14-9.96-15.72-14.94-32.65-14.94-50.81 0-17.75 4.96-32.74 14.89-44.97 7.73-9.54 16.64-14.37 26.74-14.5 5.14 0 10.46 1.48 15.96 4.43 5.5 2.96 9.68 4.43 12.56 4.43 3.12 0 7.37-1.48 12.74-4.43 5.38-2.95 10.38-4.37 15.01-4.25 10.92.37 19.86 4.43 26.83 12.21 4.5 5.08 7.9 10.59 10.18 16.5-18.06 7.42-26.97 19.46-26.72 36.14.25 13.2 5.23 24.1 14.94 32.72 5.02 4.48 10.66 7.69 16.92 9.62zM119.22 35.24c0-7.72 2.76-14.88 8.28-21.49 5.52-6.61 12.24-10.45 20.17-11.53.13 1.02.19 1.83.19 2.44 0 7.47-2.81 14.49-8.43 21.05-5.63 6.56-12.42 10.44-20.37 11.64-.07-.75-.12-1.45-.12-2.11z" />
                                    </svg>
                                    <div className="text-start">
                                        <div className="app-badge-subtitle">Coming Soon</div>
                                        <div className="app-badge-title">App Store</div>
                                    </div>
                                </div>
                                {/* Play Store Badge — Coming Soon */}
                                <div className="app-download-btn d-flex align-items-center gap-3 px-3 py-2 text-white footer-app-download-wrap" title="Coming Soon on Google Play">
                                    <svg width="22" height="26" viewBox="0 0 512 512" fill="currentColor" className="text-white">
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 60.1-60.1 58 33.3c13 7.5 21.7 19.9 21.7 33.6s-8.7 26.2-21.7 33.3zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                                    </svg>
                                    <div className="text-start">
                                        <div className="app-badge-subtitle">Coming Soon</div>
                                        <div className="app-badge-title">Google Play</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="language-support d-flex align-items-center gap-2 mb-3">
                                <i className="fas fa-globe text-primary"></i>
                                <span className="small text-white opacity-75">Available in: <strong>English, Hindi, Telugu</strong></span>
                            </div>

                            {/* Customer Testimonial Snippet */}
                            <div className="footer-testimonial-card">
                                <div className="d-flex gap-1 mb-1">
                                    {[1,2,3,4,5].map(s => <span key={s} className="footer-stars-yellow">★</span>)}
                                    <span className="footer-verified-badge">Verified Review</span>
                                </div>
                                <p className="footer-testimonial-text">
                                    "Technician arrived in 90 minutes, fixed my LG AC same day. Transparent pricing, no surprises!"
                                </p>
                                <span className="footer-testimonial-author">— Priya S., Kondapur · June 2026</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Section - Badges, Trust Metrics, SEO */}
            <div className="footer-middle py-4 border-top border-secondary-subtle">
                <div className="container-fluid px-lg-5">
                    <div className="row g-4 align-items-center">
                        {/* Why Choose Us */}
                        <div className="col-lg-5 col-12">
                            <h5 className="small text-uppercase text-white fw-bold mb-3 tracking-wider text-muted-label">Why Choose MeeHelper?</h5>
                            <div className="row g-2">
                                <div className="col-6 d-flex align-items-center gap-2">
                                    <i className="fas fa-check-circle text-success"></i>
                                    <span className="small text-white opacity-75">Background-Verified Technicians</span>
                                </div>
                                <div className="col-6 d-flex align-items-center gap-2">
                                    <i className="fas fa-check-circle text-success"></i>
                                    <span className="small text-white opacity-75">100% Genuine OEM Spare Parts</span>
                                </div>
                                <div className="col-6 d-flex align-items-center gap-2">
                                    <i className="fas fa-check-circle text-success"></i>
                                    <span className="small text-white opacity-75">Up to 180-Day Service Warranty</span>
                                </div>
                                <div className="col-6 d-flex align-items-center gap-2">
                                    <i className="fas fa-check-circle text-success"></i>
                                    <span className="small text-white opacity-75">Same-Day Diagnostic Visit</span>
                                </div>
                            </div>
                        </div>
                        {/* Awards & Stats */}
                        <div className="col-lg-4 col-md-6 col-12 border-start border-secondary-subtle ps-lg-4">
                            <div className="d-flex align-items-center gap-4 mb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="award-badge text-warning">
                                        <i className="fas fa-trophy fa-2x"></i>
                                    </div>
                                    <div>
                                        <span className="fw-bold d-block text-white small">Best Service Platform</span>
                                        <span className="text-muted d-block footer-stat-label">Hyderabad Excellence 2026</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="award-badge text-info">
                                        <i className="fas fa-shield-alt fa-2x"></i>
                                    </div>
                                    <div>
                                        <span className="fw-bold d-block text-white small">ISO 9001:2015</span>
                                        <span className="text-muted d-block footer-stat-label">Certified Quality Management</span>
                                    </div>
                                </div>
                            </div>
                            <div className="platform-stats d-flex gap-4">
                                <div>
                                    <strong className="text-white d-block footer-stat-number">15,000+</strong>
                                    <span className="text-muted footer-stat-label">Happy Customers</span>
                                </div>
                                <div>
                                    <strong className="text-white d-block footer-stat-number">50+</strong>
                                    <span className="text-muted footer-stat-label">Localities Covered</span>
                                </div>
                                <div>
                                    <strong className="text-white d-block footer-stat-number">4.8★</strong>
                                    <span className="text-muted footer-stat-label">Google Rating</span>
                                </div>
                            </div>
                        </div>
                        {/* Accepted Payments & Trust badges */}
                        <div className="col-lg-3 col-md-6 col-12 border-start border-secondary-subtle ps-lg-4 text-start">
                            <h5 className="small text-uppercase text-white fw-bold mb-3 tracking-wider text-muted-label">100% Safe Payments</h5>
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <span className="payment-badge">UPI / GPay</span>
                                <span className="payment-badge">Credit/Debit Card</span>
                                <span className="payment-badge">Net Banking</span>
                                <span className="payment-badge">Cash on Service</span>
                            </div>
                            <div className="d-flex align-items-center gap-2 text-success">
                                <i className="fas fa-lock text-success footer-safe-checkout-icon"></i>
                                <span className="footer-safe-checkout-text">Secure 256-bit SSL Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEO Description Copy & Brand/Locality Expansion */}
            <div className="footer-seo-content py-4 text-start bg-dark-soft border-top border-secondary-subtle">
                <div className="container-fluid px-lg-5">
                    <div className="row g-4">
                        <div className="col-12">
                            <h6 className="small fw-bold mb-2 text-uppercase tracking-wider text-orange">About MeeHelper Hyderabad</h6>
                            <p className="mb-0 text-muted small footer-seo-paragraph">
                                MeeHelper is Hyderabad's premier doorstep service marketplace, offering background-verified and certified engineering solutions. We specialize in comprehensive multibrand appliance repair, home cleaning, deep sanitization, electrical wiring, home IT configuration, safety installations, and local packers &amp; movers. Operating across all major areas, we ensure genuine OEM components, upfront transparent pricing, and robust service warranties. All home repairs are performed by trained technicians adhering to strict safety guidelines.
                            </p>
                        </div>
                        <div className="col-lg-6 col-12">
                            <h6 className="small fw-bold mb-2 text-uppercase tracking-wider text-orange">Top Brands We Service</h6>
                            <p className="mb-0 text-muted small footer-seo-paragraph">
                                We provide expert out-of-warranty service and repair for all leading global appliance brands: <strong>Samsung, LG, Whirlpool, Bosch, IFB, Voltas, Godrej, Daikin, Carrier, Panasonic, Sony, Hitachi, Blue Star, Lloyd, Haier, Mitsubishi, O General, Kent, Aquaguard, Bajaj, Havells, Philips, Dell, HP, Lenovo, and Asus</strong>. All brand trademarks are the property of their respective owners.
                            </p>
                        </div>
                        <div className="col-lg-6 col-12">
                            <h6 className="small fw-bold mb-2 text-uppercase tracking-wider text-orange">Areas We Serve in Hyderabad</h6>
                            <p className="mb-0 text-muted small footer-seo-paragraph">
                                Our technicians are strategically stationed across all Hyderabad localities: <strong>Madhapur, Gachibowli, Kondapur, Hitech City, Nanakramguda, Financial District, Kokapet, Narsingi, Manikonda, Puppalguda, Miyapur, Chandanagar, Hafeezpet, Kukatpally, Pragathi Nagar, Nizampet, Bachupally, Balanagar, Ameerpet, SR Nagar, Yousufguda, Banjara Hills, Jubilee Hills, Begumpet, Secunderabad, Alwal, Sainikpuri, Yapral, Neredmet, Safilguda, Malkajgiri, Habsiguda, Tarnaka, Uppal, Ramanthapur, Boduppal, L.B. Nagar, Vanasthalipuram, Dilsukhnagar, Kothapet, Malakpet, Saidabad, Santosh Nagar, Attapur, Rajendranagar, Mehdipatnam, Tolichowki, Masab Tank, and Charminar</strong>.
                            </p>
                        </div>
                        <div className="col-12 mt-3 pt-3 border-top border-secondary-subtle">
                            <h6 className="small fw-bold mb-2 text-uppercase tracking-wider text-orange">Professional Commitment & Quality Standards</h6>
                            <p className="mb-0 text-muted small footer-seo-paragraph">
                                At MeeHelper, we hold our service delivery to the highest industry standards. Every technical partner undergoes rigorous background verification, biometric identification checks, and practical skills assessment at our central training facility before onboarding. We utilize state-of-the-art diagnostic machinery and supply 100% genuine OEM spare parts, backed by our service protection framework. For any queries, scheduling modifications, or escalations, our dedicated grievance redressal desk is online 24/7 to ensure resolutions within 24 hours. Your safety, convenience, and peace of mind are our primary directives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom py-3">
                <div className="container-fluid px-lg-5">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center text-md-start mb-2 mb-md-0">
                            <p className="mb-0 text-white opacity-50 footer-bottom-text">
                                &copy; {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-md-4 text-center mb-2 mb-md-0">
                            <p className="mb-0 opacity-50 footer-bottom-text-white">
                                Crafted with <span className="text-danger">♥</span> in Hyderabad
                            </p>
                        </div>
                        <div className="col-md-4 text-center text-md-end">
                            <p className="mb-0 text-white opacity-50 footer-bottom-text">
                                Hyderabad's Trusted Engineering Experts
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
