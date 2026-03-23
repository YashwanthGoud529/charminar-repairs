'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css'; // Shared CSS

import { SERVICE_CANONICAL_MAP } from '@/config/services';
import { SERVICE_DATA_MAP } from '@/config/serviceData';

const MOST_BOOKED_KEYS = [
    'Insta Help',
    'Foam-jet AC service',
    'Intense bathroom cleaning',
    'Air Conditioner Repair',
    'Refrigerator Repair',
    'Washing Machine Repair',
    'Television Repair',
    'Water Purifier (RO) Service',
    'Geyser & Water Heater Repair'
];

const MostBookedServices = () => {
    const services = MOST_BOOKED_KEYS.map(key => {
        const data = SERVICE_DATA_MAP[key];
        const slug = SERVICE_CANONICAL_MAP[key];
        if (!data || !slug) return null;
        return {
            id: key,
            image: data.photo,
            title: key,
            rating: data.rating || '4.7+ (100K+)',
            price: data.price || '₹299',
            slug: `/${slug}/`
        };
    }).filter(Boolean);

    return (
        <section className="shared-carousel-section py-5 bg-light-soft">
            <div className="container custom-container">
                <Link href="/most-booked-services/" className="text-decoration-none color-inherit">
                    <h2 className="shared-carousel-title mb-4" style={{ cursor: 'pointer' }}>Most booked services</h2>
                </Link>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={16}
                    slidesPerView={1.5}
                    breakpoints={{
                        600: { slidesPerView: 2.5, spaceBetween: 20 },
                        1024: { slidesPerView: 4.5, spaceBetween: 20 },
                    }}
                    className="most-booked-swiper"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={service.id}>
                            <Link href={service.slug} className="text-decoration-none color-inherit">
                                <div className="shared-carousel-card most-booked-card hover-lift">
                                    <div className="img-wrapper safety-img-wrap" style={{ position: 'relative', height: '200px', width: '100%' }}>
                                        <Image 
                                            src={service.image} 
                                            alt={service.title} 
                                            fill
                                            className="rounded-3 object-fit-cover"
                                            sizes="(max-width: 600px) 66vw, (max-width: 1024px) 40vw, 20vw"
                                            priority={index < 4}
                                        />
                                    </div>
                                    <div className="service-details">
                                        <h3 className="service-title">{service.title}</h3>
                                        <div className="service-rating">
                                            <i className="fas fa-star text-warning me-1" style={{ fontSize: '13px' }}></i>
                                            {service.rating}
                                        </div>
                                        <div className="service-price">
                                            {service.price}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default MostBookedServices;
