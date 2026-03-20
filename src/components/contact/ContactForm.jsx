'use client';

import React, { useState } from 'react';
import '@/styles/contact.css';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        zip: '',
        visit_date: '',
        visit_time: '',
        appliance: '',
        problem_description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await addDoc(collection(db, 'service_leads'), {
                ...formData,
                source: 'Contact Page',
                createdAt: serverTimestamp(),
                status: 'Pending'
            });

            toast.success("Success! Your repair booking has been securely saved.");
            setFormData({
                name: '', phone: '', email: '', address: '', zip: '',
                visit_date: '', visit_time: '', appliance: '', problem_description: ''
            });
            if (e.target) e.target.reset();
        } catch (error) {
            console.error("Firebase Error:", error);
            toast.error("Sorry, we couldn't process your request. Please call us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-form-premium">
            <form onSubmit={handleSubmit} className="row g-4">
                <div className="col-md-12">
                    <div className="form-group-premium">
                        <label className="premium-label">Full Name</label>
                        <input type="text" name="name" className="premium-input" placeholder="Enter your name" required onChange={handleChange} value={formData.name} />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group-premium">
                        <label className="premium-label">Phone Number</label>
                        <input type="tel" name="phone" className="premium-input" placeholder="e.g. 8008615049" required onChange={handleChange} value={formData.phone} />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group-premium">
                        <label className="premium-label">Email (Optional)</label>
                        <input type="email" name="email" className="premium-input" placeholder="name@example.com" onChange={handleChange} value={formData.email} />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group-premium">
                        <label className="premium-label">Service Address</label>
                        <input type="text" name="address" className="premium-input" placeholder="Flat, Street, Area Name" required onChange={handleChange} value={formData.address} />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group-premium">
                        <label className="premium-label">Preferred Date</label>
                        <input type="date" name="visit_date" className="premium-input" required onChange={handleChange} value={formData.visit_date} />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group-premium">
                        <label className="premium-label">Preferred Slot</label>
                        <select name="visit_time" className="premium-select" required onChange={handleChange} value={formData.visit_time}>
                            <option value="">Select Time</option>
                            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                            <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                            <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                        </select>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-group-premium">
                        <label className="premium-label">Appliance Category</label>
                        <select name="appliance" className="premium-select" required onChange={handleChange} value={formData.appliance}>
                            <option value="">Choose your appliance</option>
                            <option value="Washing Machine">Washing Machine</option>
                            <option value="Refrigerator">Refrigerator</option>
                            <option value="Microwave Oven">Microwave Oven</option>
                            <option value="Air Conditioner">Air Conditioner</option>
                            <option value="Television">Television</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-group-premium">
                        <label className="premium-label">Issue Details</label>
                        <textarea name="problem_description" className="premium-input" rows="4" placeholder="Briefly explain what's wrong with your appliance..." required onChange={handleChange} value={formData.problem_description}></textarea>
                    </div>
                </div>

                <div className="col-12 pt-3">
                    <button type="submit" className="btn-premium-action w-100" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <span className="spinner-border spinner-border-sm" role="status"></span>
                                <span>PROCESSING BOOKING...</span>
                            </div>
                        ) : 'CONFIRM SERVICE BOOKING'}
                    </button>
                    <p className="text-center mt-3 small text-muted fw-medium">
                        <i className="fas fa-shield-alt me-1 text-success"></i> Instant assignment to a nearby technician.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
