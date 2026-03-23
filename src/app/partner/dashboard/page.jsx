'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/styles/admin.css';
import toast from 'react-hot-toast';
import { db } from '@/lib/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

const PartnerDashboard = () => {
    const [partner, setPartner] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        specialization: '',
        experience: '',
        location: '',
        upi: '',
        password: ''
    });
    const router = useRouter();

    useEffect(() => {
        const session = localStorage.getItem('partner_session');
        if (!session) {
            router.push('/partner/login');
        } else {
            const data = JSON.parse(session);
            loadPartnerData(data.id);
        }
    }, [router]);

    const loadPartnerData = async (partnerId) => {
        try {
            const docRef = doc(db, 'partners', partnerId);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
                const fullData = { id: snapshot.id, ...snapshot.data() };
                setPartner(fullData);
                setFormData({
                    name: fullData.name || '',
                    whatsapp: fullData.whatsapp || '',
                    specialization: fullData.specialization || '',
                    experience: fullData.experience || '',
                    location: fullData.location || '',
                    upi: fullData.upi || '',
                    password: fullData.password || ''
                });
            }
        } catch (error) {
            console.error('Error loading partner data:', error);
            toast.error('Failed to load profile details.');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const docRef = doc(db, 'partners', partner.id);
            await updateDoc(docRef, {
                ...formData,
                updatedAt: new Date()
            });
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error('Update error:', error);
            toast.error("Failed to update profile.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('partner_session');
        router.push('/partner/login');
    };

    if (loading) return <div className="d-flex justify-content-center align-items-center vh-100"><div className="spinner-border text-primary"></div></div>;

    return (
        <main className="partner-dashboard bg-light min-vh-100">
            {/* Header */}
            <header className="bg-white shadow-sm py-3 px-4 sticky-top">
                <div className="container d-flex justify-content-between align-items-center">
                    <img src="/images/charminar-repairs-logo.png" alt="Logo" width="120" />
                    <div className="d-flex align-items-center gap-3">
                        <span className="small text-muted d-none d-md-block">Welcome, <strong>{partner?.name}</strong></span>
                        <button onClick={handleLogout} className="btn btn-outline-danger btn-sm rounded-pill px-3">Logout</button>
                    </div>
                </div>
            </header>

            <div className="container py-5">
                <div className="row g-4">
                    {/* Stats Sidebar */}
                    <div className="col-lg-4">
                        <div className="card border-0 rounded-4 shadow-sm mb-4">
                            <div className="card-body p-4 text-center">
                                <div className="profile-img mb-3">
                                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold fs-2 shadow-sm" style={{ width: 80, height: 80 }}>
                                        {formData.name[0]}
                                    </div>
                                </div>
                                <h4 className="fw-bold mb-1">{formData.name}</h4>
                                <p className="text-muted small mb-3">{formData.specialization}</p>
                                <div className={`badge ${partner?.isVerified ? 'bg-success' : 'bg-warning'} px-3 py-2 rounded-pill shadow-sm mb-3`}>
                                    {partner?.isVerified ? <><i className="fas fa-check-circle me-1"></i> Verified Partner</> : <><i className="fas fa-clock me-1"></i> Under Verification</>}
                                </div>
                                <div className="row g-2 mt-2">
                                    <div className="col-6">
                                        <div className="p-3 bg-light rounded-3 text-center">
                                            <h6 className="fw-bold text-dark-blue mb-0">{partner?.rating || '5.0'}</h6>
                                            <p className="text-muted mb-0 small">Rating</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-3 bg-light rounded-3 text-center">
                                            <h6 className="fw-bold text-dark-blue mb-0">{partner?.jobsCompleted || '0'}</h6>
                                            <p className="text-muted mb-0 small">Jobs Done</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary text-white p-4 rounded-4 shadow-lg position-relative overflow-hidden mb-4">
                            <h5 className="fw-bold">Partner Tip</h5>
                            <p className="small mb-0 opacity-75">Keep your Operation Area updated to receive bookings closest to you.</p>
                            <i className="fas fa-lightbulb position-absolute top-10 end-0 fs-1 opacity-10 pe-3 pt-3"></i>
                        </div>
                    </div>

                    {/* Main Content Form */}
                    <div className="col-lg-8">
                        <div className="card border-0 rounded-4 shadow-sm">
                            <div className="card-header bg-white border-0 p-4 pb-0">
                                <h4 className="fw-bold text-dark m-0">My Partner Profile</h4>
                                <p className="text-muted small">Update your technical details and payment info</p>
                            </div>
                            <div className="card-body p-4 pt-4">
                                <form onSubmit={handleUpdate}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="fw-bold text-muted small text-uppercase mb-2 d-flex align-items-center gap-2"><i className="fas fa-user-circle"></i> Full Name</label>
                                                <input type="text" className="form-control p-3 border-2" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required style={{borderRadius: 12}} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="fw-bold text-muted small text-uppercase mb-2 d-flex align-items-center gap-2"><i className="fab fa-whatsapp"></i> WhatsApp Number</label>
                                                <input type="tel" className="form-control p-3 border-2" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} style={{borderRadius: 12}} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="fw-bold text-muted small text-uppercase mb-2 d-flex align-items-center gap-2"><i className="fas fa-tools"></i> Primary Expertise</label>
                                                <select className="form-select p-3 border-2" value={formData.specialization} onChange={(e) => setFormData({...formData, specialization: e.target.value})} required style={{borderRadius: 12}}>
                                                    <option value="Washing Machine">Washing Machine</option>
                                                    <option value="Fridge">Refrigerator</option>
                                                    <option value="AC">Air Conditioner</option>
                                                    <option value="TV">Television</option>
                                                    <option value="Electrical">Electrical</option>
                                                    <option value="Other">Other Specialist</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="fw-bold text-muted small text-uppercase mb-2 d-flex align-items-center gap-2"><i className="fas fa-map-marker-alt"></i> Home Operation Area</label>
                                                <input type="text" className="form-control p-3 border-2" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} required style={{borderRadius: 12}} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="fw-bold text-muted small text-uppercase mb-2 d-flex align-items-center gap-2"><i className="fas fa-wallet"></i> UPI ID (For Earnings)</label>
                                                <input type="text" className="form-control p-3 border-2" value={formData.upi} onChange={(e) => setFormData({...formData, upi: e.target.value})} style={{borderRadius: 12}} placeholder="e.g. mobile@ybl" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="fw-bold text-muted small text-uppercase mb-2 d-flex align-items-center gap-2"><i className="fas fa-lock"></i> Account Password</label>
                                                <input type="text" className="form-control p-3 border-2" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required style={{borderRadius: 12}} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-end mt-4">
                                        <button type="submit" className="btn btn-primary fw-bold px-5 py-3 shadow-lg border-0" disabled={isSaving} style={{ borderRadius: '12px' }}>
                                            {isSaving ? <><i className="fas fa-spinner fa-spin me-2"></i> Saving Updates...</> : 'Save Profile Details'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PartnerDashboard;
