'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';

const ALL_SERVICES = [
    { id: 1, image: '/assets/Images/all-services/refrigerator_repair.png', title: 'Refrigerator', slug: '/refrigerator-repairing' },
    { id: 2, image: '/assets/Images/all-services/washing_machine_repair.png', title: 'Washing Machine', slug: '/washing-machine-repairing' },
    { id: 3, image: '/assets/Images/all-services/ac_repair_professional.png', title: 'Air Conditioner', slug: '/ac-repairing' },
    { id: 4, image: '/assets/Images/all-services/tv_repair_professional.png', title: 'Television', slug: '/television-repairing' },
    { id: 5, image: '/assets/Images/all-services/microwave_repair_professional.png', title: 'Microwave Oven', slug: '/microwave-repairing' },
    { id: 6, image: '/assets/Images/all-services/ro_purifier_repair_professional.png', title: 'Water Purifier (RO)', slug: '/water-purifier-servicing' },
    { id: 7, image: '/assets/Images/all-services/geyser_repair_professional.png', title: 'Geyser & Water Heater', slug: '/geyser-repairing' },
    { id: 8, image: '/images/home-appliances-technician-installing-a-stove.jpg', title: 'Gas Stove & Hob', slug: '/gas-stove-repairing' },
    { id: 9, image: '/images/istock_a_2248380132.jpg', title: 'Kitchen Chimney', slug: '/kitchen-chimney-servicing' },
    { id: 10, image: '/images/close-up-of-handyman-in-special-clothing-repairing-dishwasher-in-modern-kitchen.jpg', title: 'Dishwasher', slug: '/dishwasher-repairing' },
    { id: 11, image: '/images/repairman-checking-professional-coffee-maker-in-cafe.jpg', title: 'Coffee Machine', slug: '/coffee-machine-repairing' },
    { id: 12, image: '/images/auto-repairman-talking-on-the-phone-while-using-laptop-in-a-workshop-.jpg', title: 'Laptop & Desktop', slug: '/laptop-repairing' }
];

const AllServicesList = () => {
    return (
        <section className="shared-carousel-section" style={{ paddingTop: '50px', paddingBottom: '70px', backgroundColor: '#f8f8f8' }}>
            <div className="container">
                <h2 className="shared-carousel-title" style={{ marginBottom: '32px' }}>Explore Our Services</h2>
                
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={16}
                    slidesPerView={1.5}
                    breakpoints={{
                        600: { slidesPerView: 2.5, spaceBetween: 20 },
                        1024: { slidesPerView: 4.5, spaceBetween: 20 },
                    }}
                    style={{ padding: '10px 0' }}
                >
                    {ALL_SERVICES.map(service => (
                        <SwiperSlide key={service.id}>
                            <Link href={service.slug} style={{ textDecoration: 'none' }}>
                                <div className="shared-carousel-card most-booked-card" style={{ cursor: 'pointer' }}>
                                    <div className="img-wrapper" style={{ marginBottom: '16px' }}>
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            loading="lazy" 
                                            style={{ 
                                                borderRadius: '8px', 
                                                width: '100%', 
                                                aspectRatio: '1 / 1', 
                                                objectFit: 'cover',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
                                            }} 
                                            onError={(e) => {
                                                e.target.style.backgroundColor = '#f3f4f6';
                                                e.target.style.padding = '20px';
                                                e.target.src = '/assets/Images/appliance/icons/ac.jpg'; 
                                            }}
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

export default AllServicesList;
