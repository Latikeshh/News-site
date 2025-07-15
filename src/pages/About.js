import React from 'react';

const About = () => {
    return (
        <div className="container my-5">
            <h2 className="mb-4">About News24India</h2>
            <p className="lead">
                News24India is a reliable digital news platform delivering the latest updates on politics, business, sports,
                technology, entertainment, and health. Our mission is to inform, educate, and empower the citizens of India
                with accurate, unbiased, and timely information.
            </p>

            <p>
                Founded in 2025, News24India is based in Mumbai and operated by a team of experienced journalists and editors
                who value integrity and truth above all.
            </p>

            <ul className="list-unstyled">
                <li><strong>Head Office:</strong> Mumbai, Maharashtra, India</li>
                <li><strong>Email:</strong> contact@news24india.com</li>
                <li><strong>Phone:</strong> +91-90000-00000</li>
            </ul>
        </div>
    );
};

export default About;
