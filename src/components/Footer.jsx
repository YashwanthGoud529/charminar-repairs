'use client';

import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import './Footer.css';

const APPLIANCE_ICONS = [
    { name: 'AC',              icon: '/assets/Images/appliance/icons/ac.jpg' },
    { name: 'Refrigerator',    icon: '/assets/Images/appliance/icons/fridge.jpg' },
    { name: 'Washing Machine', icon: '/assets/Images/appliance/icons/washing-machine.jpg' },
    { name: 'Microwave',       icon: '/assets/Images/appliance/icons/microwave.jpg' },
    { name: 'Television',      icon: '/assets/Images/appliance/icons/tv.jpg' },
    { name: 'Gas Stove',       icon: '/assets/Images/appliance/icons/stove.jpg' },
    { name: 'Water Purifier',  icon: '/assets/Images/appliance/icons/water-purifier.jpg' },
    { name: 'Kitchen Chimney', icon: '/assets/Images/appliance/icons/chimney.jpg' },
    { name: 'Geyser',          icon: '/assets/Images/appliance/icons/geyser-repair.jpg' },
    { name: 'Laptop',          icon: '/assets/Images/appliance/icons/laptop.jpg' },
    { name: 'Air Cooler',      icon: '/assets/Images/appliance/icons/air-cooler.jpg' },
];

