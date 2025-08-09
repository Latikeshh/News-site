import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NewsCard from './NewsCard';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

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

  const articles = [
    { title: 'Breaking News: AI Advances', summary: 'AI is transforming industries rapidly.' },
    { title: 'Elections 2025 Updates', summary: 'Latest results from national polls.' },
    { title: 'Market Watch', summary: 'Stock markets are reacting positively to tech growth.' },
    { title: 'Climate Report', summary: 'Global warming impact intensifies in 2025.' },
  ];

  const cardData = [
    { title: 'Total Articles', text: '120', bg: 'primary', type: 'articles' },
    { title: 'Categories', text: '8', bg: 'success', type: 'categories' },
    { title: 'Active Users', text: '54', bg: 'info', type: 'users' },
    { title: 'Media Files', text: '45', bg: 'warning', type: 'media' },
    { title: 'Comments', text: '230', bg: 'danger', type: 'comments' },
    { title: 'Notifications', text: '12', bg: 'secondary', type: 'notifications' },
    { title: 'Information', text: 'About Site', bg: 'dark', type: 'information' },
    { title: 'Settings', text: 'Admin Settings', bg: 'light', type: 'settings', textColor: 'text-dark' },
  ];

  return (
    <div style={{ marginLeft: '220px', padding: '1rem' }}>
      <h2 className="mb-4">Dashboard Overview</h2>

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
      <Row>
        {articles.map((article, idx) => (
          <Col md={6} key={idx} className="mb-3">
            <NewsCard title={article.title} summary={article.summary} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
