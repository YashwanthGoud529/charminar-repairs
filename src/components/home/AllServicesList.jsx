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

const ALL_SECTION_KEYS = [
    'Refrigerator Repair',
    'Washing Machine Repair',
    'Air Conditioner Repair',
    'Television Repair',
    'Microwave Oven Repair',
    'Water Purifier (RO) Service',
    'Geyser & Water Heater Repair',
    'Gas Stove & Hob Repair',
    'Kitchen Chimney Service',
    'Dishwasher Repair',
    'Coffee Machine Repair',
    'Vacuum Cleaner Repair'
];

const AllServicesList = () => {
    const services = ALL_SECTION_KEYS.map(key => {
        const data = SERVICE_DATA_MAP[key];
        const slug = SERVICE_CANONICAL_MAP[key];
        if (!data || !slug) return null;
        return {
            id: key,
            title: key,
            image: data.photo,
            slug: `/${slug}/`
        };
    }).filter(Boolean);

    return (
        <section className="shared-carousel-section py-5 bg-light-soft">
            <div className="container custom-container">
                <h2 className="shared-carousel-title mb-4">Explore Our Services</h2>
                
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={16}
                    slidesPerView={1.5}
                    breakpoints={{
                        600: { slidesPerView: 2.5, spaceBetween: 20 },
                        1024: { slidesPerView: 4.5, spaceBetween: 20 },
                    }}
                    className="all-services-swiper"
                >
                    {services.map(service => (
                        <SwiperSlide key={service.id}>
                            <Link href={service.slug} className="text-decoration-none">
                                <div className="shared-carousel-card most-booked-card hover-lift">
                                    <div className="img-wrapper safety-img-wrap" style={{ position: 'relative', height: '230px', marginBottom: '16px' }}>
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

export default AllServicesList;
