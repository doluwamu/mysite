import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-header header">
        <h3>Projects</h3>
        <div className="proj-head-line"></div>
      </div>

      <Row className="d-flex justify-content-center align-items-start">
        <Col
          sm={12}
          md={6}
          lg={4}
          //   xl={3}
          //   className="d-flex justify-content-evenly align-items-center"
        >
          <Card className="my-3 rounded">
            <Card.Img variant="top" src="/images/img.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col
          sm={12}
          md={6}
          lg={4}
          //   xl={3}
          //   className="d-flex justify-content-evenly align-items-center"
        >
          <Card className="my-3  rounded">
            <Card.Img variant="top" src="/images/img.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col
          sm={12}
          md={6}
          lg={4}
          //   xl={3}
          //   className="d-flex justify-content-evenly align-items-center"
        >
          <Card className="my-3  rounded">
            <Card.Img variant="top" src="/images/img.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
