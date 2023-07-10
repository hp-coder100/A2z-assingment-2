import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
function Navigation({ user, logout }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>A@Z Assignment 2</Navbar.Brand>
          <Nav className="ms-auto">
            {user && <Nav.Link onClick={logout}>Logout</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
