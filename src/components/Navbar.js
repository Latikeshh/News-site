import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Politics", path: "/politics" },
        { name: "Business", path: "/business" },
        { name: "Sports", path: "/sports" },
        { name: "Tech", path: "/tech" },
        { name: "Entertainment", path: "/entertainment" },
        { name: "Health", path: "/health" }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
            <div className="container-fluid px-4">
                <Link className="navbar-brand fw-bold" to="/">🇮🇳 News24India</Link>
                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                    aria-controls="mainNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    {/* Navigation links */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {navItems.map(({ name, path }) => (
                            <li className="nav-item" key={name}>
                                <Link
                                    className={`nav-link ${currentPath === path ? "active fw-bold" : ""}`}
                                    to={path}
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Search bar */}
                    <form className="d-flex ms-lg-3 mt-2 mt-lg-0">
                        <input
                            className="form-control form-control-sm me-2"
                            type="search"
                            placeholder="Search news..."
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-light btn-sm" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
