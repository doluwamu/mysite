import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-header header">
        <h3>Projects</h3>
        <div className="proj-head-line"></div>
      </div>

      <Row className="d-flex justify-content-left align-items-start">
        {projects.map((project) => (
          <Col
            sm={11}
            md={6}
            lg={4}
            key={project.id}
            //   xl={3}
            //   className="d-flex justify-content-evenly align-items-center"
          >
            <Card className="my-3 project-card rounded" bg="#04041b">
              <Card.Img
                style={{ height: "210px", cursor: "pointer" }}
                onClick={() => window.open(project.siteUrl, "_blank").focus()}
                variant="top"
                src={project.image}
              />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open(project.github, "_blank").focus()}
                  className="btn btn-primary"
                >
                  <i className="fab fa-github"></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
