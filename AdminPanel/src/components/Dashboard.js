import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Dark + red styling

const Dashboard = () => {
  const navigate = useNavigate();

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

  const cardData = [
    { title: 'Total Articles', text: '0', type: 'articles' },
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
    </div>
  );
};

export default Dashboard;
