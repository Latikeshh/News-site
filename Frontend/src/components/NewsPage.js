import React from 'react';
import newsItems from '../data/newsData';
import '../pages/Home.css'; // Or keep using Home.css if combined

const NewsPage = () => {
  return (
    <div className="news-scroll-area">
      <h2 className="section-heading mb-4">Latest Headlines</h2>
      <div className="news-feed">
        {newsItems.map((item, i) => (
          <div className="news-row" key={i}>
            <img src={item.image} alt={item.title} className="news-thumbnail" />
            <div className="news-content">
              <h5 className="news-title">{item.title}</h5>
              <p className="news-meta">{item.date} | {item.category}</p>
              <p className="news-snippet">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
