'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './TrustFeatures.css';

const REVIEWS = [
    { name: 'Rajesh Kumar', area: 'Banjara Hills', rating: 5, service: 'AC Repair', date: 'June 2026', text: 'Excellent service! The technician arrived within 2 hours, diagnosed the issue instantly, and fixed my Daikin AC at a very reasonable price. Will definitely use again.', avatarColor: 'linear-gradient(135deg, #024dbe, #0a7fff)' },
    { name: 'Priya Sharma', area: 'Kondapur', rating: 5, service: 'Washing Machine Repair', date: 'June 2026', text: 'Very professional. They called before arriving, wore shoe covers inside the house, and fixed the drum motor in under an hour. 180-day warranty is a bonus!', avatarColor: 'linear-gradient(135deg, #d63031, #ff7675)' },
    { name: 'Mohammed Imran', area: 'Madhapur', rating: 5, service: 'Refrigerator Repair', date: 'June 2026', text: 'My LG fridge was not cooling. They replaced the compressor with a genuine part and gave a solid warranty on it. Transparent pricing, no surprises.', avatarColor: 'linear-gradient(135deg, #00b894, #00cec9)' },
    { name: 'Sunita Reddy', area: 'Gachibowli', rating: 5, service: 'Deep Home Cleaning', date: 'May 2026', text: 'Wow! My 3BHK looks brand new. The team was punctual, brought all their own equipment, and worked nonstop for 6 hours. Highly recommended!', avatarColor: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' },
    { name: 'Amit Verma', area: 'Jubilee Hills', rating: 5, service: 'TV Repair', date: 'May 2026', text: 'Samsung LED TV display issue resolved same day. The engineer was knowledgeable and explained the problem clearly. Reasonable charge.', avatarColor: 'linear-gradient(135deg, #e17055, #fdcb6e)' },
    { name: 'Lakshmi Narayana', area: 'Kukatpally', rating: 5, service: 'Microwave Repair', date: 'May 2026', text: 'IFB microwave stopped heating. MeeHelper replaced the magnetron with a genuine part the same day. Excellent workmanship.', avatarColor: 'linear-gradient(135deg, #0984e3, #74b9ff)' },
    { name: 'Divya Krishnamurthy', area: 'Hitech City', rating: 5, service: 'RO Service', date: 'April 2026', text: 'Regular RO maintenance done very efficiently. The technician was clean, quick, and explained every step. Water tastes great now!', avatarColor: 'linear-gradient(135deg, #00b894, #55efc4)' },
    { name: 'Srinivas Rao', area: 'Secunderabad', rating: 5, service: 'Geyser Repair', date: 'April 2026', text: 'Geyser was leaking. Technician identified a faulty pressure valve and replaced it on the spot. Very reliable and trustworthy service.', avatarColor: 'linear-gradient(135deg, #fdcb6e, #e17055)' },
    { name: 'Fatima Begum', area: 'Tolichowki', rating: 5, service: 'AC Service', date: 'April 2026', text: 'Foam-jet AC service made a huge difference in cooling. I could feel the difference immediately. Booked again for all 3 ACs in my flat.', avatarColor: 'linear-gradient(135deg, #e84393, #fd79a8)' },
    { name: 'Venkatesh Babu', area: 'LB Nagar', rating: 5, service: 'Washing Machine', date: 'March 2026', text: 'Same-day service for my front-load Samsung washing machine. PCB repaired, not replaced — saved me ₹4,000. Honest technicians!', avatarColor: 'linear-gradient(135deg, #2d3436, #636e72)' },
];

const Testimonials = ({ bgColor }) => {
    const bgClass = bgColor === 'gray' ? 'section-bg-gray' : 'section-bg-white';
    return (
        <section className={`trust-section testimonials-section py-5 ${bgClass}`}>
            <div className="container">
                <div className="text-center">
                    <div className="section-tag-glow animate-fade-in-up">SOCIAL PROOF</div>
                    <h2 className="trust-section-title animate-fade-in-up">What Our Customers Say</h2>
                    <p className="trust-section-subtitle mb-4 animate-fade-in-up">
                        Verified feedback from 15,000+ satisfied homeowners and corporate clients across Hyderabad.
                    </p>
                </div>

                <div className="testimonials-slider-wrapper position-relative px-md-4">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        speed={800}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        style={{ padding: '20px 10px' }}
                    >
                        {REVIEWS.map((r, i) => (
                            <SwiperSlide key={i}>
                                <div className="testimonial-card-premium">
                                    <div className="testimonial-card-header">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="user-avatar-circle"
                                                style={{ background: r.avatarColor }}
                                            >
                                                {r.name.charAt(0)}
                                            </div>
                                            <div className="user-meta-info text-start">
                                                <div className="user-name">{r.name}</div>
                                                <div className="user-location-badge">📍 {r.area}</div>
                                            </div>
                                        </div>
                                        <span className="service-rendered-tag">{r.service}</span>
                                    </div>

                                    <div className="stars-rating-wrapper">
                                        {[...Array(r.rating)].map((_, idx) => (
                                            <span key={idx} className="star-rating-icon">★</span>
                                        ))}
                                    </div>

                                    <p className="testimonial-body-text text-start">"{r.text}"</p>

                                    <div className="testimonial-card-footer text-start">
                                        {r.date} · <span style={{ color: '#22c55e', fontWeight: 600 }}>✓ Verified Customer</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Google Reviews CTA */}
                <div className="text-center mt-4">
                    <a
                        href="https://g.page/r/meehelper/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center gap-2 px-4 py-2 fw-bold"
                        style={{
                            background: '#fff',
                            border: '1.5px solid #e2e8f0',
                            borderRadius: '4px',
                            color: '#024dbe',
                            fontSize: '14px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                            transition: 'all 0.3s',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 20px rgba(2,77,190,0.12)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        See All 200+ Google Reviews →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
