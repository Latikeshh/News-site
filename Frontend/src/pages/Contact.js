import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for contacting us!");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container container my-5">
            <h2 className="contact-title text-center mb-2">Get in Touch</h2>
            <hr className="contact-underline mb-4" />

            <div className="row g-4 align-items-stretch">
                {/* Left Info */}
                <div className="col-md-5">
                    <div className="contact-info-box shadow-sm rounded p-4 h-100">
                        <h5 className="text-primary mb-3">📞 Contact Information</h5>
                        <p><strong>Email:</strong> contact@news24india.com</p>
                        <p><strong>Phone:</strong> +91-90000-00000</p>
                        <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
                        <div className="map-container mt-4 rounded overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.586297538051!2d73.77893397366928!3d19.983893181416665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebaead9a4d49%3A0xfd6c10f8929d7902!2sSUMAGO%20INFOTECH%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1752626897379!5m2!1sen!2sin"
                                title="Google Map"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-md-7">
                    <form onSubmit={handleSubmit} className="contact-form shadow-sm bg-white rounded p-4">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-control"
                                placeholder="Your full name"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-control"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="form-control"
                                rows="5"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
