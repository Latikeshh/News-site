import React, { useState } from 'react';
import { ListGroup, Badge, Button } from 'react-bootstrap';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'New article "AI in 2025" has been published.',
      date: '2025-07-23',
      read: false,
      type: 'info',
    },
    {
      id: 2,
      message: 'User John Doe commented on "Climate Report".',
      date: '2025-07-22',
      read: false,
      type: 'comment',
    },
    {
      id: 3,
      message: 'Server maintenance scheduled for July 26.',
      date: '2025-07-21',
      read: true,
      type: 'alert',
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div style={{ marginLeft: '220px', padding: '1rem' }}>
      <h2 className="mb-4">Notifications</h2>
      <p>View and manage alerts and notifications sent by the system.</p>

      <ListGroup>
        {notifications.map((note) => (
          <ListGroup.Item
            key={note.id}
            className="d-flex justify-content-between align-items-start"
            style={{ backgroundColor: note.read ? '#f8f9fa' : '#e9f7ff' }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                {note.message}
                {!note.read && (
                  <Badge bg="primary" className="ms-2">
                    New
                  </Badge>
                )}
              </div>
              <small className="text-muted">{note.date}</small>
            </div>
            <div>
              {!note.read && (
                <Button
                  size="sm"
                  variant="outline-success"
                  className="me-2"
                  onClick={() => markAsRead(note.id)}
                >
                  Mark as Read
                </Button>
              )}
              <Button
                size="sm"
                variant="outline-danger"
                onClick={() => deleteNotification(note.id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default NotificationsPage;