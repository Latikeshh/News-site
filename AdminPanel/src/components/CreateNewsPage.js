import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './CreateNewsPage.css';  // import the CSS file

const CreateNewsPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
    thumbnail: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Title and Content are required.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to create article');
      } else {
        setSuccessMsg('Article published successfully!');
        setFormData({ title: '', content: '', author: '', category: '', thumbnail: '' });
      }
    } catch (err) {
      setError('Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="create-news-container">
      <h2 className="create-news-title">Create News Article</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {successMsg && <Alert variant="success">{successMsg}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label className="form-label">Title *</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter article title"
            value={formData.title}
            onChange={handleChange}
            required
            className="form-control-dark"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="content">
          <Form.Label className="form-label">Content *</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="content"
            placeholder="Enter full article content"
            value={formData.content}
            onChange={handleChange}
            required
            className="form-control-dark"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="author">
          <Form.Label className="form-label">Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            placeholder="Author name (optional)"
            value={formData.author}
            onChange={handleChange}
            className="form-control-dark"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label className="form-label">Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Category (e.g. Politics, Sports)"
            value={formData.category}
            onChange={handleChange}
            className="form-control-dark"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="thumbnail">
          <Form.Label className="form-label">Thumbnail URL</Form.Label>
          <Form.Control
            type="text"
            name="thumbnail"
            placeholder="Image URL (optional)"
            value={formData.thumbnail}
            onChange={handleChange}
            className="form-control-dark"
          />
        </Form.Group>

        <Button variant="danger" type="submit" disabled={loading} className="btn-danger-custom">
          {loading ? 'Publishing...' : 'Publish Article'}
        </Button>
      </Form>
    </Container>
  );
};

export default CreateNewsPage;
