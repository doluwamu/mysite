import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="about-me" id="about-me">
      <div className="about-header">
        <h3>About me</h3>
        <div className="abt-head-line"></div>
      </div>

      <Row className="d-flex justify-content-around abt-me-divs">
        <Col sm={9} md={5} lg={5} className="abt-tech abt-gen">
          <Link to="/about-me/tech">
            <h1>Tech</h1>
            <div className="abt-tech-line"></div>
          </Link>
        </Col>

        <Col sm={9} md={5} lg={5} className="abt-other abt-gen">
          <Link to="/about-me/other">
            <h1>Other</h1>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
