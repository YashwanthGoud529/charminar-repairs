'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';

import { toCDN } from '@/config/services';

const PEST_SERVICES = [
    { id: 1, image: '/assets/Images/pest-control/mosquitos-controls.jpeg', title: 'Mosquitoes Control', slug: '/mosquito-control' },
    { id: 2, image: '/assets/Images/pest-control/termite-control.jpeg', title: 'Termite Control', slug: '/termite-control' },
    { id: 3, image: '/assets/Images/pest-control/woodborder-control.jpeg', title: 'Woodborer Control', slug: '/woodborer-control' },
    { id: 4, image: '/assets/Images/pest-control/commercial-pest-control.jpeg', title: 'Commercial Pest Control', slug: '/commercial-pest-control' },
    { id: 5, image: '/assets/Images/pest-control/bed-bugs.jpeg', title: 'Bed Bugs Control', slug: '/bed-bugs-control' },
    { id: 6, image: '/assets/Images/pest-control/cock-roch-control.jpeg', title: 'Cockroach Control', slug: '/cockroach-control' }
].map(service => ({ ...service, image: toCDN(service.image) }));

const PestControl = ({ bgColor }) => {
    const bgClass = bgColor === 'gray' ? 'section-bg-gray' : 'section-bg-white';
    return (
        <section className={`shared-carousel-section w-100 ${bgClass}`} style={{ paddingTop: '50px', paddingBottom: '70px' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', gap: '16px' }}>
                    <Link href="/pest-control-services/" className="text-decoration-none color-inherit">
                        <h2 className="shared-carousel-title" style={{ marginBottom: 0, cursor: 'pointer' }}>Pest Control</h2>
                    </Link>
                    <span style={{
                        backgroundColor: '#98f5a6',
                        color: '#111',
                        padding: '4px 16px',
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: '600'
                    }}>Licensed Company</span>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    speed={1000}
                    spaceBetween={16}
                    slidesPerView={1.5}
                    breakpoints={{
                        600: { slidesPerView: 2.5, spaceBetween: 20 },
                        1024: { slidesPerView: 4.5, spaceBetween: 20 },
                    }}
                    style={{ padding: '10px 0' }}
                >
                    {PEST_SERVICES.map(service => (
                        <SwiperSlide key={service.id}>
                            <Link href={service.slug} style={{ textDecoration: 'none' }}>
                                <div className="shared-carousel-card most-booked-card" style={{ cursor: 'pointer' }}>
                                    <div className="img-wrapper" style={{ marginBottom: '16px', position: 'relative', height: '230px' }}>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            style={{
                                                borderRadius: '4px',
                                                objectFit: 'cover',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
                                            }}
                                            sizes="(max-width: 600px) 66vw, (max-width: 1024px) 40vw, 20vw"
                                        />
                                    </div>
                                    <h3 className="service-title" style={{ fontSize: '15px', color: '#333', textAlign: 'center', fontWeight: '500' }}>{service.title}</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PestControl;
