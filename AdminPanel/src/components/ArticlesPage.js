import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./ArticlesPage.css";

const ArticlesPage = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    showUsers();
  }, []);

  const showUsers = () => {
    axios.get('http://localhost:8000/adminnews')
      .then(res => {
        setUserData(res.data.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // Soft delete (set isDeleted: true)
  const deletedata = (id) => {
    axios.put(`http://localhost:8000/deleteuser/${id}`)
      .then(res => {
        alert(res.data.message);
        showUsers();
      })
      .catch(error => {
        console.error('Error Deleting User:', error);
      });
  };

  // Recover deleted item (set isDeleted: false)
  const recoverUser = (id) => {
    axios.put(`http://localhost:8000/recoveruser/${id}`)
      .then(res => {
        alert(res.data.message);
        showUsers();
      })
      .catch(error => {
        console.error('Error Recovering User:', error);
      });
  };

  return (
    <div className="articles-container">
      <div className="articles-header">
        <h2>Articles</h2>
      </div>

      <table className="articles-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Published</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty-msg">
                No articles found
              </td>
            </tr>
          ) : (
            userData.map((art, index) => (
              <tr key={art._id}>
                <td>{index + 1}</td>
                <td>{art.title}</td>
                <td>{art.author}</td>
                <td>{art.category}</td>
                <td>
                  {art.publishedAt
                    ? new Date(art.publishedAt).toLocaleDateString("en-GB")
                    : "—"}
                </td>
                <td>
                  {art.isDeleted ? (
                    <span style={{ color: "red" }}>Deleted</span>
                  ) : (
                    <span style={{ color: "green" }}>Not Deleted</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn-warning"
                    onClick={() => navigate(`/update/${art._id}`)}
                    disabled={art.isDeleted}
                  >
                    ✏ Edit
                  </button>
                  {art.isDeleted ? (
                    <button
                      className="btn-success"
                      onClick={() => recoverUser(art._id)}
                    >
                      ♻ Recover
                    </button>
                  ) : (
                    <button
                      className="btn-danger"
                      onClick={() => deletedata(art._id)}
                    >
                      🗑 Delete
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ArticlesPage;
