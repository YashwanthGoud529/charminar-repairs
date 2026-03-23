'use client';

import React, { useState, useEffect } from 'react';
import '@/styles/careers.css';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

const CareersContent = ({ careersSchema }) => {
    const [formStatus, setFormStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        whatsapp: '',
        specialization: '',
        experience: '',
        location: '',
        upi: '',
        password: '' // For login later
    });

    const hyderabadAreas = [
        "Abids", "Adibatla", "Adikmet", "Afzal Gunj", "Alkapur Township", "Alwal", "Amberpet", "Ameerpet", "Anandbagh", "AS Rao Nagar", "Ashok Nagar", "Attapur",
        "Bachupally", "Bahadurpura", "Balanagar", "Balapur", "Bandlaguda Jagir", "Banjara Hills", "Barkas", "Barkatpura", "Basheerbagh", "Begumpet", "Bharat Nagar", "Boduppal", "Bolarum", "Bowenpally", "Budvel",
        "Chaderghat", "Chandanagar", "Chandrayangutta", "Charminar", "Chengicherla", "Cherlapally", "Chikkadpally",
        "Dabeerpura", "Darulshifa", "Domalguda", "Dulapally",
        "East Marredpally", "ECIL", "Engine Bowli", "Erragadda",
        "Falaknuma", "Fateh Darwaza", "Film Nagar", "Financial District",
        "Gachibowli", "Ghansi Bazaar", "Ghatkesar", "Golnaka", "Gowlipura",
        "Hafeezpet", "Hayathnagar", "Himayatnagar", "HITEC City", "Hussaini Alam",
        "Ibrahimpatnam", "IS Sadan",
        "Jahanuma", "Jeedimetla", "Jubilee Hills",
        "Kachiguda", "Kalapathar", "Kapra", "Karkhana", "Karwan", "Katedan", "Keesara", "King Koti", "Kokapet", "Kollur", "Kompally", "Kondapur", "Kothaguda", "Koti", "KPHB Colony", "Kukatpally", "Kushaiguda",
        "L.B. Nagar", "Laad Bazaar", "Lal Darwaza", "Langar Houz", "Lingampally", "Lothkunta",
        "Madina", "Madinaguda", "Madhapur", "Maheshwaram", "Mailardevpally", "Malakpet", "Malkajgiri", "Mallapur", "Manikonda", "Medchal", "Medipally", "Mehdipatnam", "MG Road", "Miyapur", "Moghalpura", "Mokila", "Moosapet", "Moula Ali", "Musheerabad",
        "Nacharam", "Nagole", "Nallagandla", "Nanakramguda", "Narayanguda", "Narsingi", "Neredmet", "Nizampet",
        "Old Alwal", "Old Bowenpally", "Osman Nagar",
        "Pahadi Shareef", "Panjagutta", "Paradise", "Pathergatti", "Patny", "Peerzadiguda", "Petbasheerabad", "Pocharam", "Pragathi Nagar", "Punjagutta", "Puppalaguda", "Puranapul",
        "Raidurg", "Rajendranagar", "Ram Nagar", "Ranigunj", "Rein Bazaar", "RTC X Roads",
        "Sainikpuri", "Saidabad", "Sanathnagar", "Santosh Nagar", "Safilguda", "Secunderabad", "Serilingampally", "Shah Ali Banda", "Shameerpet", "Shivarampally", "Somajiguda", "SR Nagar", "Srinagar Colony", "Suchitra", "Sultan Bazaar", "Sun City", "Suraram",
        "Tarnaka", "Tellapur", "Tolichowki", "Trimulgherry", "Troop Bazaar",
        "Uppal", "Uppuguda",
        "Vanasthalipuram", "Velimela", "Vidyanagar",
        "West Marredpally",
        "Yakutpura", "Yousufguda"
    ].sort();

    const jobs = [
        { title: 'Washing Machine Specialist', icon: 'fas fa-soap', color: '#03a9f4', category: 'Technical' },
        { title: 'Refrigerator Repair Pro', icon: 'fas fa-snowflake', color: '#2196f3', category: 'Technical' },
        { title: 'AC Technical Expert', icon: 'fas fa-wind', color: '#00bcd4', category: 'Technical' },
        { title: 'TV Repair Specialist', icon: 'fas fa-tv', color: '#607d8b', category: 'Technical' },
        { title: 'Electrical Wiring Expert', icon: 'fas fa-bolt', color: '#ffc107', category: 'Technical' },
        { title: 'Microwave/Oven Expert', icon: 'fas fa-cloud-sun', color: '#ff5722', category: 'Technical' },
        { title: 'Water Purifier Specialist', icon: 'fas fa-faucet-drip', color: '#009688', category: 'Technical' },
        { title: 'Dishwasher Technician', icon: 'fas fa-utensils', color: '#3f51b5', category: 'Technical' },
        { title: 'Kitchen Chimney Pro', icon: 'fas fa-fan', color: '#795548', category: 'Technical' },
        { title: 'Geyser & Heater Expert', icon: 'fas fa-hot-tub-person', color: '#f44336', category: 'Technical' },
        { title: 'Laptop & IT Support', icon: 'fas fa-laptop', color: '#673ab7', category: 'Technical' },
        { title: 'Solar Water Heater Tech', icon: 'fas fa-sun', color: '#ff9800', category: 'Technical' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        try {
            await addDoc(collection(db, 'partners'), {
                ...formData,
                date: new Date().toLocaleString(),
                createdAt: serverTimestamp(),
                status: 'Applied',
                isVerified: false,
                rating: 5.0,
                jobsCompleted: 0
            });

            setFormStatus('');
            toast.success("Registration successful! You can now login to your partner portal.");
            setFormData({ name: '', phone: '', whatsapp: '', specialization: '', experience: '', location: '', upi: '', password: '' });
        } catch (error) {
            console.error('Error submitting application:', error);
            setFormStatus('');
            toast.error("Failed to submit application.");
        }
    };
    const isSubmitting = formStatus === 'submitting';

    return (
        <main className="careers-page-v3 bg-light min-vh-100">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
            />
            
            <PageHero
                title="Empower Your Service Business"
                subtitle="Join Hyderabad's most transparent and reliable repair network. Empowering 500+ local experts with steady high-ticket bookings and seamless digital management."
                breadcrumb="Partner Program"
            />

            <section className="careers-main py-5">
                <div className="container px-4 px-lg-0">
                    {/* Top Stats/Status bar */}
                    <div className="bg-white p-4 rounded-4 shadow-sm border mb-5 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between gap-4">
                        <div className="d-flex align-items-center gap-4">
                            <div className="p-3 bg-primary bg-opacity-10 rounded-circle"><i className="fas fa-users text-primary fs-4"></i></div>
                            <div>
                                <h6 className="fw-bold mb-0">500+ Active Partners</h6>
                                <p className="text-muted small mb-0">Across Hyderabad & Secunderabad</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-4">
                            <div className="p-3 bg-success bg-opacity-10 rounded-circle"><i className="fas fa-wallet text-success fs-4"></i></div>
                            <div>
                                <h6 className="fw-bold mb-0">₹45,000+ Avg. Earnings</h6>
                                <p className="text-muted small mb-0">Top technicians earn significantly more</p>
                            </div>
                        </div>
                        <Link href="/partner/login" className="btn btn-outline-dark fw-bold px-4 py-3" style={{ borderRadius: '12px' }}>
                            <i className="fas fa-user-circle me-2"></i> Partner Login
                        </Link>
                    </div>

                    <div className="row g-5">
                        <div className="col-xl-7">
                                <div className="section-head mb-5">
                                    <h2 className="display-6 fw-bold text-dark">Why <span className="text-primary">Join Us?</span></h2>
                                <p className="text-muted fs-5">We provide a high-growth ecosystem for professional technicians.</p>
                            </div>

                            <div className="row g-4 mb-5">
                                {[
                                    { t: 'Zero Marketing Spend', d: 'Stop paying for expensive ads. We handle the 50,000+ monthly traffic.', i: 'fas fa-chart-line', c: 'bg-primary' },
                                    { t: 'Instant Digital Payments', d: 'Receive settlements within 24-48 hours. No manual follow-ups needed.', i: 'fas fa-wallet', c: 'bg-success' },
                                    { t: 'Flexible Area Control', d: 'Choose your preferred working radius. No mandatory travel.', i: 'fas fa-map-marker-alt', c: 'bg-warning' },
                                    { t: 'Training & Support', d: 'Access deep-tech training in modern appliances and 24/7 support.', i: 'fas fa-graduation-cap', c: 'bg-danger' }
                                ].map((b, idx) => (
                                    <div key={idx} className="col-md-6">
                                        <div className="bg-white p-4 p-lg-5 rounded-4 border h-100 shadow-sm hover-translate transition">
                                            <div className={`${b.c} bg-opacity-10 p-4 d-inline-block rounded-circle mb-4`}>
                                                <i className={`${b.i} text-${b.c.split('-')[1]} fs-3`}></i>
                                            </div>
                                            <h4 className="fw-bold mb-3">{b.t}</h4>
                                            <p className="text-muted fs-6 mb-0">{b.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-dark text-white p-5 rounded-4 shadow-lg position-relative overflow-hidden mb-5 gradient-dark-card border border-warning border-opacity-25">
                                <div className="z-2 position-relative">
                                    <h3 className="fw-bold mb-3 d-flex align-items-center gap-3">
                                        <div className="bg-warning bg-opacity-10 p-3 rounded-circle">
                                            <i className="fas fa-rocket text-warning"></i>
                                        </div>
                                        Partner Growth Track
                                    </h3>
                                    <p className="text-white-50 mb-4 fs-5 max-w-lg">Become a "Gold-Certified" partner and unlock early access to luxury appliance bookings.</p>
                                    <div className="d-flex flex-wrap gap-4">
                                        <div className="badge bg-white bg-opacity-10 py-3 px-4 rounded-pill d-flex align-items-center gap-2 fs-6"><i className="fas fa-check-circle text-success font-size-medium"></i> Verified Profile</div>
                                        <div className="badge bg-white bg-opacity-10 py-3 px-4 rounded-pill d-flex align-items-center gap-2 fs-6"><i className="fas fa-check-circle text-success font-size-medium"></i> Performance Bonus</div>
                                        <div className="badge bg-white bg-opacity-10 py-3 px-4 rounded-pill d-flex align-items-center gap-2 fs-6"><i className="fas fa-check-circle text-success font-size-medium"></i> Gear Support</div>
                                    </div>
                                </div>
                                <div className="position-absolute top-50 end-0 translate-middle-y opacity-10 pe-5 d-none d-lg-block">
                                    <i className="fas fa-handshake fa-8x"></i>
                                </div>
                            </div>

                            <h4 className="fw-bold mb-4">Required Expertise</h4>
                            <div className="row g-3">
                                {jobs.map((job, idx) => (
                                    <div key={idx} className="col-6 col-md-4">
                                        <div className="bg-white p-3 border rounded-3 shadow-sm d-flex align-items-center gap-3 hover-shadow transition h-100">
                                            <div className="p-2 rounded-2 d-flex align-items-center justify-content-center" style={{ background: `${job.color}15`, color: job.color, width: 40, height: 40 }}>
                                                <i className={job.icon}></i>
                                            </div>
                                            <span className="small fw-bold text-dark">{job.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-xl-5">
                            <div className="sticky-top" style={{ top: '120px' }} id="apply-form">
                                <div className="application-glass-card bg-white p-4 p-lg-5 rounded-4 shadow-2xl border-0">
                                    <div className="text-center mb-5">
                                        <div className="d-inline-flex bg-primary bg-opacity-10 p-4 rounded-circle mb-4">
                                            <i className="fas fa-users-cog fs-1 text-primary"></i>
                                        </div>
                                        <h2 className="fw-bold text-dark mb-2">Partner Onboarding</h2>
                                        <p className="text-muted fs-5">Start your professional growth today.</p>
                                    </div>
                                        <div className="form-floating mb-3">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="userName" 
                                                placeholder="Name" 
                                                required 
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            />
                                            <label htmlFor="userName">Full Name</label>
                                        </div>
                                        <div className="row g-2 mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input 
                                                        type="tel" 
                                                        className="form-control" 
                                                        id="userPhone" 
                                                        placeholder="800..." 
                                                        required 
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                    />
                                                    <label htmlFor="userPhone">Mobile No.</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input 
                                                        type="tel" 
                                                        className="form-control" 
                                                        id="userWhatsapp" 
                                                        placeholder="800..." 
                                                        value={formData.whatsapp}
                                                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                                                    />
                                                    <label htmlFor="userWhatsapp">WhatsApp No.</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <select 
                                                className="form-select" 
                                                id="specialization" 
                                                required
                                                value={formData.specialization}
                                                onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                                            >
                                                <option value="">Select Primary Specialty</option>
                                                <option value="Washing Machine">Washing Machine Specialist</option>
                                                <option value="Fridge">Refrigerator Repair Pro</option>
                                                <option value="AC">AC Technical Expert</option>
                                                <option value="TV">TV Repair Specialist</option>
                                                <option value="Electrical">House Wiring Expert</option>
                                                <option value="Microwave">Microwave/Oven Expert</option>
                                                <option value="Water Purifier">Water Purifier Specialist</option>
                                                <option value="Dishwasher">Dishwasher Technical</option>
                                                <option value="Other">Other Specialist</option>
                                            </select>
                                            <label htmlFor="specialization">Category Expertise</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="userArea" 
                                                list="area-list"
                                                placeholder="Select Home Area" 
                                                required 
                                                value={formData.location}
                                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                                            />
                                            <label htmlFor="userArea">Operation Area (Hyderabad)</label>
                                            <datalist id="area-list">
                                                {hyderabadAreas.map((area, i) => (
                                                    <option key={i} value={area} />
                                                ))}
                                            </datalist>
                                        </div>

                                        <div className="row g-2 mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <select 
                                                        className="form-select" 
                                                        id="exp" 
                                                        required 
                                                        value={formData.experience}
                                                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                                                    >
                                                        <option value="">Exp Level</option>
                                                        <option value="1-2 Years">1-2 Years</option>
                                                        <option value="3-5 Years">3-5 Years</option>
                                                        <option value="5-10 Years">5-10 Years</option>
                                                        <option value="10+ Years">Master</option>
                                                    </select>
                                                    <label htmlFor="exp">Experience</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="userUpi" 
                                                        placeholder="UPI ID" 
                                                        value={formData.upi}
                                                        onChange={(e) => setFormData({...formData, upi: e.target.value})}
                                                    />
                                                    <label htmlFor="userUpi">UPI ID (Payments)</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-floating mb-4">
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                id="userPass" 
                                                placeholder="Password" 
                                                required 
                                                value={formData.password}
                                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                            />
                                            <label htmlFor="userPass">Create Password (For Login)</label>
                                        </div>

                                        <button type="submit" className="btn btn-primary w-100 py-3 fw-bold shadow-lg" disabled={isSubmitting} style={{ borderRadius: '12px', fontSize: '16px' }}>
                                            {isSubmitting ? (
                                                <span className="d-flex align-items-center justify-content-center gap-2 font-size-medium"><i className="fas fa-spinner fa-spin"></i> Registering...</span>
                                            ) : 'REGISTER AS PARTNER'}
                                        </button>
                                        <p className="text-center text-muted border-top pt-3 small mt-3 mb-0">Join 500+ professionals earning ₹45k-₹80k monthly.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CareersContent;
