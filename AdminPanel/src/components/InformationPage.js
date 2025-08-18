// src/components/InformationPage.js
import React from 'react';
import './InformationPage.css';

const InformationPage = () => (
  <div className="info-page-container">
    <h2 className="info-page-title mb-4">About the System</h2>
    <p className="info-page-text">
      This dashboard helps manage content, users, and media for a news publishing platform.
    </p>

    {/* Top Row */}
    <div className="row info-page-top-row">
      <div className="col-md-6">
        <div className="info-page-card mb-4">
          <div className="info-page-card-body">
            <h5 className="info-page-card-title">🛠 Technologies Used</h5>
            <ul className="info-page-card-text">
              <li>React.js (Frontend)</li>
              <li>Vanilla Bootstrap (UI)</li>
              <li>React Router DOM (Navigation)</li>
              <li>Optional Backend: Node.js / Express.js / Firebase</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="info-page-card mb-4">
          <div className="info-page-card-body">
            <h5 className="info-page-card-title">📆 System Features</h5>
            <ul className="info-page-card-text">
              <li>Dashboard Overview</li>
              <li>Article & Category Management</li>
              <li>Media Uploads</li>
              <li>Settings & User Roles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Row */}
    <div className="row info-page-bottom-row">
      <div className="col-md-6">
        <div className="info-page-card mb-4">
          <div className="info-page-card-body">
            <h5 className="info-page-card-title">🔒 User Roles</h5>
            <ul className="info-page-card-text">
              <li><strong>Admin:</strong> Full access to all pages</li>
              <li><strong>Editor:</strong> Can manage their articles</li>
              <li><strong>Viewer:</strong> Read-only access (optional)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="info-page-card mb-4">
          <div className="info-page-card-body">
            <h5 className="info-page-card-title">📄 System Overview</h5>
            <p className="info-page-card-text">
              This News Management System is designed for admins and editors to manage articles, categories,
              user accounts, and uploaded media files in a centralized way.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InformationPage;
