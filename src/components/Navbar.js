import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <b>Doluwamu</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" href="#">
              About me
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Projects
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Contact me
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Download my cv
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
