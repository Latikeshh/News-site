import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

const TopNavbar = ({ onLogout }) => {
  return (
    <Navbar bg="light" variant="light" className="px-4 shadow-sm" style={{ marginLeft: '220px' }}>
      <Container fluid className="position-relative">
        {/* Centered Brand */}
        <Navbar.Brand className="position-absolute top-50 start-50 translate-middle text-center fw-bold">
          News Admin Dashboard
        </Navbar.Brand>

        {/* Logout Button on Right */}
        <div className="ms-auto">
          <Button variant="outline-dark" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
