// src/admin/pages/AdminDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from './AdminNewsCard';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    navigate(`/admin/${type}`);
  };

  const articles = [
    { title: 'Breaking News: AI Advances', summary: 'AI is transforming industries rapidly.' },
    { title: 'Elections 2025 Updates', summary: 'Latest results from national polls.' },
    { title: 'Market Watch', summary: 'Stock markets are reacting positively to tech growth.' },
    { title: 'Climate Report', summary: 'Global warming impact intensifies in 2025.' },
  ];

  const cardData = [
    { title: 'Total Articles', text: '120', type: 'articles' },
    { title: 'Categories', text: '8', type: 'categories' },
    { title: 'Media Files', text: '45', type: 'media' },
    { title: 'Information', text: 'About Site', type: 'information' },
    { title: 'Settings', text: 'Admin Settings', type: 'settings' },
  ];

  return (
    <div className="dashboard-container">
      <h2>Dashboard Overview</h2>

      <div className="cards-grid">
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

      <h3>Latest Articles</h3>
      <div className="articles-grid">
        {articles.map((article, idx) => (
          <NewsCard
            key={idx}
            title={article.title}
            summary={article.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
