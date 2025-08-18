// src/components/CategoriesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoriesPage.css'; // External dark glassy theme

const API_BASE = "http://localhost:8000"; // Do not change

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
      const res = await axios.get(`${API_BASE}/admin/categories`);
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
      await axios.post(`${API_BASE}/addcategory`, { name: newCategory });
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

  const handleRecover = async (id) => {
    try {
      await axios.post(`${API_BASE}/restorecategory/${id}`);
      fetchCategories();
    } catch (err) {
      console.error("Error recovering category:", err);
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
    <div className="categories-container">
      <h3 className="mb-4 text-white">Categories</h3>

      {successMsg && (
        <div className="alert alert-success">{successMsg}</div>
      )}

      <div className="card glass-card mb-4">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter new category name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary w-100" onClick={handleAddCategory}>
                Add Category
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-light" role="status"></div>
            </div>
          ) : (
            <table className="table table-dark table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category Name</th>
                  <th>Status</th>
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
                        {cat.isDeleted ? (
                          <span className="badge bg-danger">Deleted</span>
                        ) : (
                          <span className="badge bg-success">Active</span>
                        )}
                      </td>
                      <td>
                        {!cat.isDeleted ? (
                          <>
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => handleEditClick(cat)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleSoftDelete(cat._id)}
                            >
                              Delete
                            </button>
                          </>
                        ) : (
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleRecover(cat._id)}
                          >
                            Recover
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">No categories found</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content glass-card">
              <div className="modal-header bg-info text-white">
                <h5 className="modal-title">Edit Category</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button className="btn btn-success" onClick={handleUpdateCategory}>Update</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
