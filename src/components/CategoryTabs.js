import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ["All", "Latest", "Trending", "Politics", "Sports", "Tech", "Entertainment"];

const CategoryTabs = ({ active }) => {
    const navigate = useNavigate();

    const handleClick = (category) => {
        const route = category === "All" ? "/" : `/${category.toLowerCase()}`;
        navigate(route);
    };

    return (
        <div className="container my-4">
            <div className="d-flex flex-wrap justify-content-center gap-2">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`btn px-4 py-2 rounded-pill fw-semibold shadow-sm transition ${active === cat ? 'btn-dark text-white' : 'btn-outline-dark'
                            }`}
                        onClick={() => handleClick(cat)}
                        style={{
                            transition: 'all 0.2s ease-in-out',
                            minWidth: '100px',
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryTabs;
