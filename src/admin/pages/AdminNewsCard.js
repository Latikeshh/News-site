// src/admin/pages/NewsCard.jsx
import React from 'react';
import './AdminNewsCard.css';

const AdminNewsCard = ({ title, summary }) => {
  return (
    <div className="news-card">
      <h4 className="news-card-title">{title}</h4>
      <p className="news-card-summary">{summary}</p>
    </div>
  );
};

export default AdminNewsCard;
