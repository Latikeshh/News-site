import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArticlesPage.css';

const ArticlesPage = () => {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([
    { id: 1, title: 'AI in 2025', author: 'John', category: 'Technology' },
    { id: 2, title: 'Election Results', author: 'Jane', category: 'Politics' },
  ]);

  const handleView = (article) => {
    alert(`Title: ${article.title}\nAuthor: ${article.author}\nCategory: ${article.category}`);
  };

  const handleEdit = (article) => {
    navigate(`/admin/articles/edit/${article.id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter((art) => art.id !== id));
    }
  };

  const handleAdd = () => {
    navigate('/admin/articles/add');
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Manage Articles</h1>
        <button className="btn btn-danger" onClick={handleAdd}>Add New</button>
      </div>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article.id}>
                <td>{index + 1}</td>
                <td>{article.title}</td>
                <td>{article.author}</td>
                <td>{article.category}</td>
                <td>
                  <button className="btn btn-secondary" onClick={() => handleView(article)}>View</button>
                  <button className="btn btn-warning" onClick={() => handleEdit(article)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(article.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticlesPage;
