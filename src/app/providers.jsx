'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#ff6b00"
                options={{ showSpinner: false }}
                shallowRouting
            />
            <Toaster 
                position="top-right"
                toastOptions={{
                    duration: 2000,
                    style: {
                        background: '#333',
                        color: '#fff',
                        fontWeight: '600',
                        padding: '16px',
                        borderRadius: '8px'
                    },
                    success: {
                        style: {
                            background: '#10b981',
                        },
                    },
                    error: {
                        style: {
                            background: '#ef4444',
                        },
                    },
                }} 
            />
        </>
    );
};

export default Providers;
