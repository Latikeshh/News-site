// src/components/CategoriesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  Container,
  Button,
  Form,
  Row,
  Col,
  Modal,
  Card,
  Spinner,
  Alert
} from 'react-bootstrap';

const API_BASE = "http://localhost:8000"; // change if backend URL differs

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState(null);
  const [editName, setEditName] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/category`);
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (newCategory.trim() === '') return;
    try {
      await axios.post(`${API_BASE}/addcategory`, { name: newCategory, isDeleted: false });
      setNewCategory('');
      setSuccessMsg('Category added successfully');
      fetchCategories();
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  const handleSoftDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await axios.post(`${API_BASE}/softdeletecat/${id}`);
      fetchCategories();
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };

  const handleEditClick = (cat) => {
    setEditCategory(cat);
    setEditName(cat.name);
    setShowEditModal(true);
  };

  const handleUpdateCategory = async () => {
    try {
      await axios.put(`${API_BASE}/updatecategory/${editCategory._id}`, { name: editName });
      setShowEditModal(false);
      setEditCategory(null);
      fetchCategories();
    } catch (err) {
      console.error("Error updating category:", err);
    }
  };

  return (
    <Container style={{ marginLeft: '220px', padding: '1rem' }}>
      <h3 className="mb-4">Categories</h3>

      {successMsg && (
        <Alert variant="success">{successMsg}</Alert>
      )}

      <Card className="shadow-sm mb-4 bg-light">
        <Card.Body>
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

          {loading ? (
            <Spinner animation="border" />
          ) : (
            <Table striped bordered hover responsive className="bg-white">
              <thead className="table-primary">
                <tr>
                  <th>#</th>
                  <th>Category Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.length > 0 ? (
                  categories.map((cat, index) => (
                    <tr key={cat._id}>
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
                          onClick={() => handleSoftDelete(cat._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">
                      No categories found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

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
