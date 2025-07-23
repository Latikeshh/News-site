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
        <div className="container my-5">
            <h2 className="contact-heading text-center mb-2">Get in Touch</h2>
            <hr className="heading-underline mb-4" />

            <div className="row">
                {/* Contact Info */}
                <div className="col-md-5 mb-4">
                    <div className="info-box bg-light p-4 rounded shadow-sm">
                        <h5 className="mb-3 text-primary">📞 Contact Information</h5>
                        <p><strong>Email:</strong> contact@news24india.com</p>
                        <p><strong>Phone:</strong> +91-90000-00000</p>
                        <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-md-7">
                    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                type="text"
                                className="form-control"
                                placeholder="Your full name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                type="email"
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
                            />
                        </div>

                        <button type="submit" className="btn btn-primary px-4">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Google Map + Social Links */}
            <div className="mt-5">
                <h5 className="mb-3 text-primary">📍 Find Us on Map</h5>
                <div className="ratio ratio-16x9 mb-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.586297538051!2d73.77893397366928!3d19.983893181416665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebaead9a4d49%3A0xfd6c10f8929d7902!2sSUMAGO%20INFOTECH%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1752626897379!5m2!1sen!2sin"
                        title="Google Map"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;