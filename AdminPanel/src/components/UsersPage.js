// src/components/UsersPage.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Badge, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const baseUrl = "http://localhost:8000/registeration";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', password:'' ,role: 'Editor' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${baseUrl}/users`);
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleShowAddModal = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', password: '', role: 'Editor' });
    setShowModal(true);
  };

  const handleShowEditModal = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email, password: user.password, role: user.role });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingUser(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveUser = async () => {
    try {
      if (editingUser) {
        await axios.put(`${baseUrl}/users/${editingUser._id}`, formData);
      } else {
        await axios.post(`${baseUrl}/register`, formData);
      }
      fetchUsers();
      handleCloseModal();
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${baseUrl}/users/${id}`);
        fetchUsers();
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  return (
    <Container style={{ marginLeft: '220px', padding: '1rem' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Users</h3>
        <Button variant="primary" onClick={handleShowAddModal}>Add User</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Password</th>
            <th>Status</th> {/* 👈 New column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Badge bg={user.role === 'Admin' ? 'danger' : 'secondary'}>
                  {user.role}
                </Badge>
              </td>
              <td>{user.password}</td>
              <td>
                {user.isDeleted ? (
                  <Badge bg="danger">Deleted</Badge>
                ) : (
                  <Badge bg="success">Active</Badge>
                )}
              </td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleShowEditModal(user)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editingUser ? 'Edit User' : 'Add User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option>Admin</option>
                <option>Editor</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            {editingUser ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UsersPage;
