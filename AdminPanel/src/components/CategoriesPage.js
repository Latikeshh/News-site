// src/components/CategoriesPage.js
import React, { useState } from 'react';
import {
  Table,
  Container,
  Button,
  Form,
  Row,
  Col,
  Modal,
  Card,
} from 'react-bootstrap';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Politics' },
    { id: 3, name: 'Sports' },
    { id: 4, name: 'Business' },
    { id: 5, name: 'Entertainment' },
  ]);

  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState(null);
  const [editName, setEditName] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAddCategory = () => {
    if (newCategory.trim() === '') return;

    const newCat = {
      id: categories.length + 1,
      name: newCategory.trim(),
    };
    setCategories([...categories, newCat]);
    setNewCategory('');
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const handleEditClick = (cat) => {
    setEditCategory(cat);
    setEditName(cat.name);
    setShowEditModal(true);
  };

  const handleUpdateCategory = () => {
    setCategories(
      categories.map((cat) =>
        cat.id === editCategory.id ? { ...cat, name: editName } : cat
      )
    );
    setShowEditModal(false);
    setEditCategory(null);
  };

  return (
    <Container style={{ marginLeft: '220px', padding: '1rem' }}>
      <h3 className="mb-4">Categories</h3>

      <Card className="shadow-sm mb-4 bg-light">
        <Card.Body>
          {/* Add New Category */}
          <Row className="align-items-center mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Enter new category name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </Col>
            <Col md={3}>
              <Button variant="primary" onClick={handleAddCategory}>
                Add Category
              </Button>
            </Col>
          </Row>

          {/* Table */}
          <Table striped bordered hover responsive className="bg-white">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Category Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, index) => (
                <tr key={cat.id}>
                  <td>{index + 1}</td>
                  <td>{cat.name}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEditClick(cat)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(cat.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton className="bg-info text-white">
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpdateCategory}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CategoriesPage;
