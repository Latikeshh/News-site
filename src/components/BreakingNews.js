import React from 'react';
import './BreakingNews.css';

const BreakingNews = () => {
    return (
        <div className="breaking-news bg-danger text-white py-2 px-3">
            <strong>Breaking:</strong>
            <marquee scrollamount="6" className="mx-2">
                PM announces new education policy | Sensex crosses 70,000 mark | India defeats Australia in T20
            </marquee>
        </div>
    );
};

export default BreakingNews;
