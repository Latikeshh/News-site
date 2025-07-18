import React from 'react';
import './BreakingNews.css';

const BreakingNews = () => {
    return (
        <div className="breaking-news-bar">
            <div className="breaking-label">
                <span className="dot"></span>
                <strong className="ms-2">Breaking:</strong>
            </div>
            <marquee scrollamount="6" className="breaking-text">
                PM announces new education policy | Sensex crosses 70,000 mark | India defeats Australia in T20 | Chandrayaan-4 to launch in 2026 🚀 | Tech Expo 2025 opens in Mumbai
            </marquee>
        </div>
    );
};

export default BreakingNews;