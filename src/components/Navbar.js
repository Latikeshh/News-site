import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
            <div className="container-fluid px-4">
                <a className="navbar-brand fw-bold" href="/">🇮🇳 News24India</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {["Home", "Politics", "Business", "Sports", "Tech", "Entertainment", "Health"].map(cat => (
                            <li className="nav-item" key={cat}>
                                <a className="nav-link" href="/">{cat}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
