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
        specialization: '',
        experience: '',
        location: ''
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
        {
            title: "Washing Machine Specialist",
            icon: "/images/washing_machine_icon.png",
            desc: "Expert solutions for all types of washing machines across Hyderabad.",
            category: "Technical"
        },
        {
            title: "Refrigerator Repair Pro",
            icon: "/images/refrigerator_icon.png",
            desc: "Join our team of fridge experts fixing all major brands and models.",
            category: "Technical"
        },
        {
            title: "AC Technical Expert",
            icon: "/images/ac_icon.png",
            desc: "Specialized in installation, gas charging, and maintenance of AC units.",
            category: "Technical"
        },
        {
            title: "TV Repair Specialist",
            icon: "/images/tv_icon.png",
            desc: "Fixing display and sound issues for LED/LCD and Smart TVs.",
            category: "Technical"
        },
        {
            title: "Electrical Wiring Expert",
            icon: "/images/img_icons8_com_fluency_94_electrical_sensor_png.png",
            desc: "Safe and reliable house wiring and electrical repairs.",
            category: "Technical"
        },
        {
            title: "Microwave Oven Expert",
            icon: "/images/microwave_icon.png",
            desc: "Handling heating and circuit issues for all microwave types.",
            category: "Technical"
        },
        {
            title: "Dishwasher Specialist",
            icon: "/images/dishwasher_icon.png",
            desc: "Restoring efficiency to modern kitchens with expert dishwasher repair.",
            category: "Technical"
        },
        {
            title: "AMC Coordinator",
            icon: "/images/gas_stove_icon.png",
            desc: "Managing preventive maintenance contracts for loyal clients.",
            category: "Admin"
        }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        try {
            await addDoc(collection(db, 'job_applications'), {
                ...formData,
                date: new Date().toLocaleString(),
                createdAt: serverTimestamp(),
                status: 'Pending'
            });

            setFormStatus('');
            toast.success("Application submitted successfully!");
            setFormData({ name: '', phone: '', specialization: '', experience: '', location: '' });
        } catch (error) {
            console.error('Error submitting application:', error);
            setFormStatus('');
            toast.error("Failed to submit application.");
        }
    };
    const isSubmitting = formStatus === 'submitting';

    return (
        <main className="careers-page-v3">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
            />
            
            <PageHero
                title="Elevate Your Career with Charminar Repairs"
                subtitle="Join the most trusted appliance repair network in Hyderabad. We're looking for passionate experts to serve our 50,000+ happy customers across the city."
                breadcrumb="Join Our Team"
            />

            <section className="careers-main py-5 mt-5">
                <div className="container-fluid px-lg-5">
                    <div className="row g-5">
                        <div className="col-xl-8">
                            <div className="section-head mb-5">
                                <h2 className="display-6 fw-bold text-dark">Open <span className="text-orange">Positions</span></h2>
                                <p className="text-muted">Strategic roles available for expert technicians in all Hyderabad areas.</p>
                            </div>
                            
                            <div className="row g-4">
                                {jobs.map((job, idx) => (
                                    <div key={idx} className="col-md-6 col-xl-3">
                                        <div className="premium-job-card p-4 border rounded shadow-sm hover-premium h-100 d-flex flex-column">
                                            <div className="card-icon mb-3">
                                                <img src={job.icon} alt={job.title} width="50" height="50" />
                                            </div>
                                            <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>{job.title}</h5>
                                            <p className="text-muted small mb-4 flex-grow-1">{job.desc}</p>
                                            <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                                                <span className="badge-category">{job.category}</span>
                                                <a href="#apply-form" className="apply-link">Apply Now <i className="fas fa-arrow-right ms-1"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="sticky-top" style={{ top: '120px' }} id="apply-form">
                                <div className="application-glass-card p-5 border rounded shadow-lg overflow-hidden position-relative">
                                    <div className="glass-overlay"></div>
                                    <div className="position-relative z-index-1">
                                        <h3 className="fw-bold mb-4 text-dark">Quick Application</h3>
                                        <form onSubmit={handleSubmit} className="custom-form">
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
                                            <div className="form-floating mb-3">
                                                <input 
                                                    type="tel" 
                                                    className="form-control" 
                                                    id="userPhone" 
                                                    placeholder="800..." 
                                                    required 
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                />
                                                <label htmlFor="userPhone">Mobile Number</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <select 
                                                    className="form-select" 
                                                    id="specialization" 
                                                    required
                                                    value={formData.specialization}
                                                    onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                                                >
                                                    <option value="">Select Category</option>
                                                    <option value="Washing Machine">Washing Machine Repair</option>
                                                    <option value="Fridge">Refrigerator Repair</option>
                                                    <option value="AC">AC Repair</option>
                                                    <option value="TV">TV Repair</option>
                                                    <option value="Electrical">House Wiring</option>
                                                    <option value="Other">Other Specialist</option>
                                                </select>
                                                <label htmlFor="specialization">Your Specialty</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="userArea" 
                                                    list="area-list"
                                                    placeholder="Select Area" 
                                                    required 
                                                    value={formData.location}
                                                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                                                />
                                                <label htmlFor="userArea">Hyderabad Area (Malkajgiri, Medchal, etc.)</label>
                                                <datalist id="area-list">
                                                    {hyderabadAreas.map((area, i) => (
                                                        <option key={i} value={area} />
                                                    ))}
                                                </datalist>
                                            </div>

                                            <div className="form-group mb-4">
                                                <div className="form-floating mb-3">
                                                    <select 
                                                        className="form-select" 
                                                        id="exp" 
                                                        required 
                                                        value={formData.experience}
                                                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                                                    >
                                                        <option value="">Experience Level</option>
                                                        <option value="Fresher">Fresher</option>
                                                        <option value="1-2 Years">1-2 Years</option>
                                                        <option value="3-5 Years">3-5 Years</option>
                                                        <option value="5-10 Years">5-10 Years</option>
                                                        <option value="10+ Years">Expert (10+)</option>
                                                    </select>
                                                    <label htmlFor="exp">Exp. Level</label>
                                                </div>
                                            </div>

                                            <div className="col-12 text-center mt-3 pt-2">
                                                <button type="submit" className="btn-submit-premium w-100" disabled={isSubmitting}>
                                                    {isSubmitting ? 'SENDING...' : 'SUBMIT APPLICATION'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
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
