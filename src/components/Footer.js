import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-6 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">News Categories</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/politics" className="text-light text-decoration-none">Politics</Link></li>
                            <li><Link to="/business" className="text-light text-decoration-none">Business</Link></li>
                            <li><Link to="/sports" className="text-light text-decoration-none">Sports</Link></li>
                            <li><Link to="/tech" className="text-light text-decoration-none">Technology</Link></li>
                            <li><Link to="/entertainment" className="text-light text-decoration-none">Entertainment</Link></li>
                        </ul>
                    </div>
                    {/* Useful Links hello */}
                    <div className="col-md-3 col-md-6 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Useful Links</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
                            <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
                            <li><a href="/" className="text-light text-decoration-none">Privacy Policy</a></li>
                            <li><a href="/" className="text-light text-decoration-none">Terms of Use</a></li>
                            <li><a href="/" className="text-light text-decoration-none">Advertise</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-light fs-5"><i className="bi bi-twitter-x"></i></a>
                            <a href="#" className="text-light fs-5"><i className="bi bi-youtube"></i></a>
                            <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="col-md-3 mb-4 text-md-end">
                        <h5 className="fw-bold">🇮🇳 News24India</h5>
                        <p className="text-secondary small">Bringing you the truth, first.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-secondary text-center py-3 mt-4">
                © 2025 News24India. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
