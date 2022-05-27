import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-primary py-3" style={{ marginTop: "50px" }}>
      <Container className="d-flex flex-column justify-content-center align-items-center text-white">
        <h3 className="text-white">Doluwamu</h3>

        <div>
          <a
            href={"https://www.linkedin.com/in/doluwamu-adeitan-41bab5201/"}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin me-3"></i>
          </a>

          <a
            href={"https://twitter.com/Doluwamu4"}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter me-3"></i>
          </a>

          <a
            href="https://github.com/doluwamu"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
