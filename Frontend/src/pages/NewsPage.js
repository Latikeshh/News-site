import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsPage.css'; // Make sure this is imported LAST

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    axios.get('http://localhost:8000/getNews')
      .then(res => setNews(res.data.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="news-scroll-area">
      <h2 className="section-heading">Latest Headlines</h2>

      <div className="news-feed">
        {news.length === 0 ? (
          <p className="dash-empty-message">No news articles available.</p>
        ) : (
          news.map((article) => (
            <div className="news-row" key={article._id}>
              {/* If you have an image, uncomment below */}
              {/* <img
                className="news-thumbnail"
                src={article.imageUrl || 'placeholder.jpg'}
                alt={article.title || 'News image'}
              /> */}

              <div className="news-content">
                <h3 className="news-title">{article.title || 'Untitled'}</h3>

                <p className="news-meta">
                  🖊 {article.author || 'Unknown author'} | 📅 {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString('en-GB')
                    : ''}
                </p>

                <p className="news-snippet">{article.content || 'No content available.'}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsPage;
