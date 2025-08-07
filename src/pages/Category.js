import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../data/newsData';
import NewsCard from '../components/NewsCard';
import './Category.css'; // ⬅️ External high-level styling

const Category = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { category } = useParams();
    const formattedCategory = category?.toLowerCase();

    const filteredNews = newsData.filter(
        (item) => item.category?.toLowerCase() === category?.toLowerCase()
    );

    return (
        <div className="category-page container py-5">
            <h2 className="category-heading text-capitalize">
                {formattedCategory} News
            </h2>
            {filteredNews.length > 0 ? (
                <div className="row g-6">
                    {filteredNews.map((news, index) => (
                        <div className="col-md-6 col-lg-6" key={index}>
                            <NewsCard {...news} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-news-msg">No news articles available in this category yet.</p>
            )}
        </div>
    );
};

export default Category;
