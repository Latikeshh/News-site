import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddArticlePage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, send to backend
    console.log('Article added:', form);
    navigate('/admin/articles');
  };

  return (
    <div className="admin-container">
      <h1>Add Article</h1>
      <form onSubmit={handleSubmit} className="modal-form">
        <label>Title:
          <input type="text" name="title" value={form.title} onChange={handleChange} />
        </label>
        <label>Author:
          <input type="text" name="author" value={form.author} onChange={handleChange} />
        </label>
        <label>Category:
          <input type="text" name="category" value={form.category} onChange={handleChange} />
        </label>
        <button className="btn btn-danger" type="submit">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticlePage;
