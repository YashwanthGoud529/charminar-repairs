'use client';

import React, { useEffect, useState } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onClose, 300); // Wait for fade out animation
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    const bgClass = type === 'success' ? 'bg-success' : type === 'error' ? 'bg-danger' : 'bg-warning';

    const Icon = () => {
        if (type === 'success') {
            return (
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            );
        }
        if (type === 'error') {
            return (
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            );
        }
        return (
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
        );
    };

    return (
        <div className={`toast-premium fixed-top mt-4 ms-auto me-4 p-3 text-white shadow-lg animate-slide-up d-flex align-items-center gap-3 ${bgClass}`} style={{
            borderRadius: 8,
            width: 'fit-content',
            minWidth: 300,
            zIndex: 9999,
            right: 16,
            left: 'auto'
        }}>
            <Icon />
            <div className="flex-grow-1 fw-bold">{message}</div>
            <button className="btn-close btn-close-white" onClick={() => setVisible(false)}></button>
            <style jsx>{`
                .toast-premium {
                    animation: slideIn 0.3s ease-out;
                }
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Toast;
