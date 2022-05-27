import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Header = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavbarColor = () => {
    const scrollValue = window.scrollY;
    if (scrollValue < 490) {
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
            <Nav.Item className="text-white">
              <Nav.Link href="/#about-me" className="about-me-link">
                About me
              </Nav.Link>
            </Nav.Item>
            <NavDropdown className="text-white dropdown-icon">
              <NavDropdown.ItemText>
                <Link to="/about-me/tech" className="dropdown-link">
                  Tech
                </Link>
              </NavDropdown.ItemText>
              <NavDropdown.ItemText>
                <Link to="/about-me/other" className="dropdown-link">
                  Other
                </Link>
              </NavDropdown.ItemText>
            </NavDropdown>
            <Nav.Link className="text-white" href="#my-projects">
              Projects
            </Nav.Link>
            <Nav.Link className="text-white me-5" href="#contact-me">
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
