import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname.toLowerCase();

    const [showCategories, setShowCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = [
        { name: "Politics", path: "/category/politics" },
        { name: "Finance", path: "/category/finance" },
        { name: "Sports", path: "/category/sports" },
        { name: "Science", path: "/category/science" },
        { name: "Entertainment", path: "/category/entertainment" },
        { name: "Health", path: "/category/health" },
    ];

    const toggleCategories = () => setShowCategories(!showCategories);

    const handleCategoryClick = (name, path) => {
        setSelectedCategory(name);
        setShowCategories(false);
        navigate(path);
    };

    return (
        <div className="nav-wrapper">
            <nav className="nav-bar nav-neumorphic">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <Link className="nav-brand" to="/">
                        🇮🇳 News24<span className="nav-highlight">India</span>
                    </Link>

                    <div className="nav-items d-flex align-items-center">
                        <Link
                            className={`nav-link ${currentPath === "/" ? "active" : ""}`}
                            to="/"
                        >
                            Home
                        </Link>

                        <button
                            className="nav-link nav-dropdown-toggle"
                            onClick={toggleCategories}
                        >
                            {selectedCategory ? `Category: ${selectedCategory}` : "Browse Categories ▾"}
                        </button>

                        <form className="d-flex ms-3">
                            <input
                                className="nav-search-input"
                                type="search"
                                placeholder="Search news..."
                                aria-label="Search"
                            />
                            <button className="nav-link" type="submit">
                                🔍
                            </button>
                        </form>
                    </div>
                </div>

                {showCategories && (
                    <div className="nav-category-bar">
                        {categories.map(({ name, path }) => (
                            <button
                                className={`nav-category-link ${currentPath === path ? "active" : ""}`}
                                key={name}
                                onClick={() => handleCategoryClick(name, path)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
