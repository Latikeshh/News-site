import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ViewNews.css';

const ViewNews = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [newsData, setNewsData] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    fetchData();
  }, [_id]); // refetch when navigating to another news

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/get/${_id}`);
      const userData = response.data.userData || {};
      setNewsData(userData);

      if (userData.category) {
        fetchRelated(userData.category, userData._id);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const fetchRelated = async (category, excludeId) => {
    try {
      const response = await axios.get(`http://localhost:8000/news-by-category?category=${category}`);
      const allNews = response.data || [];
      // remove current post & take only 3
      const related = allNews.filter(n => n._id !== excludeId).slice(0, 3);
      setRelatedNews(related);
    } catch (err) {
      console.error('Error fetching related news:', err);
    }
  };

  // 🔹 handle click to navigate
  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };

  if (!newsData) return <div className="loading">Loading...</div>;

  return (
    <div className="view-news-container">
      {/* ---- Main News ---- */}
      <div className="view-news-card">
        {newsData.image && (
          <div className="view-news-image-wrapper">
            <h2 className="view-news-title">{newsData.title}</h2>
            <img
              src={`http://localhost:8000/${newsData.image}`}
              alt="News"
              className="view-news-image"
            />
          </div>
        )}
        <div className="view-news-body">
          {/* <p className="view-news-meta">
            📅 {newsData.publishedAt
              ? new Date(newsData.publishedAt).toLocaleDateString('en-GB')
              : 'Not available'}
          </p> */}
          <p className="view-news-content">{newsData.content}</p>
          {/* <p className="view-news-author">✍️ {newsData.author}</p>
          <p className="view-news-category">📂 {newsData.category}</p>
          <p className="view-news-tags">🏷️ {newsData.tags}</p> */}
        </div>
      </div>

      {/* ---- Related Posts BELOW ---- */}
      {relatedNews.length > 0 && (
        <div className="related-news-section">
          <h3 className="related-title">More from {newsData.category}</h3>
          <div className="related-news-grid">
            {relatedNews.map(item => (
              <div
                key={item._id}
                className="related-news-card"
                onClick={() => handleClick(item._id)} // 🔹 navigate on click
              >
                {item.image && (
                  <img
                    src={`http://localhost:8000/${item.image}`}
                    alt={item.title}
                    className="related-news-image"
                  />
                )}
                <div className="related-news-info">
                  <h4>{item.title}</h4>
                  <p>
                    {item.publishedAt
                      ? new Date(item.publishedAt).toLocaleDateString('en-GB')
                      : ''}
                  </p>
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
