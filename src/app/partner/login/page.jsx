'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/styles/admin.css'; // Reusing admin styles for consistency
import toast from 'react-hot-toast';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const PartnerLogin = () => {
    const [credentials, setCredentials] = useState({ phone: '', password: '' });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const session = localStorage.getItem('partner_session');
        if (session) {
            router.push('/partner/dashboard');
        }
    }, [router]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const q = query(
                collection(db, 'partners'),
                where('phone', '==', credentials.phone),
                where('password', '==', credentials.password)
            );

            const snapshot = await getDocs(q);

            if (!snapshot.empty) {
                const partnerData = { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
                localStorage.setItem('partner_session', JSON.stringify(partnerData));
                toast.success(`Welcome back, ${partnerData.name}!`);
                router.push('/partner/dashboard');
            } else {
                toast.error('Invalid phone number or password.');
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="admin-login-container py-5 bg-light min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="login-card p-5 shadow-lg border-0 rounded-4 bg-white">
                            <div className="text-center mb-4">
                                <img src="/images/charminar-repairs-logo.jpeg" alt="Logo" width="150" className="mb-4" />
                                <h2 className="fw-bold">Partner <span className="text-primary">Portal</span></h2>
                                <p className="text-muted">Manage your profile & service bookings</p>
                            </div>

                            <form onSubmit={handleLogin}>
                                <div className="form-group mb-3">
                                    <label className="small fw-bold text-uppercase text-muted mb-2">Registered Phone</label>
                                    <input
                                        type="tel"
                                        className="form-control p-3 border-2"
                                        placeholder="Enter Phone Number"
                                        required
                                        value={credentials.phone}
                                        onChange={(e) => setCredentials({ ...credentials, phone: e.target.value })}
                                        style={{ borderRadius: '12px' }}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label className="small fw-bold text-uppercase text-muted mb-2">Account Password</label>
                                    <input
                                        type="password"
                                        className="form-control p-3 border-2"
                                        placeholder="Enter Password"
                                        required
                                        value={credentials.password}
                                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                        style={{ borderRadius: '12px' }}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-3 fw-bold text-uppercase shadow-lg border-0" disabled={loading} style={{ borderRadius: '12px' }}>
                                    {loading ? 'Verifying...' : 'Login to Dashboard'}
                                </button>

                                <div className="text-center mt-4">
                                    <p className="small text-muted mb-2">New Partner? <Link href="/careers" className="text-primary fw-bold">Register Now</Link></p>
                                    <Link href="/" className="text-decoration-none text-muted small fw-bold d-flex align-items-center justify-content-center gap-2">
                                        <i className="fas fa-arrow-left"></i> Back to Home
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

export default PartnerLogin;
