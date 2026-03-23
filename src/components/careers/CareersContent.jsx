'use client';

import React, { useState } from 'react';
import '@/styles/careers.css';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

// --- SVG Icons Components ---
const UsersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

const WalletIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/>
    </svg>
);

const UserCircleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
    </svg>
);

const ChartLineIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
);

const ShieldCheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-success">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 11 12 14 15 9"/>
    </svg>
);

const RocketIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-warning">
        <path d="M13.13 22.19L11.5 18.36L9.87 22.19L12 21M5 16H3.45L5 9L12.06 2L19.11 9L20.66 16H19M12 9A2 2 0 1012 13 2 2 0 0012 9Z"/>
    </svg>
);

const ClockIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-warning">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
);

const GraduationIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-danger">
        <path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
    </svg>
);

const CareersContent = ({ careersSchema }) => {
    const [formStatus, setFormStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: '', phone: '', whatsapp: '', specialization: '', experience: '', location: '', upi: '', password: ''
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
        { title: 'Washing Machine Specialist', color: '#03a9f4' },
        { title: 'Refrigerator Repair Pro', color: '#2196f3' },
        { title: 'AC Technical Expert', color: '#00bcd4' },
        { title: 'TV Repair Specialist', color: '#607d8b' },
        { title: 'Electrical Wiring Expert', color: '#ffc107' },
        { title: 'Microwave/Oven Expert', color: '#ff5722' },
        { title: 'Water Purifier Specialist', color: '#009688' },
        { title: 'Dishwasher Technician', color: '#3f51b5' },
        { title: 'Kitchen Chimney Pro', color: '#795548' },
        { title: 'Geyser & Heater Expert', color: '#f44336' },
        { title: 'Laptop & IT Support', color: '#673ab7' },
        { title: 'Solar Water Heater Tech', color: '#ff9800' }
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
        <main className="careers-page-v3 bg-light-soft min-vh-100">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }} />
            
            <PageHero
                title="Empower Your Service Business"
                subtitle="Join Hyderabad's most transparent network. Empowering 500+ local experts with steady bookings and seamless management."
                breadcrumb="Partner Program"
            />

            <section className="careers-main py-5">
                <div className="container custom-container px-4 px-lg-0">
                    <div className="bg-white p-4 rounded-4 shadow-sm border mb-5 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between gap-4">
                        <div className="d-flex align-items-center gap-4">
                            <div className="p-3 bg-primary bg-opacity-10 rounded-circle text-primary"><UsersIcon /></div>
                            <div>
                                <h6 className="fw-bold mb-0">500+ Active Partners</h6>
                                <p className="text-muted small mb-0">Across Hyderabad & Secunderabad</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-4">
                            <div className="p-3 bg-success bg-opacity-10 rounded-circle text-success"><WalletIcon /></div>
                            <div>
                                <h6 className="fw-bold mb-0">₹45,000+ Avg. Earnings</h6>
                                <p className="text-muted small mb-0">Top technicians earn more</p>
                            </div>
                        </div>
                        <Link href="/partner/login" className="btn btn-dark fw-bold px-4 py-3 d-flex align-items-center" style={{ borderRadius: '12px' }}>
                            <UserCircleIcon /> Partner Login
                        </Link>
                    </div>

                    <div className="row g-5">
                        <div className="col-xl-7">
                            <h2 className="display-6 fw-black text-dark mb-4 font-outfit">Why <span className="text-primary">Join Us?</span></h2>
                            <div className="row g-4 mb-5">
                                {[
                                    { t: 'Zero Marketing Spend', d: 'Stop paying for expensive ads. We handle the 50,000+ monthly traffic.', i: <ChartLineIcon />, c: 'bg-primary' },
                                    { t: 'Instant Digital Payments', d: 'Receive settlements within 24-48 hours. No manual follow-ups.', i: <WalletIcon />, c: 'bg-success' },
                                    { t: 'Flexible Area Control', d: 'Choose your preferred working radius. No mandatory travel.', i: <ClockIcon />, c: 'bg-warning' },
                                    { t: 'Training & Support', d: 'Access deep-tech training in modern appliances and 24/7 support.', i: <GraduationIcon />, c: 'bg-danger' }
                                ].map((b, idx) => (
                                    <div key={idx} className="col-md-6">
                                        <div className="bg-white p-4 p-lg-5 rounded-4 border h-100 shadow-sm transition-all hover-translate">
                                            <div className={`${b.c} bg-opacity-10 p-4 d-inline-block rounded-circle mb-4`}>{b.i}</div>
                                            <h4 className="fw-bold mb-3 font-outfit">{b.t}</h4>
                                            <p className="text-muted fs-6 mb-0 font-inter">{b.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-dark text-white p-5 rounded-4 shadow-lg position-relative overflow-hidden mb-5 border border-warning border-opacity-25" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
                                <div className="z-2 position-relative">
                                    <h3 className="fw-bold mb-3 d-flex align-items-center gap-3 font-outfit">
                                        <div className="bg-warning bg-opacity-10 p-3 rounded-circle"><RocketIcon /></div>
                                        Partner Growth Track
                                    </h3>
                                    <p className="text-white-50 mb-4 fs-5 font-inter max-w-lg">Become a "Gold-Certified" partner and unlock early access to luxury appliance bookings.</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <div className="badge bg-white bg-opacity-10 py-3 px-4 rounded-pill d-flex align-items-center gap-2 font-inter small"><ShieldCheckIcon /> Verified Profile</div>
                                        <div className="badge bg-white bg-opacity-10 py-3 px-4 rounded-pill d-flex align-items-center gap-2 font-inter small"><ShieldCheckIcon /> Performance Bonus</div>
                                        <div className="badge bg-white bg-opacity-10 py-3 px-4 rounded-pill d-flex align-items-center gap-2 font-inter small"><ShieldCheckIcon /> Gear Support</div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="fw-bold mb-4 font-outfit">Required Expertise</h4>
                            <div className="row g-3">
                                {jobs.map((job, idx) => (
                                    <div key={idx} className="col-6 col-md-4">
                                        <div className="bg-white p-3 border rounded-3 shadow-sm d-flex align-items-center gap-3 transition-all h-100">
                                            <div className="p-2 rounded-2 d-flex align-items-center justify-content-center" style={{ background: `${job.color}15`, color: job.color, width: 40, height: 40 }}>
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                            </div>
                                            <span className="small fw-bold text-dark font-outfit">{job.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-xl-5">
                            <div className="sticky-top" style={{ top: '120px' }}>
                                <div className="bg-white p-4 p-lg-5 rounded-4 shadow-2xl border-0 border-top border-primary border-4">
                                    <div className="text-center mb-5">
                                        <h2 className="fw-bold text-dark mb-2 font-outfit">Partner Onboarding</h2>
                                        <p className="text-muted font-inter">Start your professional growth today.</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                                            <label>Full Name</label>
                                        </div>
                                        <div className="row g-2 mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="tel" className="form-control" placeholder="Phone" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                                                    <label>Mobile No.</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="tel" className="form-control" placeholder="WhatsApp" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
                                                    <label>WhatsApp No.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <select className="form-select" required value={formData.specialization} onChange={(e) => setFormData({...formData, specialization: e.target.value})}>
                                                <option value="">Select Specialty</option>
                                                <option value="Washing Machine">Washing Machine</option>
                                                <option value="Fridge">Refrigerator</option>
                                                <option value="AC">AC Technical</option>
                                                <option value="TV">Television</option>
                                                <option value="Electrical">Electrical</option>
                                            </select>
                                            <label>Category Expertise</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" list="area-list" placeholder="Area" required value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} />
                                            <label>Operation Area (Hyderabad)</label>
                                            <datalist id="area-list">{hyderabadAreas.map((area, i) => (<option key={i} value={area} />))}</datalist>
                                        </div>
                                        <div className="row g-2 mb-3">
                                            <div className="col-md-6"><div className="form-floating"><select className="form-select" required value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}><option value="">Exp</option><option value="1-2">1-2 Years</option><option value="3-5">3-5 Years</option><option value="5+">5+ Years</option></select><label>Experience</label></div></div>
                                            <div className="col-md-6"><div className="form-floating"><input type="text" className="form-control" placeholder="UPI" value={formData.upi} onChange={(e) => setFormData({...formData, upi: e.target.value})} /><label>UPI ID</label></div></div>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="password" className="form-control" placeholder="Pass" required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                                            <label>Create Password</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 py-3 fw-bold shadow-lg" disabled={isSubmitting} style={{ borderRadius: '12px' }}>
                                            {isSubmitting ? 'PROCESSING...' : 'REGISTER AS PARTNER'}
                                        </button>
                                    </form>
                                    <p className="text-center text-muted border-top pt-3 small mt-3 mb-0 font-inter">Join 500+ professionals earning ₹45k+ monthly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .bg-light-soft { background: #f8fafc; }
                .fw-black { font-weight: 900; }
                .custom-container { max-width: 1400px; }
                .hover-translate:hover { transform: translateY(-8px); }
                .transition-all { transition: all 0.3s ease; }
            `}</style>
        </main>
    );
};

export default CareersContent;
