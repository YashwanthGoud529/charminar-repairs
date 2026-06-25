'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './VehicleWash.css';
import './CarouselShared.css';
import { toCDN } from '@/config/services';

const VEHICLE_WASH_SERVICES = [
    { id: 'wash-bike-eco', title: 'Doorstep Bike Eco Wash', price: 299, desc: 'Pressure jet wash, body cleaning, and dry wipe. Ideal for daily commuters.', image: '/images/bike-wash-eco.png', badge: 'Eco Wash' },
    { id: 'wash-bike-prem', title: 'Doorstep Bike Premium Wash', price: 499, desc: 'Active snow foam wash, tyre dressing, dashboard wax polish, and chain lubrication.', image: '/images/bike-wash-premium.png', badge: 'Foam & Polish' },
    { id: 'wash-car-std', title: 'Car Exterior Wash & Vacuum', price: 799, desc: 'Snow foam wash, tire dressing, interior high-suction vacuum, and floor mat cleaning.', image: '/images/car-wash-standard.png', badge: 'Best Seller' },
    { id: 'wash-car-suv', title: 'SUV Premium Wash & Polish', price: 1199, desc: 'Complete snow foam wash, interior vacuuming, dashboard polish, and alloy polish.', image: '/images/car-wash-suv.png', badge: 'Premium Care' },
    { id: 'meehelper-wheels-standard', title: 'STANDARD (Spadex Steam Wash)', price: 1499, desc: 'Full Exterior Steam Wash, total interiors steam wash, vacuuming and anti-bacterial treatment.', image: '/images/steam-wash-standard.png', badge: 'Spadex Steam' },
    { id: 'meehelper-wheels-premium', title: 'PREMIUM (Standard & Spadex Elite)', price: 2499, desc: 'Interiors Deep cleaning (4 layers), engine bay steam wash dressing, seats and roof steaming.', image: '/images/steam-wash-premium.png', badge: 'Spadex Elite' },
    { id: 'meehelper-wheels-pro', title: 'SPADEX PRO (Elite Package)', price: 3699, desc: 'Spadex Standard + Spadex Premium + Full Body Buffing & Polishing with machine.', image: '/images/steam-wash-pro.png', badge: 'Spadex Pro' }
].map(item => ({
    ...item,
    image: toCDN(item.image)
}));

const VehicleWash = ({ bgColor }) => {
    const bgClass = bgColor === 'gray' ? 'section-bg-gray' : 'section-bg-white';
    return (
        <section className={`shared-carousel-section vehicle-wash-section py-5 ${bgClass}`}>
            <div className="container custom-container">
                <div className="d-flex align-items-center mb-4 gap-3">
                    <h2 className="shared-carousel-title mb-0">MeeHelper Auto Care</h2>
                    <span className="section-status-pill" style={{ background: '#ff6b00', color: '#fff' }}>Doorstep Detailing</span>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    speed={1000}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        600: { slidesPerView: 2.2, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    className="vehicle-wash-swiper"
                >
                    {VEHICLE_WASH_SERVICES.map(service => (
                        <SwiperSlide key={service.id}>
                            <Link href={`/${service.id}/`} className="text-decoration-none">
                                <div className="shared-carousel-card most-booked-card hover-lift">
                                    <div className="img-wrapper safety-img-wrap" style={{ position: 'relative', height: '230px', marginBottom: '16px' }}>
                                        <div className="discount-tag" style={{ background: 'rgba(0, 0, 0, 0.75)', padding: '6px 12px', borderLeft: '4px solid #ff6b00', borderTopLeftRadius: '4px', borderBottomRightRadius: '4px' }}>
                                            <span className="get-instant" style={{ fontSize: '11px', color: '#ccc', textTransform: 'uppercase' }}>Starts at</span>
                                            <span className="percentage" style={{ fontSize: '18px', color: '#fff' }}>₹{service.price}</span>
                                            <span className="off-text" style={{ fontSize: '11px', color: '#ff6b00' }}>{service.badge || 'Wash'}</span>
                                        </div>

                                        <Image
                                            src={service.image}
                                            alt={`${service.title} in Hyderabad`}
                                            fill
                                            className="shadow-sm object-fit-cover"
                                            style={{ borderRadius: '4px' }}
                                            sizes="(max-width: 600px) 75vw, (max-width: 1024px) 40vw, 25vw"
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

export default VehicleWash;
