import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../data/newsData';
import NewsCard from '../components/NewsCard';
import './Category.css';
import Sidebar from '../components/Sidebar';

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
    <div className="category-layout">
      {/* Main Content */}
      <div className="category-main">
        <h2 className="category-heading text-capitalize">
          {formattedCategory} News
        </h2>

        {filteredNews.length > 0 ? (
          <div className="news-list">
            {filteredNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        ) : (
          <p className="no-news-msg">
            No news articles available in this category yet.
          </p>
        )}
      </div>

      {/* Sidebar */}
      <aside className="category-sidebar">
        <Sidebar />
      </aside>
    </div>
  );
};

export default Category;
