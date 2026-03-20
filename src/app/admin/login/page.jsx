'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/styles/admin.css';
import toast from 'react-hot-toast';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ mobile: '', password: '' });
    const router = useRouter();

    useEffect(() => {
        const session = localStorage.getItem('admin_session');
        if (session === 'active') {
            router.push('/admin');
        }
    }, [router]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (credentials.mobile === '8008615049' && credentials.password === '9959068912') {
            localStorage.setItem('admin_session', 'active');
            toast.success('Login Successful! Welcome to Admin Portal.');
            router.push('/admin');
        } else {
            toast.error('Invalid Credentials. Please try again.');
        }
    };

    return (
        <main className="admin-login-container py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="login-card p-5 shadow-lg border rounded bg-white" style={{ borderRadius: '20px' }}>
                            <h2 className="fw-bold text-center mb-4">Admin <span style={{color: '#ff6b00'}}>Portal</span></h2>
                            <p className="text-center text-muted mb-4">Secure Login Required</p>
                            
                            <form onSubmit={handleLogin}>
                                <div className="form-group mb-3">
                                    <label className="small fw-bold text-uppercase text-muted mb-2">Mobile Number</label>
                                    <input 
                                        type="tel" 
                                        className="form-control p-3 border-2" 
                                        placeholder="Enter Mobile" 
                                        required 
                                        value={credentials.mobile}
                                        onChange={(e) => setCredentials({...credentials, mobile: e.target.value})}
                                        style={{ borderRadius: '12px' }}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label className="small fw-bold text-uppercase text-muted mb-2">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control p-3 border-2" 
                                        placeholder="Enter Password" 
                                        required 
                                        value={credentials.password}
                                        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                                        style={{ borderRadius: '12px' }}
                                    />
                                </div>
                                <button type="submit" className="btn btn-orange w-100 py-3 fw-bold text-uppercase shadow mt-2">
                                    Login Securely
                                </button>
                                
                                <div className="text-center mt-4">
                                    <Link href="/" className="text-decoration-none text-muted small fw-bold d-flex align-items-center justify-content-center gap-2">
                                        <img src="/images/home_icon.png" alt="home" width="18" height="18" />
                                        Back to Website
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminLogin;
