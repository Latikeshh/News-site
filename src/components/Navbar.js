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
        { name: "Health", path: "/health" },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top border-bottom">
            <div className="container-fluid px-4">
                {/* Brand */}
                <Link className="navbar-brand fw-bold text-primary fs-4" to="/">
                    🇮🇳 News24<span className="text-danger">India</span>
                </Link>

                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                    aria-controls="mainNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Navigation */}
                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        {navItems.map(({ name, path }) => (
                            <li className="nav-item mx-1" key={name}>
                                <Link
                                    className={`nav-link px-3 py-2 rounded-pill transition ${currentPath === path
                                            ? "bg-primary text-white fw-semibold shadow-sm"
                                            : "text-dark"
                                        }`}
                                    to={path}
                                    style={{ transition: 'all 0.2s ease-in-out' }}
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Search */}
                    <form className="d-flex ms-lg-3 mt-3 mt-lg-0">
                        <input
                            className="form-control form-control-sm rounded-pill px-3 me-2 border"
                            type="search"
                            placeholder="Search news..."
                            aria-label="Search"
                        />
                        <button className="btn btn-sm btn-outline-primary rounded-pill" type="submit">
                            🔍
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
