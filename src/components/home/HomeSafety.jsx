'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';

import { SERVICE_CANONICAL_MAP } from '@/config/services';
import { SERVICE_DATA_MAP } from '@/config/serviceData';

const SAFETY_SERVICES = [
    'Plumbing Work',
    'Electrical work',
    'Carpenter work',
    'Bird Netting'
].map(title => ({
    id: title,
    title: title,
    image: SERVICE_DATA_MAP[title]?.photo || '/assets/Images/appliance/icons/ac.jpg',
    slug: `/${SERVICE_CANONICAL_MAP[title]}`
}));

const HomeSafety = () => {
    return (
        <section className="home-safety-carousel py-5 bg-light-soft" style={{ borderRadius: '12px' }}>
            <div className="container custom-container">
                <div className="d-flex align-items-center mb-4">
                    <h2 className="shared-carousel-title mb-0">Home Repair Services</h2>
                    <span className="section-status-pill">Trained Team</span>
                </div>
                
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={16}
                    slidesPerView={1.5}
                    breakpoints={{
                        600: { slidesPerView: 2.5, spaceBetween: 20 },
                        1024: { slidesPerView: 4.5, spaceBetween: 20 },
                    }}
                    className="safety-swiper"
                >
                    {SAFETY_SERVICES.map(service => (
                        <SwiperSlide key={service.id}>
                            <Link href={service.slug} className="text-decoration-none">
                                <div className="shared-carousel-card most-booked-card hover-lift">
                                    <div className="img-wrapper safety-img-wrap" style={{ position: 'relative', height: '230px', marginBottom: '16px' }}>
                                        <div className="discount-tag">
                                            <span className="get-instant">Get Instant</span>
                                            <span className="percentage">20%</span>
                                            <span className="off-text">OFF</span>
                                            <span className="booking-text">On First Booking</span>
                                        </div>

                                        <Image 
                                            src={service.image} 
                                            alt={service.title} 
                                            fill
                                            className="rounded-3 shadow-sm object-fit-cover"
                                            sizes="(max-width: 600px) 66vw, (max-width: 1024px) 40vw, 20vw"
                                        />
                                    </div>
                                    <h3 className="service-title text-center mt-2" style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>{service.title}</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HomeSafety;
