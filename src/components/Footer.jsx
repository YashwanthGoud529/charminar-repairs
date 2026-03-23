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
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#673ab7" viewBox="0 0 16 16" aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }}><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
                                         <p className="mb-0 text-white" style={{ opacity: 0.8, fontSize: '15px' }}>Karwan, Hyderabad, Telangana 500006</p>
                                     </div>
                                 </li>
                                 <li className="mb-4">
                                     <div className="d-flex gap-3">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#673ab7" viewBox="0 0 16 16" aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }}><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
                                         <div className="d-flex flex-column">
                                             <a href="tel:8008615049" className="text-white text-decoration-none hover-orange fw-bold">8008615049</a>
                                         </div>
                                     </div>
                                 </li>
                                 <li className="mb-4">
                                     <div className="d-flex gap-3">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#673ab7" viewBox="0 0 16 16" aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }}><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" /></svg>
                                         <a href="mailto:contact@charminarrepairs.com" className="text-white text-decoration-none hover-orange">contact@charminarrepairs.com</a>
                                     </div>
                                 </li>
                             </ul>
                             <div className="social-links-footer mt-4 d-flex gap-3">
                                 <a href="https://facebook.com/charminarrepairs" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Follow on Facebook"><i className="fab fa-facebook-f"></i></a>
                                 <a href="https://instagram.com/charminarrepairs" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Follow on Instagram"><i className="fab fa-instagram"></i></a>
                                 <a href="https://twitter.com/charminarrepairs" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Follow on Twitter"><i className="fab fa-twitter"></i></a>
                                 <a href="https://g.page/r/CRdNkBW9Xm4lEAE/review" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Rate on Google"><i className="fab fa-google"></i></a>
                                 <a href="https://wa.me/918008615049" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Chat on WhatsApp"><i className="fab fa-whatsapp"></i></a>
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
                                 <li className="mt-3"><Link href="/#services" className="text-purple fw-bold small">View All Services <i className="fas fa-arrow-right ms-1"></i></Link></li>
                             </ul>
                         </div>

                         <div className="col-lg-4 col-md-4">
                             <h2 className="widget-title">Business Hours</h2>
                             <div className="hours-card p-4">
                                 <div className="d-flex justify-content-between mb-2">
                                     <span className="text-white opacity-75">Mon - Fri:</span>
                                     <span className="text-white fw-bold">9:00am - 9:00pm</span>
                                 </div>
                                 <div className="d-flex justify-content-between mb-3">
                                     <span className="text-white opacity-75">Sat - Sun:</span>
                                     <span className="text-white fw-bold">8:00am - 9:00pm</span>
                                 </div>
                                 <p className="text-white opacity-40 small mb-0 font-italic">Doorstep repairs across 50+ Hyderabad districts.</p>
                             </div>
                             <div className="mt-4">
                                 <a href="tel:8008615049" className="btn btn-primary w-100 py-3 fw-bold" style={{ borderRadius: '8px', background: '#673ab7', borderColor: '#673ab7' }}>
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
