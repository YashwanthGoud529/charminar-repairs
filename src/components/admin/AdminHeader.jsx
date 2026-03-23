'use client';

import React from 'react';

const AdminHeader = ({ onMenuClick }) => {
    // --- SVG Menu Bars Icon ---
    const BarsIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
    );

    return (
        <header className="admin-top-bar py-3 px-4 shadow-sm border-bottom bg-white d-flex justify-content-between align-items-center mb-4 sticky-top">
            <div className="d-flex align-items-center gap-3">
                <button className="btn btn-warning d-lg-none px-3 d-flex align-items-center justify-content-center" onClick={onMenuClick} style={{ height: '40px' }}>
                    <BarsIcon />
                </button>
                <div className="d-flex align-items-center gap-2">
                    <img src="/favicon.ico" width="24" height="24" alt="logo" className="opacity-75" />
                    <div className="d-none d-lg-block text-dark fw-900 tracking-tighter font-outfit">
                        <span style={{ color: '#ff6b00' }}>CHARMINAR</span> ADMIN
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center gap-3">
                <div className="text-end d-none d-sm-block">
                    <div className="fw-900 text-dark font-outfit" style={{ lineHeight: 1 }}>Super Admin</div>
                    <div className="text-muted fw-bold mt-1 font-inter" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Operations Hub</div>
                </div>
                <div className="profile-shield-box bg-light d-flex align-items-center justify-content-center shadow-sm" style={{ width: 44, height: 44, borderRadius: 10 }}>
                    <img src="/images/shield_icon.png" alt="admin" width="30" height="30" />
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
