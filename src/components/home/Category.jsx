'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_CANONICAL_MAP } from '@/config/services';

const CATEGORY_ITEMS = [
    { id: 1, image: '/assets/Images/category/appliance-repair.jpeg', alt: 'Appliance Repair', slug: `/${SERVICE_CANONICAL_MAP['Professional Appliance Repair']}` },
    { id: 2, image: '/assets/Images/category/floor-polish.jpeg', alt: 'Floor Polish', slug: '/bathroom-cleaning' },
    { id: 3, image: '/assets/Images/category/hair-saloon.jpeg', alt: 'Hair Saloon', slug: `/${SERVICE_CANONICAL_MAP['Haircut for Men']}` },
    { id: 4, image: '/assets/Images/category/home-painting.jpeg', alt: 'Home Painting', slug: `/${SERVICE_CANONICAL_MAP['Decor Installation']}` },
    { id: 5, image: '/assets/Images/category/packers-movers.jpeg', alt: 'Packers Movers', slug: null },
    { id: 6, image: '/assets/Images/category/pest-control.jpeg', alt: 'Pest Control', slug: `/${SERVICE_CANONICAL_MAP['Cockroach Control']}` },
    { id: 7, image: '/assets/Images/category/plumber.jpeg', alt: 'Plumber', slug: `/${SERVICE_CANONICAL_MAP['Plumbing Work']}` },
    { id: 8, image: '/assets/Images/category/relax-men.jpeg', alt: 'Men Salon', slug: `/${SERVICE_CANONICAL_MAP['Haircut for Men']}` },
];

const Category = () => {
    return (
        <section className="shared-carousel-section" style={{ paddingTop: '50px', paddingBottom: '50px', }}>
            <div className="container" style={{ maxWidth: '100%' }}>
                <Link href="/all-services-hyderabad/" className="text-decoration-none color-inherit">
                    <h2 className="shared-carousel-title" style={{ paddingLeft: '15px', cursor: 'pointer' }}>Category</h2>
                </Link>
                
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2.5, spaceBetween: 20 },
                        991: { slidesPerView: 3.5, spaceBetween: 20 },
                        1280: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    style={{ padding: '10px 0' }}
                >
                    {CATEGORY_ITEMS.map(item => (
                        <SwiperSlide key={item.id}>
                            {item.slug ? (
                                <Link href={item.slug} className="text-decoration-none">
                                    <div className="shared-carousel-card default-card" style={{ position: 'relative', height: '240px' }}>
                                        <Image 
                                            src={item.image} 
                                            alt={item.alt} 
                                            fill
                                           
                                            sizes="(max-width: 640px) 75vw, (max-width: 991px) 25vw, (max-width: 1280px) 20vw, 16vw"
                                        />
                                    </div>
                                </Link>
                            ) : (
                                <div className="shared-carousel-card default-card" style={{ cursor: 'default', position: 'relative', height: '240px', objectFit: 'cover' }}>
                                    <Image 
                                        src={item.image} 
                                        alt={item.alt} 
                                        fill
                                       
                                        sizes="(max-width: 640px) 75vw, (max-width: 991px) 25vw, (max-width: 1280px) 20vw, 16vw"
                                    />
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
