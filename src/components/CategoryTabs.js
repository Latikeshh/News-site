import React from 'react';

const categories = ["All", "Latest", "Trending", "Politics", "Sports", "Tech", "Entertainment"];

const CategoryTabs = ({ active, onSelect }) => {
    return (
        <div className="container mt-3">
            <ul className="nav nav-pills justify-content-center gap-2 flex-wrap">
                {categories.map(cat => (
                    <li className="nav-item" key={cat}>
                        <button
                            className={`btn btn-sm ${active === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
                            onClick={() => onSelect(cat)}
                        >
                            {cat}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryTabs;
