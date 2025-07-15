import React from 'react';

const Sidebar = () => {
    const trending = [
        "Modi addresses UN Assembly",
        "India vs Pakistan T20 Clash",
        "Sensex Hits Record High",
        "NEET 2025 Results Out",
        "New iPhone 17 Launched"
    ];

    return (
        <div className="bg-light p-3 shadow-sm">
            <h5 className="mb-3">🔥 Trending Now</h5>
            <ul className="list-unstyled">
                {trending.map((item, i) => (
                    <li key={i} className="mb-2">
                        <span className="badge bg-danger me-2">●</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
