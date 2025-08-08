import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArticlesPage.css'; // Reuse same theme

const AddArticlePage = ({ onAddArticle }) => {
  const navigate = useNavigate();
  const [newArticle, setNewArticle] = useState({
    title: '',
    author: '',
    category: ''
  });

  const handleChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddArticle) {
      onAddArticle(newArticle);
    }
    navigate('/admin/articles'); // Go back to articles list
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Add New Article</h1>
        <button className="btn btn-secondary" onClick={() => navigate('/admin/articles')}>Back</button>
      </div>

      <div className="admin-form">
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Title:
            <input type="text" name="title" value={newArticle.title} onChange={handleChange} required />
          </label>
          <label>
            Author:
            <input type="text" name="author" value={newArticle.author} onChange={handleChange} required />
          </label>
          <label>
            Category:
            <input type="text" name="category" value={newArticle.category} onChange={handleChange} required />
          </label>

          <div className="modal-footer">
            <button type="submit" className="btn btn-danger">Add Article</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArticlePage;
