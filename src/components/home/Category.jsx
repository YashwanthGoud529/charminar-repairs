'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';
import Link from 'next/link';
import { SERVICE_CANONICAL_MAP } from '@/config/services';

const CATEGORY_ITEMS = [
    { id: 1, image: '/assets/Images/category/appliance-repair.png', alt: 'Appliance Repair', slug: `/${SERVICE_CANONICAL_MAP['Professional Appliance Repair']}` },
    { id: 2, image: '/assets/Images/category/floor-polish.png', alt: 'Floor Polish', slug: '/bathroom-cleaning' },
    { id: 3, image: '/assets/Images/category/hair-saloon.png', alt: 'Hair Saloon', slug: `/${SERVICE_CANONICAL_MAP['Haircut for Men']}` },
    { id: 4, image: '/assets/Images/category/home-painting.png', alt: 'Home Painting', slug: `/${SERVICE_CANONICAL_MAP['Decor Installation']}` },
    { id: 5, image: '/assets/Images/category/packers-movers.png', alt: 'Packers Movers', slug: null },
    { id: 6, image: '/assets/Images/category/pest-control.png', alt: 'Pest Control', slug: `/${SERVICE_CANONICAL_MAP['Cockroach Control']}` },
    { id: 7, image: '/assets/Images/category/plumber.png', alt: 'Plumber', slug: `/${SERVICE_CANONICAL_MAP['Plumbing Work']}` },
    { id: 8, image: '/assets/Images/category/relax-men.png', alt: 'Men Salon', slug: `/${SERVICE_CANONICAL_MAP['Haircut for Men']}` },
];

const Category = () => {
    return (
        <section className="shared-carousel-section" style={{ paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#ffffff' }}>
            <div className="container" style={{ maxWidth: '100%' }}>
                <h2 className="shared-carousel-title" style={{ paddingLeft: '15px' }}>Category</h2>
                
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        576: { slidesPerView: 2, spaceBetween: 20 },
                        991: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    style={{ padding: '10px 0' }}
                >
                    {CATEGORY_ITEMS.map(item => (
                        <SwiperSlide key={item.id}>
                            {item.slug ? (
                                <Link href={item.slug} className="text-decoration-none">
                                    <div className="shared-carousel-card default-card">
                                        <img src={item.image} alt={item.alt} loading="lazy" />
                                    </div>
                                </Link>
                            ) : (
                                <div className="shared-carousel-card default-card" style={{ cursor: 'default' }}>
                                    <img src={item.image} alt={item.alt} loading="lazy" />
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Category;
