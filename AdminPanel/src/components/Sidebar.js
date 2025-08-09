import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-dark text-white p-3 vh-100 position-fixed" style={{ width: '220px' }}>
    <h4 className="mb-4">News Admin</h4>
    <Nav defaultActiveKey="/dashboard" className="flex-column">
      <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>
      <Nav.Link as={Link} to="/categories" className="text-white">Categories</Nav.Link>
      <Nav.Link as={Link} to="/articles" className="text-white">Articles</Nav.Link>
      <Nav.Link as={Link} to="/users" className="text-white">Users</Nav.Link>
      {/*<Nav.Link as={Link} to="/media" className="text-white">Media</Nav.Link>*/}
      <Nav.Link as={Link} to="/comments" className="text-white">Comments</Nav.Link>
      <Nav.Link as={Link} to="/notifications" className="text-white">Notifications</Nav.Link>
      <Nav.Link as={Link} to="/settings" className="text-white">Settings</Nav.Link>
      <Nav.Link as={Link} to="/information" className="text-white">Information</Nav.Link>
    </Nav>
  </div>
);

export default Sidebar;