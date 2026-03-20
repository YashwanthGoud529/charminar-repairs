"use client";
import React, { useState } from 'react';
import './ServicesBookingForm.css';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

const ServicesBookingForm = () => {
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
                source: 'Services Page',
                createdAt: serverTimestamp(),
                status: 'Pending'
            });

            toast.success("Success! Your booking request has been securely saved.");
            setFormData({
                name: '', phone: '', email: '', address: '', zip: '',
                visit_date: '', visit_time: '', appliance: '', problem_description: ''
            });
            if (e.target) e.target.reset();
        } catch (error) {
            console.error("Booking Error:", error);
            toast.error("Sorry, we couldn't process your booking. Please try calling us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="elementor-element elementor-element-26a4ef0 elementor-button-align-stretch elementor-widget elementor-widget-form"
            data-id="26a4ef0" data-element_type="widget"
            data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
            data-widget_type="form.default">
            <div className="elementor-widget-container">
                <form className="elementor-form" name="Home Quote Form" id="repairForm" onSubmit={handleSubmit}>
                    <div className="elementor-form-fields-wrapper elementor-labels-">
                        {/* Name Field */}
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required">
                            <label htmlFor="sbf-name" className="elementor-field-label elementor-screen-only">Your Name</label>
                            <input size="1" type="text" name="name" id="sbf-name"
                                className="elementor-field elementor-size-sm elementor-field-textual"
                                placeholder="Your Name*" aria-required="true" required onChange={handleChange} />
                            <div className="error-msg mb-0" id="nameError"></div>
                        </div>

                        {/* Phone Field */}
                        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-phone elementor-col-50 elementor-field-required">
                            <label htmlFor="sbf-phone" className="elementor-field-label elementor-screen-only">Phone</label>
                            <input size="1" type="tel" name="phone" id="sbf-phone"
                                className="elementor-field elementor-size-sm elementor-field-textual"
                                placeholder="Phone*" pattern="[0-9]{10,15}"
                                title="Please enter a valid phone number (10-15 digits)" required onChange={handleChange} />
                            <div className="error-msg" id="phoneError"></div>
                        </div>

                        {/* Email Field */}
                        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
                            <label htmlFor="sbf-email" className="elementor-field-label elementor-screen-only">Email</label>
                            <input size="1" type="email" name="email" id="sbf-email"
                                className="elementor-field elementor-size-sm elementor-field-textual"
                                placeholder="Email" onChange={handleChange} />
                        </div>

                        {/* Address Field */}
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-address elementor-col-70 elementor-field-required">
                            <label htmlFor="sbf-address" className="elementor-field-label elementor-screen-only">Address</label>
                            <input size="1" type="text" name="address" id="sbf-address"
                                className="elementor-field elementor-size-sm elementor-field-textual"
                                placeholder="Address*" required onChange={handleChange} />
                            <div className="error-msg" id="addressError"></div>
                        </div>

                        {/* ZIP Code Field */}
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-zip elementor-col-30 elementor-field-required">
                            <label htmlFor="sbf-zip" className="elementor-field-label elementor-screen-only">ZIP Code</label>
                            <input size="1" type="text" name="zip" id="sbf-zip"
                                className="elementor-field elementor-size-sm elementor-field-textual"
                                placeholder="ZIP" required onChange={handleChange} />
                        </div>

                        {/* Date of Visit */}
                        <div className="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-date elementor-col-50 elementor-field-required">
                            <label htmlFor="sbf-date" className="elementor-field-label elementor-screen-only">Date of Visit</label>
                            <input type="date" name="visit_date" id="sbf-date"
                                className="elementor-field elementor-size-sm elementor-field-textual elementor-date-field"
                                placeholder="Date of Visit" required onChange={handleChange} />
                        </div>

                        {/* Time of Visit */}
                        <div className="elementor-field-type-time elementor-field-group elementor-column elementor-field-group-time elementor-col-50 elementor-field-required">
                            <label htmlFor="sbf-time" className="elementor-field-label elementor-screen-only">Time of Visit</label>
                            <input type="time" name="visit_time" id="sbf-time"
                                className="elementor-field elementor-size-sm elementor-field-textual elementor-time-field"
                                placeholder="Time of Visit" required onChange={handleChange} />
                        </div>

                        {/* Appliance Selection */}
                        <div className="elementor-field-type-time elementor-field-group elementor-column elementor-field-group-time elementor-col-100 elementor-field-required">
                            <label htmlFor="sbf-appliance" className="elementor-field-label elementor-screen-only">Select Appliance</label>
                            <select id="sbf-appliance" name="appliance" className="elementor-field" defaultValue="" required onChange={handleChange}>
                                <option value="" disabled>Select a Product*</option>
                                <option value="Washing Machine">Washing Machine</option>
                                <option value="Refrigerator">Refrigerator</option>
                                <option value="Microwave Oven">Microwave Oven</option>
                                <option value="Air Conditioner">Air Conditioner</option>
                                <option value="Television">Television</option>
                                <option value="Dishwasher">Dishwasher</option>
                                <option value="Oven / OTG">Oven / OTG</option>
                                <option value="Toaster">Toaster</option>
                                <option value="Mixer Grinder">Mixer Grinder</option>
                                <option value="Coffee Machine">Coffee Machine</option>
                                <option value="Chimney / Range Hood">Chimney / Range Hood</option>
                                <option value="Water Purifier / RO">Water Purifier / RO</option>
                                <option value="Dryer">Dryer</option>
                                <option value="Vacuum Cleaner">Vacuum Cleaner</option>
                                <option value="Air Purifier">Air Purifier</option>
                                <option value="Cooler">Cooler</option>
                                <option value="Sewing Machine">Sewing Machine</option>
                                <option value="Inverter / UPS">Inverter / UPS</option>
                                <option value="Geyser / Water Heater">Geyser / Water Heater</option>
                            </select>
                            <div className="invalid-feedback">Please select a product.</div>
                            <div className="error-msg" id="applianceError"></div>
                        </div>

                        {/* Problem Description */}
                        <div className="elementor-field-type-time elementor-field-group elementor-column elementor-field-group-time elementor-col-100 elementor-field-required mb-3 col-12">
                            <label htmlFor="sbf-problem" className="elementor-field-label elementor-screen-only">Problem Description</label>
                            <textarea className="elementor-field form-control" id="sbf-problem"
                                name="problem_description" rows="4" placeholder="Describe the problem you're facing..." required onChange={handleChange}></textarea>
                            <div className="invalid-feedback">Please describe the problem.</div>
                        </div>

                        {/* Submit Button */}
                        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                            <button className="elementor-button elementor-size-md" type="submit" id="submitButton" disabled={isSubmitting}>
                                <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">{isSubmitting ? 'Scheduling...' : 'Schedule Your Booking'}</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServicesBookingForm;
