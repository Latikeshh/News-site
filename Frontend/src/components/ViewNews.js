import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ViewNews.css'; // External CSS file

const ViewNews = () => {
  const { _id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/get/${_id}`)
      .then((res) => setNews(res.data))
      .catch((err) => console.error('Error fetching news:', err));
  }, [_id]);

  if (!news) {
    return <p className="loading">Loading news...</p>;
  }

  return (
    <div className="view-news-container">
      <h1 className="news-title">{news.title}</h1>
      <p className="news-date">{news.date}</p>
      {news.image && (
        <img
          src={`http://localhost:5000/uploads/${news.image}`}
          alt={news.title}
          className="news-image"
        />
      )}
      <p className="news-content">{news.content}</p>
    </div>
  );
};

export default ViewNews;
