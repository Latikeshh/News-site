import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ArticlesPage.css";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getNews");
      setArticles(res.data.data || []);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  const handleDelete = async (_id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await axios.put(`http://localhost:8000/deleteNews/${_id}`);
        loadArticles();
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  return (
    <div className="articles-container">
      <div className="articles-header">
        <h2>Articles</h2>
      </div>

      <table className="articles-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Published</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty-msg">
                No articles found
              </td>
            </tr>
          ) : (
            articles.map((art, index) => (
              <tr key={art._id}>
                <td>{index + 1}</td>
                <td>{art.title}</td>
                <td>{art.author}</td>
                <td>{art.category}</td>
                <td>
                  {art.publishedAt
                    ? new Date(art.publishedAt).toLocaleDateString("en-GB")
                    : "—"}
                </td>
                <td>
                  <button
                    className="btn-info"
                    onClick={() => navigate(`/articles/${art._id}`)}
                  >
                    👁 View
                  </button>
                  <button
                    className="btn-warning"
                    onClick={() => navigate(`/articles/${art._id}/edit`)}
                  >
                    ✏ Edit
                  </button>
                  <button
                    className="btn-danger"
                    onClick={() => handleDelete(art._id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ArticlesPage;
