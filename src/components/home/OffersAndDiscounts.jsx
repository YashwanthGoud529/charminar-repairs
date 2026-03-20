'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';

const OFFERS = [
    { id: 1, image: '/images/offer_1.jpg', alt: 'Offer 1' },
    { id: 2, image: '/images/offer_2.jpg', alt: 'Offer 2' },
    { id: 3, image: '/images/offer_3.jpg', alt: 'Offer 3' },
    { id: 4, image: '/images/offer_4.jpg', alt: 'Offer 4' },
];

const OffersAndDiscounts = () => {
    return (
        <section className="shared-carousel-section" style={{ paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#f8f8f8' }}>
            <div className="container">
                <h2 className="shared-carousel-title">Offers & discounts</h2>
                
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
                    {OFFERS.map(offer => (
                        <SwiperSlide key={offer.id}>
                            <div className="shared-carousel-card default-card">
                                <img src={offer.image} alt={offer.alt} loading="lazy" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OffersAndDiscounts;
