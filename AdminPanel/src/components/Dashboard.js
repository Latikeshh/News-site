import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Spinner, Button } from 'react-bootstrap';
import NewsCard from './NewsCard'; // Your NewsCard component
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // We'll create this file for dark + red styling

const Dashboard = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ total: 0, page: 1, limit: 10 });
  const [error, setError] = useState(null);

  // Fetch articles with pagination
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
    switch (type) {
      case 'articles':
        navigate('/articles');
        break;
      case 'categories':
        navigate('/categories');
        break;
      case 'users':
        navigate('/users');
        break;
      case 'media':
        navigate('/media');
        break;
      case 'comments':
        navigate('/comments');
        break;
      case 'notifications':
        navigate('/notifications');
        break;
      case 'information':
        navigate('/information');
        break;
      case 'settings':
        navigate('/settings');
        break;
      default:
        break;
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(pagination.total / pagination.limit)) return;
    fetchArticles(newPage, pagination.limit);
  };

  const cardData = [
    { title: 'Total Articles', text: pagination.total.toString(), bg: 'primary', type: 'articles' },
    { title: 'Categories', text: '8', bg: 'success', type: 'categories' },
    { title: 'Information', text: 'About Site', bg: 'dark', type: 'information' },
    { title: 'Settings', text: 'Admin Settings', bg: 'light', type: 'settings', textColor: 'text-dark' },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <Button
          className="add-news-btn"
          onClick={() => navigate('/create-news')}
          variant="danger"
        >
          + Add News
        </Button>
      </div>

      <Row className="mb-4">
        {cardData.map((card, idx) => (
          <Col md={3} className="mb-3" key={idx}>
            <Card
              className={`text-center shadow-sm clickable-card bg-${card.bg} ${card.textColor || 'text-white'}`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleCardClick(card.type)}
            >
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h4 className="mb-3">Latest Articles</h4>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status" />
        </div>
      ) : error ? (
        <p className="text-danger">Error: {error}</p>
      ) : articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <>
          <Row>
            {articles.map((article) => (
              <Col md={6} key={article._id} className="mb-3">
                <NewsCard
                  title={article.title}
                  summary={article.content.substring(0, 100) + '...'}
                />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Button
              variant="secondary"
              disabled={pagination.page === 1}
              onClick={() => handlePageChange(pagination.page - 1)}
            >
              Previous
            </Button>
            <span>
              Page {pagination.page} of {Math.ceil(pagination.total / pagination.limit)}
            </span>
            <Button
              variant="secondary"
              disabled={pagination.page === Math.ceil(pagination.total / pagination.limit)}
              onClick={() => handlePageChange(pagination.page + 1)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
