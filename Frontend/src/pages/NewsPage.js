import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NewsPage.css';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/findnews')
      .then(res => {
        const filtered = (res.data.data || []).filter(
          article => article.category?.toLowerCase() === "world"
        );
        setNews(filtered.slice(0, 5)); // फक्त पहिल्या 5 news दाखवायच्या
      })
      .catch(err => console.error(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };

  const handleViewMore = () => {
    navigate('/category/world'); // world news page
  };

  return (
    <div className="news-scroll-area">
      <h2 className="section-heading">Latest Headline</h2>
      <div className="news-feed">
        {news.length === 0 ? (
          <p className="dash-empty-message">No world news articles available.</p>
        ) : (
          news.map(article => {
            const imageUrl = article.image
              ? `http://localhost:8000/${article.image}`
              : 'placeholder.jpg';

            return (
              <div
                className="news-row1"
                key={article._id}
                onClick={() => handleClick(article._id)}
                style={{ cursor: 'pointer' }}
              >
                <img src={imageUrl} alt={article.title} className="news-thumbnail1" />
                <div className="news-inline">
                  <p className="news-title">{article.title || 'Untitled'}</p>
                  <p className="news-meta">
                    📅 {article.publishedAt
                      ? new Date(article.publishedAt).toLocaleDateString('en-GB')
                      : 'Unknown date'}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* View More Button */}
      {news.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button
            onClick={handleViewMore}
            style={{
              background: '#007bff',
              color: 'white',
              padding: '0.6rem 1.2rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            View More →
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsPage;
