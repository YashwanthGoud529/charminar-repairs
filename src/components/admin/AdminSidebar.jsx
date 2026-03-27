'use client';

import React from 'react';
import Link from 'next/link';

const AdminSidebar = ({ activeTab, onTabChange, onLogout, isOpen, onClose }) => {
    return (
        <>
            <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
            <aside className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-logo p-4 d-flex align-items-center gap-3">
                    <div className=" shadow-sm">
                        <img src="/favicon.png" alt="logo" width="28" height="28" />
                    </div>
                    <div className="fw-extrabold text-white fs-4 tracking-tight">Charminar <span className="text-orange">Admin</span></div>
                </div>

                <div className="sidebar-divider"></div>
                <div className="sidebar-section-label">Menu</div>

                <nav className="sidebar-nav d-flex flex-column gap-2 px-2">
                    <div
                        className={`admin-nav-item w-100 ${activeTab === 'leads' ? 'active' : ''}`}
                        onClick={() => onTabChange('leads')}
                    >
                        <img src="/images/lightning_bolt_icon.png" alt="leads" width="30" height="30" />
                        <span className="fw-bold">Service Leads</span>
                    </div>
                    <div
                        className={`admin-nav-item w-100 ${activeTab === 'bookings' ? 'active' : ''}`}
                        onClick={() => onTabChange('bookings')}
                    >
                        <img src="/images/truck_icon.png" alt="bookings" width="30" height="30" />
                        <span className="fw-bold">Cart Orders</span>
                    </div>
                    <div
                        className={`admin-nav-item w-100 ${activeTab === 'services' ? 'active' : ''}`}
                        onClick={() => onTabChange('services')}
                    >
                        <img src="/images/gear_icon.svg" alt="services" width="30" height="30" />
                        <span className="fw-bold">Manage Services</span>
                    </div>
                    <div
                        className={`admin-nav-item w-100 ${activeTab === 'stats' ? 'active' : ''}`}
                        onClick={() => onTabChange('stats')}
                    >
                        <img src="/images/img_icons8_com_3d_fluency_94_line_chart_png.png" alt="stats" width="30" height="30" />
                        <span className="fw-bold">Page Counts</span>
                    </div>
                    <div
                        className={`admin-nav-item w-100 ${activeTab === 'partners' ? 'active' : ''}`}
                        onClick={() => onTabChange('partners')}
                    >
                        <img src="/images/img_icons8_com_3d_fluency_94_conference_png.png" alt="partners" width="30" height="30" />
                        <span className="fw-bold">Verified Partners</span>
                    </div>

                    <div className="sidebar-divider my-3 opacity-25"></div>
                    <div className="sidebar-section-label px-3 mb-3">Shortcuts</div>
                    <Link href="/" className="admin-nav-item w-100 text-decoration-none">
                        <img src="/images/home_icon_3d.png" alt="home" width="28" height="28" />
                        <span className="fw-bold">Go to Home</span>
                    </Link>
                </nav>

                <div className="sidebar-bottom">
                    <button onClick={onLogout} className="logout-btn">
                        <img src="/images/shutdown_icon.png" alt="logout" width="20" height="20" />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;
