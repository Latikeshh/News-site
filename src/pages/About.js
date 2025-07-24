import React, { useEffect } from 'react';
import './About.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <div className="container">
                <h2 className="about-heading">About News24India</h2>
                <p className="about-lead">
                    News24India is a reliable digital news platform delivering the latest updates on politics, business, sports,
                    technology, entertainment, and health. Our mission is to inform, educate, and empower the citizens of India
                    with accurate, unbiased, and timely information.
                </p>

                <p className="about-description">
                    Founded in 2025, News24India is based in Mumbai and operated by a team of experienced journalists and editors
                    who value integrity and truth above all.
                </p>

                <ul className="contact-info">
                    <li><strong>Head Office:</strong> Mumbai, Maharashtra, India</li>
                    <li><strong>Email:</strong> contact@news24india.com</li>
                    <li><strong>Phone:</strong> +91-90000-00000</li>
                </ul>

                <hr className="about-divider" />
                <h4 className="section-title">Our Vision</h4>
                <p className="about-description">
                    To become India’s most trusted digital news platform, empowering every citizen with knowledge that matters.
                </p>

                <h4 className="section-title">Our Mission</h4>
                <p className="about-description">
                    To deliver timely, unbiased, and insightful news that informs, educates, and inspires our readers.
                </p>

                <hr className="about-divider" />
                <h4 className="section-title">Our Journey</h4>
                <ul className="timeline">
                    <li><strong>2025:</strong> News24India founded in Nashik</li>
                    <li><strong>2026:</strong> Reached 1M monthly readers</li>
                    <li><strong>2027:</strong> Launched mobile app</li>
                    <li><strong>2028:</strong> Recognized as “Fastest Growing Digital News Platform”</li>
                </ul>

                <hr className="about-divider" />
                <h4 className="section-title">What Our Readers Say</h4>
                <div className="testimonial-card">
                    <p>"News24India is my daily go-to source for honest news."</p>
                    <footer className="blockquote-footer">Sneha R., Pune</footer>
                </div>
                <div className="testimonial-card">
                    <p>"Reliable, fast, and unbiased reporting every time."</p>
                    <footer className="blockquote-footer">Amit K., Delhi</footer>
                </div>
            </div>
        </div>
    );
};

export default About;
