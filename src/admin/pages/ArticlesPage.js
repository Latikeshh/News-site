import React, { useState } from 'react';
import './ArticlesPage.css';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'AI in 2025', author: 'John', category: 'Technology' },
    { id: 2, title: 'Election Results', author: 'Jane', category: 'Politics' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('view');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleView = (article) => {
    setSelectedArticle(article);
    setModalType('view');
    setShowModal(true);
  };

  const handleEdit = (article) => {
    setSelectedArticle(article);
    setModalType('edit');
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter((art) => art.id !== id));
    }
  };

  const handleAdd = () => {
    setSelectedArticle({ title: '', author: '', category: '' });
    setModalType('add');
    setShowModal(true);
  };

  const handleChange = (e) => {
    setSelectedArticle({ ...selectedArticle, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (modalType === 'edit') {
      setArticles(articles.map((art) => (art.id === selectedArticle.id ? selectedArticle : art)));
    } else if (modalType === 'add') {
      const newArticle = {
        ...selectedArticle,
        id: articles.length > 0 ? articles[articles.length - 1].id + 1 : 1,
      };
      setArticles([...articles, newArticle]);
    }
    setShowModal(false);
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

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <div className="modal-header">
              <h2>{modalType === 'view' ? 'View Article' : modalType === 'edit' ? 'Edit Article' : 'Add Article'}</h2>
              <button className="btn-close" onClick={() => setShowModal(false)}>&times;</button>
            </div>

            <div className="modal-content">
              {modalType === 'view' ? (
                <div className="modal-view">
                  <p><strong>Title:</strong> {selectedArticle.title}</p>
                  <p><strong>Author:</strong> {selectedArticle.author}</p>
                  <p><strong>Category:</strong> {selectedArticle.category}</p>
                </div>
              ) : (
                <form className="modal-form">
                  <label>
                    Title:
                    <input type="text" name="title" value={selectedArticle.title} onChange={handleChange} />
                  </label>
                  <label>
                    Author:
                    <input type="text" name="author" value={selectedArticle.author} onChange={handleChange} />
                  </label>
                  <label>
                    Category:
                    <input type="text" name="category" value={selectedArticle.category} onChange={handleChange} />
                  </label>
                </form>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              {modalType !== 'view' && (
                <button className="btn btn-danger" onClick={handleSave}>
                  {modalType === 'edit' ? 'Update' : 'Add'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;
