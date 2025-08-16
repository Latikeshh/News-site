import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BreakingNews.css';

const BreakingNews = () => {
  const [visible, setVisible] = useState(true);
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
  fetchBreakingNews(); // initial load

  const interval = setInterval(fetchBreakingNews, 2000); // every 2 sec
  return () => clearInterval(interval); // cleanup
}, []);

  const fetchBreakingNews = async () => {
    try {
      const res = await axios.get('http://localhost:8000/headline/getbreaking');

      // Check if backend sends array directly or inside .data
      const newsArray = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data.data)
        ? res.data.data
        : [];

      setHeadlines(newsArray);
    } catch (error) {
      console.error('Error fetching breaking news', error);
    }
  };

  if (!visible || headlines.length === 0) return null;

  return (
    <div className="breaking-news-bar">
      <div className="breaking-label">
        <span className="dot"></span>
        <strong>Breaking:</strong>
      </div>
      <marquee scrollamount="6" className="breaking-text">
        {headlines.map((item) => item.breaking).join(' | ')}
      </marquee>
    </div>
  );
};

export default BreakingNews;
