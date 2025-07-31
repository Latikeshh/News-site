import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="f-footer">
            <div className="f-footer-container">
                
                <div className="f-footer-section">
                    <h6 className="f-footer-title">News Categories</h6>
                    <ul className="f-footer-list">
                        <li><Link to="/category/politics" className="f-footer-link">Politics</Link></li>
                        <li><Link to="/category/finance" className="f-footer-link">Finance</Link></li>
                        <li><Link to="/category/sports" className="f-footer-link">Sports</Link></li>
                        <li><Link to="/category/science" className="f-footer-link">Science</Link></li>
                        <li><Link to="/category/entertainment" className="f-footer-link">Entertainment</Link></li>
                        <li><Link to="/category/health" className="f-footer-link">Health</Link></li>
                    </ul>
                </div>

                <div className="f-footer-section">
                    <h6 className="f-footer-title">Useful Links</h6>
                    <ul className="f-footer-list">
                        <li><Link to="/about" className="f-footer-link">About Us</Link></li>
                        <li><Link to="/contact" className="f-footer-link">Contact</Link></li>
                        <li><a href="#" className="f-footer-link">Privacy Policy</a></li>
                        <li><a href="#" className="f-footer-link">Terms of Use</a></li>
                        <li><a href="#" className="f-footer-link">Advertise</a></li>
                    </ul>
                </div>

                <div className="f-footer-section">
                    <h6 className="f-footer-title">Follow Us</h6>
                    <ul className="f-footer-list">
                        <li><a href="#" className="f-footer-link">Facebook</a></li>
                        <li><a href="#" className="f-footer-link">Twitter</a></li>
                        <li><a href="#" className="f-footer-link">YouTube</a></li>
                        <li><a href="#" className="f-footer-link">Instagram</a></li>
                    </ul>
                </div>

                <div className="f-footer-section f-footer-branding">
                    <h5 className="f-footer-title">🇮🇳 News24<span className="text-primary">India</span></h5>
                    <p className="f-footer-tagline">Bringing you the truth, first.</p>
                </div>
            </div>

            <div className="f-footer-bottom">
                © 2025 News24India. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
