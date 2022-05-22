import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-primary py-3" style={{ marginTop: "50px" }}>
      <Container>
        <h3 className="text-white">Doluwamu</h3>
        <i style={{ color: "#fff" }} className="fas fa-instagram"></i>
      </Container>
    </div>
  );
};

export default Footer;
