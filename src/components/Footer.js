import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-3 mt-5">
            © {new Date().getFullYear()} NewsSite. All rights reserved.
        </footer>
    );
};

export default Footer;
