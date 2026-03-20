'use client';

import React from 'react';

const AdminHeader = ({ onMenuClick }) => {
    return (
        <header className="admin-top-bar py-3 px-4 shadow-sm border-bottom bg-white d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center gap-3">
                <button className="btn btn-warning d-lg-none px-3" onClick={onMenuClick}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className="d-flex align-items-center gap-2">
                    <img src="/favicon.ico" width="24" alt="logo" className="opacity-75" />
                    <div className="d-none d-lg-block text-dark fw-900 tracking-tighter">
                        <span className="text-orange">CHARMINAR</span> ADMIN
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center gap-3">
                <div className="text-end d-none d-sm-block">
                    <div className="fw-900 text-dark-blue fs-6" style={{lineHeight: 1}}>Super Admin</div>
                    <div className="small text-muted fw-bold mt-1">Global Operations Hub</div>
                </div>
                <div className="profile-shield-box bg-light d-flex align-items-center justify-content-center shadow-sm" style={{ width: 44, height: 44, borderRadius: 8 }}>
                    <img src="/images/shield_icon.png" alt="admin" width="30" height="30" />
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
