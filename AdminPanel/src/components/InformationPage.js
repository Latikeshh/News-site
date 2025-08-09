import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const InformationPage = () => (
  <div style={{ marginLeft: '220px', padding: '1rem' }}>
    <h2 className="mb-4">About the System</h2>
    <p>This dashboard helps manage content, users, and media for a news publishing platform.</p>

    <Row>
      <Col md={6}>
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>📄 System Overview</Card.Title>
            <Card.Text>
              This News Management System is designed for admins and editors to manage articles, categories,
              user accounts, and uploaded media files in a centralized way.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>🛠 Technologies Used</Card.Title>
            <Card.Text>
              <ul>
                <li>React.js (Frontend)</li>
                <li>React Bootstrap (UI)</li>
                <li>React Router DOM (Navigation)</li>
                <li>Optional Backend: Node.js / Express.js / Firebase</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>🔒 User Roles</Card.Title>
            <Card.Text>
              <ul>
                <li><strong>Admin:</strong> Full access to all pages</li>
                <li><strong>Editor:</strong> Can manage articles and comments</li>
                <li><strong>Viewer:</strong> Read-only access (optional)</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>📆 System Features</Card.Title>
            <Card.Text>
              <ul>
                <li>Dashboard Overview</li>
                <li>Article & Category Management</li>
                <li>User Comments Moderation</li>
                <li>Media Uploads & Notifications</li>
                <li>Settings & User Roles</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default InformationPage;