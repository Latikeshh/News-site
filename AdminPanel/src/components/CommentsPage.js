import React, { useState } from 'react';
import { Table, Button, Container, Row, Col, Form } from 'react-bootstrap';

const CommentsPage = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'John Doe',
      article: 'Breaking News: AI Advances',
      content: 'This is amazing progress!',
      status: 'Pending',
      date: '2025-07-20',
    },
    {
      id: 2,
      user: 'Jane Smith',
      article: 'Elections 2025 Updates',
      content: 'I think the results are surprising.',
      status: 'Approved',
      date: '2025-07-21',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      article: 'Climate Report',
      content: 'Very concerning data.',
      status: 'Pending',
      date: '2025-07-22',
    },
  ]);

  const handleApprove = (id) => {
    setComments(prev =>
      prev.map(comment =>
        comment.id === id ? { ...comment, status: 'Approved' } : comment
      )
    );
  };

  const handleDelete = (id) => {
    setComments(prev => prev.filter(comment => comment.id !== id));
  };

  return (
    <div style={{ marginLeft: '220px', padding: '1rem' }}>
      <h2 className="mb-4">User Comments</h2>
      <p>Review, approve, or delete comments submitted by users on various articles.</p>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Article</th>
            <th>Comment</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map(comment => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.user}</td>
              <td>{comment.article}</td>
              <td>{comment.content}</td>
              <td>
                <span
                  className={`badge ${
                    comment.status === 'Approved' ? 'bg-success' : 'bg-warning text-dark'
                  }`}
                >
                  {comment.status}
                </span>
              </td>
              <td>{comment.date}</td>
              <td>
                {comment.status !== 'Approved' && (
                  <Button
                    size="sm"
                    variant="success"
                    className="me-2"
                    onClick={() => handleApprove(comment.id)}
                  >
                    Approve
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(comment.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CommentsPage;