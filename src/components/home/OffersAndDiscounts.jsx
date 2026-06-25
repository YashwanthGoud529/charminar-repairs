'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';
import { toCDN } from '@/config/services';

const OFFERS = [
    { id: 1, image: '/images/offer_1.jpg', link: '/contact-us' },
    { id: 2, image: '/images/offer_2.jpg', link: '/ac-repairing/' },
    { id: 3, image: '/images/offer_3.jpg', link: '/about-us' },
    { id: 4, image: '/images/offer_4.jpg', link: '/pricing' },
].map(o => ({ ...o, image: toCDN(o.image) }));

const OffersAndDiscounts = () => {
    return (
        <section style={{ backgroundColor: '#f4f6fb', padding: '30px 0' }}>
            <div className="container">

                <Swiper
                    className="offers-swiper-v2"
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    speed={700}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        576: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >
                    {OFFERS.map(offer => (
                        <SwiperSlide key={offer.id}>
                            <Link href={offer.link} style={{ textDecoration: 'none', display: 'block' }}>
                                <div className="offer-card-v2">
                                    <div
                                        className="offer-bg"
                                        style={{ backgroundImage: `url(${offer.image})` }}
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .offers-swiper-v2 {
                    padding: 6px 4px 14px !important;
                    overflow: visible !important;
                }
                .offer-card-v2 {
                    position: relative;
                    height: 170px;
                    border-radius: 4px;
                    overflow: hidden;
                    cursor: pointer;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.10);
                    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s;
                }
                .offer-card-v2:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 14px 36px rgba(0,0,0,0.18);
                }
                .offer-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.5s ease;
                }
                .offer-card-v2:hover .offer-bg {
                    transform: scale(1.06);
                }
                .offers-swiper-v2 .swiper-button-next,
                .offers-swiper-v2 .swiper-button-prev {
                    top: 46% !important;
                }
            `}</style>
        </section>
    );
};

export default OffersAndDiscounts;
