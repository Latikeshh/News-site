import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container py-5">
                <div className="row gy-4">

                    {/* News Categories */}
                    <div className="col-md-3 col-6">
                        <h6 className="footer-section-title">News Categories</h6>
                        <ul className="footer-list">
                            <li><Link to="/category/politics" className="footer-link">Politics</Link></li>
                            <li><Link to="/category/finance" className="footer-link">Finance</Link></li>
                            <li><Link to="/category/sports" className="footer-link">Sports</Link></li>
                            <li><Link to="/category/science" className="footer-link">Science</Link></li>
                            <li><Link to="/category/entertainment" className="footer-link">Entertainment</Link></li>
                            <li><Link to="/category/health" className="footer-link">Health</Link></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="col-md-3 col-6">
                        <h6 className="footer-section-title">Useful Links</h6>
                        <ul className="footer-list">
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                            <li><a href="#" className="footer-link">Terms of Use</a></li>
                            <li><a href="#" className="footer-link">Advertise</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3 col-6">
                        <h6 className="footer-section-title">Follow Us</h6>
                        {/* <div className="footer-socials">
                            <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
                            <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
                            <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                        </div> */}
                    </div>

                    {/* Branding */}
                    <div className="col-md-3 col-6 footer-branding">
                        <h5 className="footer-section-title">🇮🇳 News24India</h5>
                        <p className="footer-tagline">Bringing you the truth, first.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom text-center py-3 bg-primary text-white">
                © 2025 <span className="fw-bold">News24India</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
