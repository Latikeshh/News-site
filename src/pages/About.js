import React, { useState, useEffect } from 'react';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#f4f4f4', padding: '40px 20px' }}>
            <div className="container">
                {/* About Section */}
                <h2 className="mb-4" style={{ color: '#1e3d59' }}>About News24India</h2>
                <p className="lead" style={{ color: '#333' }}>
                    News24India is a reliable digital news platform delivering the latest updates on politics, business, sports,
                    technology, entertainment, and health. Our mission is to inform, educate, and empower the citizens of India
                    with accurate, unbiased, and timely information.
                </p>

                <p style={{ color: '#444' }}>
                    Founded in 2025, News24India is based in Mumbai and operated by a team of experienced journalists and editors
                    who value integrity and truth above all.
                </p>

                {/* Head Office and Contact Info */}
                <ul className="list-unstyled" style={{ color: '#555' }}>
                    <li><strong>Head Office:</strong> Mumbai, Maharashtra, India</li>
                    <li><strong>Email:</strong> contact@news24india.com</li>
                    <li><strong>Phone:</strong> +91-90000-00000</li>
                </ul>

                {/* Vision & Mission Section */}
                <hr style={{ borderTop: '2px solid #ccc' }} />
                <h4 className="mt-5" style={{ color: '#005792' }}>Our Vision</h4>
                <p>To become India’s most trusted digital news platform, empowering every citizen with knowledge that matters.</p>

                <h4 style={{ color: '#005792' }}>Our Mission</h4>
                <p>To deliver timely, unbiased, and insightful news that informs, educates, and inspires our readers.</p>

                {/* Timeline */}
                <hr style={{ borderTop: '2px solid #ccc' }} />
                <h4 className="mt-5" style={{ color: '#005792' }}>Our Journey</h4>
                <ul>
                    <li><strong>2025:</strong> News24India founded in Nashik</li>
                    <li><strong>2026:</strong> Reached 1M monthly readers</li>
                    <li><strong>2027:</strong> Launched mobile app</li>
                    <li><strong>2028:</strong> Recognized as “Fastest Growing Digital News Platform”</li>
                </ul>

                {/* Meet the Team Section */}
                <hr style={{ borderTop: '2px solid #ccc' }} />
                <h4 className="mt-5" style={{ color: '#005792' }}>Top</h4>
                <ul className="list-unstyled">
                </ul>

                {/* Test */}
                <hr style={{ borderTop: '2px solid #ccc' }} />
                <h4 className="mt-5" style={{ color: '#005792' }}>What Our Readers Say</h4>
                <div style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '8px', marginBottom: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <p>"News24India is my daily go-to source for honest news."</p>
                    <footer className="blockquote-footer">Sneha R., Pune</footer>
                </div>
                <div style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <p>"Reliable, fast, and unbiased reporting every time."</p>
                    <footer className="blockquote-footer">Amit K., Delhi</footer>
                </div>
            </div>
        </div>
    );
};

export default About;