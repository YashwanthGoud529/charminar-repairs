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
                                     <div className="d-flex align-items-center gap-3">
                                         <div className="icon-box-colorful icon-box-green shadow-sm">
                                            <i className="fas fa-map-marker-alt"></i>
                                         </div>
                                         <p className="mb-0 text-white" style={{ opacity: 0.8, fontSize: '15px' }}>Karwan, Hyderabad, Telangana 500006</p>
                                     </div>
                                 </li>
                                 <li className="mb-4">
                                     <div className="d-flex align-items-center gap-3">
                                         <div className="icon-box-colorful icon-box-blue shadow-sm">
                                            <i className="fas fa-phone-alt"></i>
                                         </div>
                                         <div className="d-flex flex-column">
                                             <a href="tel:8008615049" className="text-white text-decoration-none hover-orange fw-bold">8008615049</a>
                                         </div>
                                     </div>
                                 </li>
                                 <li className="mb-4">
                                     <div className="d-flex align-items-center gap-3">
                                         <div className="icon-box-colorful icon-box-purple shadow-sm">
                                            <i className="fas fa-envelope"></i>
                                         </div>
                                         <a href="mailto:contact@charminarrepairs.com" className="text-white text-decoration-none hover-orange">contact@charminarrepairs.com</a>
                                     </div>
                                 </li>
                             </ul>
                             <div className="social-links-footer mt-4 d-flex gap-3">
                                 <a href="https://facebook.com/charminarrepairs" target="_blank" rel="noopener noreferrer" className="icon-box-colorful icon-box-blue" aria-label="Follow on Facebook">
                                     <i className="fab fa-facebook-f"></i>
                                 </a>
                                 <a href="https://instagram.com/charminarrepairs" target="_blank" rel="noopener noreferrer" className="icon-box-colorful icon-box-purple" aria-label="Follow on Instagram">
                                     <i className="fab fa-instagram"></i>
                                 </a>
                                 <a href="https://twitter.com/charminarrepairs" target="_blank" rel="noopener noreferrer" className="icon-box-colorful icon-box-indigo" aria-label="Follow on Twitter">
                                     <i className="fab fa-twitter"></i>
                                 </a>
                                 <a href="https://wa.me/918008615049" target="_blank" rel="noopener noreferrer" className="icon-box-colorful icon-box-green" aria-label="Chat on WhatsApp">
                                     <i className="fab fa-whatsapp"></i>
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

                         <div className="col-lg-3 col-md-4 col-6">
                             <h2 className="widget-title">Top Localities</h2>
                             <ul className="list-unstyled links-list">
                                 <li><Link href="/ac-repairing-in-gachibowli/">Gachibowli</Link></li>
                                 <li><Link href="/washing-machine-repairing-in-madhapur/">Madhapur</Link></li>
                                 <li><Link href="/refrigerator-repairing-in-banjara-hills/">Banjara Hills</Link></li>
                                 <li><Link href="/tv-repairing-in-jubilee-hills/">Jubilee Hills</Link></li>
                                 <li><Link href="/ac-repairing-in-kukatpally/">Kukatpally</Link></li>
                                 <li><Link href="/washing-machine-repairing-in-kondapur/">Kondapur</Link></li>
                                 <li><Link href="/refrigerator-repairing-in-miyapur/">Miyapur</Link></li>
                                 <li><Link href="/all-services-hyderabad/" className="fw-bold" style={{color: '#ff6b00'}}>Browse All Areas <ArrowRightIcon /></Link></li>
                             </ul>
                         </div>

                         <div className="col-lg-3 col-md-4">
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
