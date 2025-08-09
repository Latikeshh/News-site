// ViewNews.js
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import newsItems from '../data/newsData';
import './ViewNews.css';

const ViewNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsItems.find(item => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!news) return <div className="container py-5">News not found.</div>;

  const relatedNews = newsItems.filter(
    item => item.category === news.category && item.id !== news.id
  );

  return (
    <div className="view-news-container container py-5">
      {/* MAIN NEWS */}
      <div className="main-news mb-5">
        <h1 className="news-title">{news.title}</h1>

        <div className="news-image-wrapper">
          <img src={news.image} alt={news.title} className="news-image" />
        </div>

        <div className="news-meta">
          <span
            className="category-badge"
            onClick={() => navigate(`/category/${news.category}`)}
          >
            {news.category.toUpperCase()}
          </span>
        </div>

        <p className="news-content">{news.content}</p>
      </div>

      {/* RELATED NEWS */}
      {relatedNews.length > 0 && (
        <div className="related-news">
          <h3 className="related-heading">
            More from <span className="highlight">{news.category}</span>
          </h3>
          <div className="row g-4">
            {relatedNews.map(item => (
              <div className="col-md-4" key={item.id}>
                <div className="related-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="related-img"
                  />
                  <div className="related-body">
                    <h5 className="related-title">{item.title}</h5>
                    <p className="related-text">
                      {item.content.substring(0, 80)}...
                    </p>
                    <Link
                      to={`/news/${item.id}`}
                      className="read-more-btn"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewNews;