const Footer = () => {
    // --- SVG Right Arrow Icon ---
    const ArrowRightIcon = () => (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ms-1">
            <polyline points="9 18 15 12 9 6"/>
        </svg>
    );

    return (
        <footer className="footer-area" style={{ backgroundColor: '#0c1228', color: '#fff' }}>
            {/* Top Footer with Appliance Track */}
            <div className="footer-top py-4 border-bottom border-secondary border-opacity-10 overflow-hidden">
                <div className="container-fluid px-0">
                    <div className="appliance-scroll-container">
                        <div className="appliance-track">
                            {[...APPLIANCE_ICONS, ...APPLIANCE_ICONS].map((item, idx) => (
                                <div key={idx} className="appliance-icon-item">
                                    <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                                        <Image 
                                            src={item.icon} 
                                            alt={`${item.name} Repair Service`} 
                                            fill
                                            style={{ objectFit: 'contain', borderRadius: '6px' }} 
                                            sizes="50px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

             {/* Main Footer Content */}
             <div className="footer-main py-5">
                 <div className="container-fluid px-lg-5">
                     <div className="row g-4">
                         <div className="col-lg-3 col-md-6">
                             <h2 className="widget-title">Contact Us</h2>
                             <ul className="list-unstyled contact-list">
                                 <li className="mb-4">
                                     <div className="d-flex gap-3">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff6b00" viewBox="0 0 16 16" aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }}><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
                                         <p className="mb-0 text-white" style={{ opacity: 0.8, fontSize: '15px' }}>Karwan, Hyderabad, Telangana 500006</p>
                                     </div>
                                 </li>
                                 <li className="mb-4">
                                     <div className="d-flex gap-3">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff6b00" viewBox="0 0 16 16" aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }}><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
                                         <div className="d-flex flex-column">
                                             <a href="tel:8008615049" className="text-white text-decoration-none hover-orange fw-bold">8008615049</a>
                                         </div>
                                     </div>
                                 </li>
                                 <li className="mb-4">
                                     <div className="d-flex gap-3">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff6b00" viewBox="0 0 16 16" aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }}><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" /></svg>
                                         <a href="mailto:contact@charminarrepairs.com" className="text-white text-decoration-none hover-orange">contact@charminarrepairs.com</a>
                                     </div>
                                 </li>
                             </ul>
                             <div className="social-links-footer mt-4 d-flex gap-3">
                                 <a href="https://facebook.com/charminarrepairs" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Follow on Facebook">
                                     <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                                 </a>
                                 <a href="https://instagram.com/charminarrepairs" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Follow on Instagram">
                                     <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.981 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                 </a>
                                 <a href="https://twitter.com/charminarrepairs" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Follow on Twitter">
                                     <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                 </a>
                                 <a href="https://g.page/r/CRdNkBW9Xm4lEAE/review" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Rate on Google">
                                     <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42s1.95-4.42 4.34-4.42c1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.611zm11.5 0h-2v2h2v2h2v-2h2v-2h-2v-2h-2v2z"/></svg>
                                 </a>
                                 <a href="https://wa.me/918008615049" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Chat on WhatsApp">
                                     <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.847 1.606 5.62l-.993 3.635 3.791-.994-1.35 1.041zm11.057-7.477c-.313-.156-1.853-.915-2.14-.1.021-.286-.141-.43-.162-.482-.046-.117-.183-.248-.454-.313-.156-.217-.655-.156-.915-.286-.021-.033-.124-.132-.231-.24-.448-.454-.515-.558-.871-1.03-.518-.686-.689-.81-.979-1.22-.29-.41-.03-.701.071-.851.101-.15.228-.35.342-.48.113-.13.15-.224.227-.374.077-.15.038-.281-.019-.393-.057-.113-.513-1.236-.704-1.697-.186-.446-.363-.385-.513-.392-.132-.007-.284-.009-.437-.009-.153 0-.401.057-.611.286-.21.229-.801.782-.801 1.905 0 1.124.815 2.208.929 2.361.114.153 1.605 2.45 3.886 3.432.543.234.966.374 1.296.479.544.173 1.04.149 1.431.09.435-.066 1.341-.548 1.531-1.077.19-.529.19-.982.132-1.077-.059-.095-.213-.151-.527-.308z"/></svg>
                                 </a>
                             </div>
                         </div>

                         <div className="col-lg-2 col-md-4 col-6">
                             <h2 className="widget-title">Quick Links</h2>
                             <ul className="list-unstyled links-list">
                                 <li><Link href="/">Home</Link></li>
                                 <li><Link href="/about-us/">About Us</Link></li>
                                 <li><Link href="/blog/">Blog & Tips</Link></li>
                                 <li><Link href="/pricing/">Pricing Card</Link></li>
                                 <li><Link href="/service-areas/">Service Areas</Link></li>
                                 <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
                                 <li><Link href="/terms-of-service/">Terms of Service</Link></li>
                             </ul>
                         </div>

                         <div className="col-lg-3 col-md-4 col-6">
                             <h2 className="widget-title">All Services</h2>
                             <ul className="list-unstyled links-list">
                                 <li><Link href="/washing-machine-repairing/">Washing Machine</Link></li>
                                 <li><Link href="/ac-repairing/">AC Repair Service</Link></li>
                                 <li><Link href="/refrigerator-repairing/">Fridge Restoration</Link></li>
                                 <li><Link href="/microwave-repairing/">Microwave Oven</Link></li>
                                 <li><Link href="/laptop-repairing/">Laptop Fix</Link></li>
                                 <li className="mt-3">
                                     <Link href="/#services" className="fw-bold small d-flex align-items-center" style={{ color: '#ff6b00' }}>
                                         View All Services <ArrowRightIcon />
                                     </Link>
                                 </li>
                             </ul>
                         </div>

                         <div className="col-lg-4 col-md-4">
                             <h2 className="widget-title">Business Hours</h2>
                             <div className="hours-card p-4">
                                 <div className="d-flex justify-content-between mb-2">
                                     <span className="text-white opacity-75 small">Mon - Fri:</span>
                                     <span className="text-white fw-bold small">9:00am - 9:00pm</span>
                                 </div>
                                 <div className="d-flex justify-content-between mb-3">
                                     <span className="text-white opacity-75 small">Sat - Sun:</span>
                                     <span className="text-white fw-bold small">8:00am - 9:00pm</span>
                                 </div>
                                 <p className="text-white opacity-40 small mb-0 font-italic">Doorstep repairs across 50+ Hyderabad districts.</p>
                             </div>
                             <div className="mt-4">
                                 <a href="tel:8008615049" className="btn btn-primary w-100 py-3 fw-bold shadow-lg" style={{ borderRadius: '12px', background: '#ff6b00', borderColor: '#ff6b00' }}>
                                     URGENT SUPPORT: 8008615049
                                 </a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

            {/* Bottom Bar */}
            <div className="footer-bottom py-4" style={{ background: '#080d1d', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container-fluid px-lg-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="mb-0 text-white" style={{ fontSize: '13px', opacity: 0.6 }}>
                                &copy; {new Date().getFullYear()} Charminar Repairs Service. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="mb-0 text-white" style={{ fontSize: '13px', opacity: 0.6 }}>
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
