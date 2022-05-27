import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Header = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavbarColor = () => {
    const scrollValue = window.scrollY;
    if (scrollValue < 400) {
      setNavbarColor(false);
    } else {
      setNavbarColor(true);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  // console.log(window);

  // document.querySelectorAll(".nav-link").forEach((link) => {
  //   console.log(link.href, window.location.href);

  //   if (link.href !== window.location.href) {
  //     link.setAttribute("aria-current", "");
  //   } else {
  //     link.setAttribute("aria-current", "view");
  //   }
  // });

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={navbarColor ? "active py-3" : "py-3"}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="">
          <b className="fs-3">Doluwamu</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="About me" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about-me/tech">Tech</NavDropdown.Item>
              <NavDropdown.Item href="/about-me/other">Other</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-white" href="#my-projects">
              Projects
            </Nav.Link>
            <Nav.Link className="text-white me-5" href="#contact-me">
              Contact me
            </Nav.Link>
            <Nav.Link
              className="text-white  download-cv bg-primary"
              href="/docs/ADEITAN_DOLUWAMU_CV.PDF"
              target="_blank"
              rel="noreferrer"
            >
              Download my cv
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
