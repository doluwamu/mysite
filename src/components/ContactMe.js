import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import validator from "validator";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [contactRes, setContactRes] = useState("");

  const [nameRequiredError, setNameRequiredError] = useState(false);
  const [emailRequiredError, setEmailRequiredError] = useState(false);
  const [emailInvalidError, setEmailInvalidError] = useState(false);
  const [messageRequiredError, setMessageRequiredError] = useState(false);

  const requiredMsg = "This is a required field!";

  const submitContactInfo = async (e) => {
    e.preventDefault();

    if (!name || name.length < 1) {
      return setNameRequiredError(true);
    }
    if (!email) {
      return setEmailRequiredError(true);
    }
    if (email && !validator.isEmail(email)) {
      return setEmailInvalidError(true);
    }
    if (!message) {
      return setMessageRequiredError(true);
    }

    try {
      const contactInstance = axios.create({
        baseURL: "https://doluwamu0r2.herokuapp.com",
      });

      const { data } = await contactInstance.post("/api/contact", {
        name,
        email,
        subject:
          subject && subject.length > 0 ? subject : "Just want to connect",
        message,
      });
      setContactRes(data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

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
          <Form onSubmit={submitContactInfo}>
            {contactRes && contactRes.length > 0 && (
              <div className="alert alert-success mb-2">
                <span className="me-auto">{contactRes}</span>
                <span onClick={() => setContactRes("")}>x</span>
              </div>
            )}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameRequiredError && (
                <div style={{ color: "red" }}>!{requiredMsg}*</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Email :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailRequiredError && (
                <div style={{ color: "red" }}>!{requiredMsg}*</div>
              )}
              {emailInvalidError && (
                <div style={{ color: "red" }}>!Please enter a valid email*</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">
                Subject (<span style={{ color: "red" }}>optional*</span>) :
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Message :</Form.Label>

              <Form.Control
                as="textarea"
                placeholder="Write message"
                style={{ height: "100px", resize: "none" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {messageRequiredError && (
                <div style={{ color: "red" }}>!{requiredMsg}*</div>
              )}
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
