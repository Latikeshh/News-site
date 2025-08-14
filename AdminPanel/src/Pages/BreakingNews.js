import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BreakingNews.css"; // external css

export default function BreakingNews() {
  const [breakingList, setBreakingList] = useState([]);
  const [newBreaking, setNewBreaking] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const API_URL = "http://localhost:8000/headline"; // base route

  // Fetch all for admin
  const fetchBreakingNews = async () => {
    try {
      const res = await axios.get(`${API_URL}/breaking/admin`);
      setBreakingList(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBreakingNews();
  }, []);

  // Add breaking news
  const handleAdd = async () => {
    if (!newBreaking.trim()) return alert("Please enter breaking news text");
    try {
      await axios.post(`${API_URL}/addbreaking`, { breaking: newBreaking });
      setNewBreaking("");
      fetchBreakingNews();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit breaking news
  const handleEdit = async (id) => {
    try {
      await axios.put(`${API_URL}/breaking/${id}`, { breaking: editText });
      setEditId(null);
      setEditText("");
      fetchBreakingNews();
    } catch (err) {
      console.error(err);
    }
  };

  // Soft delete
  const handleSoftDelete = async (id) => {
    try {
      await axios.put(`${API_URL}/breaking/softdelete/${id}`);
      fetchBreakingNews();
    } catch (err) {
      console.error(err);
    }
  };

  // Recover
  const handleRecover = async (id) => {
    try {
      await axios.put(`${API_URL}/breaking/recover/${id}`);
      fetchBreakingNews();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="main-container">
      <h2 className="mt-4">Breaking News Management</h2>

      {/* Add new breaking */}
      <div className="d-flex my-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter new breaking news"
          value={newBreaking}
          onChange={(e) => setNewBreaking(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      {/* Breaking news table */}
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Sr. No</th>
            <th>Breaking News</th>
            <th>Status</th>
            <th style={{ width: "220px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {breakingList.length > 0 ? (
            breakingList.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  {editId === item._id ? (
                    <input
                      type="text"
                      className="form-control"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  ) : (
                    item.breaking
                  )}
                </td>
                <td>
                  {item.isDeleted ? (
                    <span className="badge bg-danger">Deleted</span>
                  ) : (
                    <span className="badge bg-success">Active</span>
                  )}
                </td>
                <td>
                  {editId === item._id ? (
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => handleEdit(item._id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => {
                        setEditId(item._id);
                        setEditText(item.breaking);
                      }}
                    >
                      Edit
                    </button>
                  )}

                  {!item.isDeleted ? (
                    <button
                      className="btn btn-sm btn-danger me-2"
                      onClick={() => handleSoftDelete(item._id)}
                    >
                      Delete
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() => handleRecover(item._id)}
                    >
                      Recover
                    </button>
                  )}

                  {editId === item._id && (
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No breaking news found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
