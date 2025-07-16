import React from 'react';

const Sidebar = () => {
    const trending = [
        "Modi addresses UN Assembly",
        "India vs Pakistan T20 Clash",
        "Sensex Hits Record High",
        "NEET 2025 Results Out",
        "New iPhone 17 Launched",
        "Chandrayaan 4 Mission Success",
        "IPL 2025 Schedule Announced",
        "Petrol Prices Drop Nationwide",
        "Monsoon Arrives Early",
        "Budget 2025 Live Updates"
    ];

    return (
        <div className="bg-white p-3 rounded-3 shadow-sm border" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
            {/* Heading */}
            <div className="d-flex align-items-center mb-3">
                <span className="fs-5 fw-semibold text-danger me-2">🔥</span>
                <h5 className="m-0 fw-bold text-dark">Trending Now</h5>
            </div>

            {/* Scrollable List */}
            <div style={{ maxHeight: '300px', overflowY: 'auto', padding: '5px' }}>
                <ul className="list-unstyled mb-0">
                    {trending.map((item, i) => (
                        <li
                            key={i}
                            className="py-2 px-2 mb-1 rounded hover-bg-light border-start border-3 border-danger small fw-semibold text-secondary"
                            style={{ cursor: 'pointer', transition: 'all 0.2s ease-in-out' }}>
                            <span className="text-danger me-2">●</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
