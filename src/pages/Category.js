import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../data/newsData'; // Update the path as needed
import NewsCard from '../components/NewsCard';

const Category = () => {
    const { category } = useParams();
    const formattedCategory = category?.toLowerCase();

    const filteredNews = newsData.filter(
        (item) => item.category?.toLowerCase() === category?.toLowerCase()
    );
    return (
        <div className="container py-4">
            <h2 className="fw-bold text-capitalize mb-4">
                {formattedCategory} News
            </h2>
            {filteredNews.length > 0 ? (
                <div className="row g-6">
                    {filteredNews.map((news, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <NewsCard {...news} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted">No news articles available in this category yet.</p>
            )}
        </div>
    );
};

export default Category;
