import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/Home.css'; // Keep your existing styles

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getnews')
      .then(res => {
        setNewsItems(res.data.data || []);
      })
      .catch(err => {
        console.error('Error fetching news:', err);
      });
  }, []);

  return (
    <div className="news-scroll-area">
      <h2 className="section-heading mb-4">Latest Headlines</h2>
      <div className="news-feed">
        {newsItems.length === 0 ? (
          <p>No news available.</p>
        ) : (
          newsItems.map((item, i) => (
            <div className="news-row" key={item._id || i}>
              {item.image && (
                <img src={item.image} alt={item.title} className="news-thumbnail" />
              )}
              <div className="news-content">
                <h5 className="news-title">{item.title}</h5>
                <p className="news-meta">
                  {new Date(item.publishedAt).toLocaleDateString()} | {item.category}
                </p>
                <p className="news-snippet">{item.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsPage;
