import React, { useState } from 'react';

const Contact = () => {
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
            <h2 className="mb-4">Contact Us</h2>

            <p className="mb-4">Have questions or feedback? Fill out the form below to reach out to our team.</p>

            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
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

                <div className="col-md-6">
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

                <div className="col-12">
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

                <div className="col-12">
                    <button type="submit" className="btn btn-primary px-4">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
