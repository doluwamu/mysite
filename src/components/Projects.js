import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="projects" id="my-projects">
      <div
        className="projects-header header"
        data-aos="fade-up"
        data-aos-once={true}
      >
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
            <Card
              className="my-3 project-card rounded"
              bg="#04041b"
              data-aos="fade-up"
              data-aos-once={true}
            >
              <a href={project.siteUrl} target="_blank" rel="noreferrer">
                <Card.Img
                  style={{ height: "210px", cursor: "pointer" }}
                  variant="top"
                  src={project.image}
                />
              </a>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "pointer" }}
                  className="btn btn-primary"
                >
                  <i className="fab fa-github"></i>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
