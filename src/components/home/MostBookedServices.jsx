'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css'; // Shared CSS

const SERVICES = [
    {
        id: 1,
        image: '/assets/Images/most-booked/insta-help.jpg',
        alt: 'Insta Help',
        title: 'Insta Help',
        rating: '4.69 (3.7M)',
        price: '₹99',
        originalPrice: '₹245',
        slug: '/insta-help'
    },
    {
        id: 2,
        image: '/assets/Images/most-booked/foam-jet-ac-service.jpg',
        alt: 'Foam-jet AC service',
        title: 'Foam-jet AC service',
        rating: '4.77 (2.1M)',
        price: '₹599',
        originalPrice: null,
        slug: '/foam-jet-ac-service'
    },
    {
        id: 3,
        image: '/assets/Images/most-booked/intense-bathroom-cleaning.jpg',
        alt: 'Intense bathroom cleaning',
        title: 'Intense bathroom cleaning',
        rating: '4.80 (4.8M)',
        price: '₹499',
        originalPrice: null,
        slug: '/bathroom-cleaning'
    },
    {
        id: 4,
        image: '/assets/Images/most-booked/intense-bathroom-cleaning.jpg',
        alt: 'Intense cleaning (2 bathrooms)',
        title: 'Intense cleaning (2 bathrooms)',
        rating: '4.80 (4.8M)',
        price: '₹923',
        originalPrice: '₹990',
        slug: '/bathroom-cleaning'
    },
    {
        id: 5,
        image: '/assets/Images/most-booked/haircut-for-men.jpg',
        alt: 'Haircut for men',
        title: 'Haircut for men',
        rating: '4.87 (471K)',
        price: '₹259',
        originalPrice: null,
        slug: '/men-haircut'
    },
    {
        id: 6,
        image: '/assets/Images/most-booked/ac-repair.png',
        alt: 'AC repair',
        title: 'AC repair',
        rating: '4.74 (787K)',
        price: '₹299',
        originalPrice: null,
        slug: '/ac-repairing'
    },
    {
        id: 7,
        image: '/assets/Images/most-booked/british-rose-pedicure.jpg',
        alt: 'British rose pedicure',
        title: 'British rose pedicure',
        rating: '4.83 (201K)',
        price: '₹759',
        originalPrice: null,
        slug: '/pedicure-service'
    },
    {
        id: 8,
        image: '/assets/Images/most-booked/decor-installation.jpg',
        alt: 'Decor installation',
        title: 'Decor installation',
        rating: '4.84 (108K)',
        price: '₹79',
        originalPrice: null,
        slug: '/decor-installation'
    },
    {
        id: 9,
        image: '/assets/Images/most-booked/automatic-top-load-machine-check-up.png',
        alt: 'Automatic top load machine check-up',
        title: 'Automatic machine check-up',
        rating: '4.77 (359K)',
        price: '₹199',
        originalPrice: null,
        slug: '/washing-machine-checkup'
    }
];

const MostBookedServices = () => {
    return (
        <section className="shared-carousel-section py-5 bg-light-soft">
            <div className="container custom-container">
                <h2 className="shared-carousel-title mb-4">Most booked services</h2>

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
                    {SERVICES.map((service, index) => (
                        <SwiperSlide key={service.id}>
                            <Link href={service.slug} className="text-decoration-none color-inherit">
                                <div className="shared-carousel-card most-booked-card hover-lift">
                                    <div className="img-wrapper safety-img-wrap" style={{ position: 'relative', height: '200px', width: '100%' }}>
                                        <Image 
                                            src={service.image} 
                                            alt={service.alt} 
                                            fill
                                            className="rounded-3 object-fit-cover"
                                            sizes="(max-width: 600px) 66vw, (max-width: 1024px) 40vw, 20vw"
                                            priority={index < 4}
                                        />
                                    </div>
                                    <div className="service-details">
                                        <h3 className="service-title">{service.title}</h3>
                                        <div className="service-rating">
                                            <Image 
                                                src="/assets/Images/star.png" 
                                                alt="star" 
                                                width={14} 
                                                height={14} 
                                                className="rating-star" 
                                            /> {service.rating}
                                        </div>
                                        <div className="service-price">
                                            {service.price}
                                            {service.originalPrice && <span className="original-price">{service.originalPrice}</span>}
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
