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
    const iconClass = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-exclamation-triangle';

    return (
        <div className={`toast-premium fixed-top mt-4 ms-auto me-4 p-3 text-white shadow-lg animate-slide-up d-flex align-items-center gap-3 ${bgClass}`} style={{
            borderRadius: 8,
            width: 'fit-content',
            minWidth: 300,
            zIndex: 9999,
            right: 0,
            left: 'auto'
        }}>
            <i className={`fas ${iconClass} fs-4`}></i>
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
