import React from 'react';
import { Navbar, Nav, Container, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand><strong>NEWS</strong></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/world">World</Nav.Link>
          <Nav.Link as={Link} to="/politics">Politics</Nav.Link>
          <Nav.Link as={Link} to="/business">Business</Nav.Link>
        </Nav>
        <Form inline="true">
          <InputGroup>
            <Form.Control type="text" placeholder="Search..." />
            <InputGroup.Text>🔍</InputGroup.Text>
          </InputGroup>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;