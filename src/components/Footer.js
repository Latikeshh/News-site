import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5">
            <div className="container">
                <div className="row border-bottom pb-4 mb-4">

                    {/* News Categories */}
                    <div className="col-md-3 col-6 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3 text-warning">News Categories</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/politics" className="footer-link">Politics</Link></li>
                            <li><Link to="/business" className="footer-link">Business</Link></li>
                            <li><Link to="/sports" className="footer-link">Sports</Link></li>
                            <li><Link to="/tech" className="footer-link">Technology</Link></li>
                            <li><Link to="/entertainment" className="footer-link">Entertainment</Link></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="col-md-3 col-6 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3 text-warning">Useful Links</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                            <li><a href="/" className="footer-link">Privacy Policy</a></li>
                            <li><a href="/" className="footer-link">Terms of Use</a></li>
                            <li><a href="/" className="footer-link">Advertise</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3 text-warning">Follow Us</h6>
                        <div className="d-flex gap-3">
                            <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
                            <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
                            <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>

                    {/* Branding */}
                    <div className="col-md-3 mb-4 text-md-end">
                        <h5 className="fw-bold text-warning">🇮🇳 News24India</h5>
                        <p className="text-secondary small">Bringing you the truth, first.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-secondary text-center py-3">
                © 2025 <span className="text-warning">News24India</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;