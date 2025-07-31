// src/components/ArticlesPage.js
import React, { useState } from 'react';
import { Table, Button, Container, Modal, Form } from 'react-bootstrap';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'AI in 2025', author: 'John', category: 'Technology' },
    { id: 2, title: 'Election Results', author: 'Jane', category: 'Politics' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('view'); // view, edit, add
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
    setSelectedArticle({
      ...selectedArticle,
      [e.target.name]: e.target.value,
    });
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
    <Container style={{ marginLeft: '220px', padding: '1rem' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Articles</h3>
        <Button onClick={handleAdd}>Add Article</Button>
      </div>

      <Table striped bordered hover>
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
          {articles.map((art, index) => (
            <tr key={art.id}>
              <td>{index + 1}</td>
              <td>{art.title}</td>
              <td>{art.author}</td>
              <td>{art.category}</td>
              <td>
                <Button variant="info" size="sm" className="me-2" onClick={() => handleView(art)}>View</Button>
                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(art)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(art.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'view' ? 'View Article' : modalType === 'edit' ? 'Edit Article' : 'Add Article'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalType === 'view' ? (
            <>
              <p><strong>Title:</strong> {selectedArticle?.title}</p>
              <p><strong>Author:</strong> {selectedArticle?.author}</p>
              <p><strong>Category:</strong> {selectedArticle?.category}</p>
            </>
          ) : (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={selectedArticle?.title || ''}
                  onChange={handleChange}
                  placeholder="Enter title"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={selectedArticle?.author || ''}
                  onChange={handleChange}
                  placeholder="Enter author"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={selectedArticle?.category || ''}
                  onChange={handleChange}
                  placeholder="Enter category"
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          {modalType !== 'view' && (
            <Button variant="primary" onClick={handleSave}>
              {modalType === 'edit' ? 'Update' : 'Add'}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ArticlesPage;