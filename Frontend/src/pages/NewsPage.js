import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NewsPage.css';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/findnews')
      .then(res => setNews(res.data.data || []))
      .catch(err => console.error(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="news-scroll-area">
      <h2 className="section-heading">Latest Headlines</h2>
      <div className="news-feed">
        {news.length === 0 ? (
          <p className="dash-empty-message">No news articles available.</p>
        ) : (
          news.map(article => {
            const imageUrl = article.image
              ? `http://localhost:8000/${article.image}`
              : 'placeholder.jpg';

            return (
              <div
                className="news-row"
                key={article._id}
                onClick={() => handleClick(article._id)}
                style={{ cursor: 'pointer' }}
              >
                <img src={imageUrl} alt={article.title} className="news-thumbnail" />
                <div className="news-inline">
                  <p className="news-title">{article.title || 'Untitled'}</p>
                  <p className="news-meta">
                    📅 {article.publishedAt
                      ? new Date(article.publishedAt).toLocaleDateString('en-GB')
                      : 'Unknown date'}
                  </p>
                  <p className="news-snippet">{article.content || 'No content available'}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default NewsPage;
