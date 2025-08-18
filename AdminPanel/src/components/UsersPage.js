// src/components/UsersPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersPage.css';

const baseUrl = "http://localhost:8000/registeration"; // ✅ keep as is

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'Editor' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${baseUrl}/getusers`);
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveUser = async () => {
    try {
      if (editingUser) {
        await axios.put(`${baseUrl}/update/${editingUser._id}`, formData);
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
        await axios.put(`${baseUrl}/users/${id}`);
        fetchUsers();
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  const handleRecover = async (id) => {
    try {
      await axios.put(`${baseUrl}/recover/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Error recovering user:", err);
    }
  };

  return (
    <div className="users-page-container">
      <div className="users-page-header">
        <h3>Users</h3>
        <button className="btn btn-primary users-page-btn" onClick={handleShowAddModal}>Add User</button>
      </div>

      <table className="users-page-table table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Password</th>
            <th>Status</th>
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
                <span className={`users-page-badge ${user.role.toLowerCase()}`}>{user.role}</span>
              </td>
              <td>{user.password}</td>
              <td>
                <span className={`users-page-badge ${user.isDeleted ? 'deactive' : 'active'}`}>
                  {user.isDeleted ? 'Deactive' : 'Active'}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2 users-page-btn"
                  onClick={() => handleShowEditModal(user)}
                  disabled={user.isDeleted}
                >
                  Edit
                </button>
                {user.isDeleted ? (
                  <button
                    className="btn btn-success btn-sm users-page-btn"
                    onClick={() => handleRecover(user._id)}
                  >
                    Recover
                  </button>
                ) : (
                  <button
                    className="btn btn-danger btn-sm users-page-btn"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="users-page-modal modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingUser ? 'Edit User' : 'Add User'}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select
                      className="form-select"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option>Admin</option>
                      <option>Editor</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary users-page-btn" onClick={handleCloseModal}>Cancel</button>
                <button className="btn btn-primary users-page-btn" onClick={handleSaveUser}>
                  {editingUser ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="users-page-modal-backdrop"></div>}
    </div>
  );
};

export default UsersPage;
