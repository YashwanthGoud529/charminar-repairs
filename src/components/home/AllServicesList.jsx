'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                    {ALL_SERVICES.map(service => (
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
