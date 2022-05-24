import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-primary py-3" style={{ marginTop: "50px" }}>
      <Container className="d-flex flex-column justify-content-center align-items-center text-white">
        <h3 className="text-white">Doluwamu</h3>

        <div>
          <b
            style={{ cursor: "pointer" }}
            onClick={() =>
              window
                .open(
                  "https://www.linkedin.com/in/doluwamu-adeitan-41bab5201/",
                  "_blank",
                )
                .focus()
            }
          >
            <i className="fab fa-linkedin me-3"></i>
          </b>
          <b
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://twitter.com/Doluwamu4", "_blank").focus()
            }
          >
            <i className="fab fa-twitter me-3"></i>
          </b>

          <b
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://github.com/doluwamu", "_blank").focus()
            }
          >
            <i className="fab fa-github"></i>
          </b>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
