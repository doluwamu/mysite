import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="contact-header">
        <h3>Contact me</h3>
        <div className="cnt-head-line"></div>
      </div>

      <Row
        style={{ marginTop: "60px" }}
        className="d-flex justify-content-around"
      >
        <Col sm={10} md={5} className="p-3">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Subject:</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Message:</Form.Label>

              <Form.Control
                as="textarea"
                placeholder="Write message"
                style={{ height: "100px", resize: "none" }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={4} className="p-3 contact-img-col">
          <Image
            className="contact-image"
            src="/images/call4.avif"
            alt="call"
            fluid
          />
        </Col>
      </Row>
    </div>
  );
};

export default ContactMe;
