import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="py-3" variant="dark">
      <Container>
        <Navbar.Brand href="">
          <b className="fs-3">Doluwamu</b>
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
            <Nav.Link className="text-white me-5" href="#">
              Contact me
            </Nav.Link>
            <Nav.Link className="text-white  download-cv bg-primary" href="#">
              Download my cv
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
