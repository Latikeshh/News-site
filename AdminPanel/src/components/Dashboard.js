import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard'; // Your NewsCard component
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Dark + red styling

const Dashboard = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ total: 0, page: 1, limit: 10 });
  const [error, setError] = useState(null);

  const fetchArticles = async (page = 1, limit = 10) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/news?page=${page}&limit=${limit}`);
      if (!res.ok) throw new Error('Failed to fetch articles');
      const data = await res.json();
      setArticles(data.data || []);
      setPagination(data.pagination || { total: 0, page: 1, limit: 10 });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(pagination.page, pagination.limit);
    // eslint-disable-next-line
  }, []);

  const handleCardClick = (type) => {
    const routes = {
      articles: '/articles',
      categories: '/categories',
      users: '/users',
      media: '/media',
      comments: '/comments',
      notifications: '/notifications',
      information: '/information',
      settings: '/settings'
    };
    if (routes[type]) navigate(routes[type]);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(pagination.total / pagination.limit)) return;
    fetchArticles(newPage, pagination.limit);
  };

  const cardData = [
    { title: 'Total Articles', text: pagination.total.toString(), type: 'articles' },
    { title: 'Categories', text: '8', type: 'categories' },
    { title: 'Information', text: 'About Site', type: 'information' },
    { title: 'Settings', text: 'Admin Settings', type: 'settings' },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <button
          className="add-news-btn"
          onClick={() => navigate('/addNews')}
        >
          + Add News
        </button>
      </div>

      <div className="card-grid">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="dashboard-card"
            onClick={() => handleCardClick(card.type)}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <h4 className="section-title">Latest Articles</h4>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : articles.length === 0 ? (
        <p className="no-data">No articles found.</p>
      ) : (
        <>
          <div className="articles-grid">
            {articles.map((article) => (
              <div key={article._id} className="article-card">
                <NewsCard
                  title={article.title}
                  summary={article.content.substring(0, 100) + '...'}
                />
              </div>
            ))}
          </div>
          <div className="pagination-controls">
            <button
              className="pagination-btn"
              disabled={pagination.page === 1}
              onClick={() => handlePageChange(pagination.page - 1)}
            >
              Previous
            </button>
            <span>
              Page {pagination.page} of {Math.ceil(pagination.total / pagination.limit)}
            </span>
            <button
              className="pagination-btn"
              disabled={pagination.page === Math.ceil(pagination.total / pagination.limit)}
              onClick={() => handlePageChange(pagination.page + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
