import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
    axios.get('http://localhost:8000/findnews')
      .then(res => {
        setUserData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deletedata = (id) => {
    axios.delete(`http://localhost:8000/deleteuser/${id}`)
      .then(res => {
        console.log('User Deleted:', res.data);
        alert('User Deleted');
        showUsers();
      })
      .catch(error => {
        console.error('Error Deleting User:', error);
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty-msg">
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
                  <button
                    className="btn-warning"
                   onClick={() => {
                          navigate(`/update/${art._id}`)
                        }}
                  >
                    ✏ Edit
                  </button>
                  <button
                    className="btn-danger"
                    onClick={() => deletedata(art._id)}
                  >
                    🗑 Delete
                  </button>
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
