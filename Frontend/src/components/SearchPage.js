import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchPage.css';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");
  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };

  useEffect(() => {
    if (query) {
      setLoading(true);
      axios.get(`http://localhost:8000/searchNews?q=${query}`)
        .then(res => {
          setResults(res.data.data || []);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error searching news:", err);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="search-page">
      <h2 className="results-title">Search Results for "{query}"</h2>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : results.length > 0 ? (
        <div className="news-list">
          {results.map((news) => (
            <div key={news._id} className="news-card"
              onClick={() => handleClick(news._id)}>
              {news.image && (
                <img className="news-image" src={`http://localhost:8000/${news.image}`} alt={news.title} />
              )}
              <div className="news-info">
                <h3 className="news-title">
                  <Link to={`/news/${news._id}`}>{news.title}</Link>
                </h3>
                <p className="news-snippet">{news.content.substring(0, 180)}...</p>
                <div className="news-meta">
                  <span>🏷 {news.category}</span>
                  <span>✍ {news.author}</span>
                  {news.publishedAt && (
                    <span>📅 {new Date(news.publishedAt).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
