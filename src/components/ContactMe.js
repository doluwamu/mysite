import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Image, Row, Alert } from "react-bootstrap";
import validator from "validator";
import { firstLetterToUpperCase } from "../helpers/wordHelpers";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [contactRes, setContactRes] = useState("");
  const [contactErr, setContactErr] = useState("");

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
      setContactRes(firstLetterToUpperCase(data.message));
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      if (err.message.includes("Network")) {
        setContactErr("Ooops, check your internet connection :(");
      } else {
        setContactErr("Ooops, something went wrong :(");
      }
    }
  };

  return (
    <div className="contact-me" id="contact-me">
      <div className="contact-header" data-aos="fade-up" data-aos-once={true}>
        <h3>Contact me</h3>
        <div className="cnt-head-line"></div>
      </div>

      <Row
        style={{ marginTop: "60px" }}
        className="d-flex justify-content-around"
      >
        <Col
          sm={10}
          md={5}
          className="p-3"
          data-aos="fade-up"
          data-aos-once={true}
        >
          <Form onSubmit={submitContactInfo}>
            {contactRes && contactRes.length > 0 && (
              <Alert
                className="mb-2"
                variant="success"
                onClose={() => setContactRes("")}
                dismissible
              >
                <span className="cancel-icon ">{contactRes}</span>
              </Alert>
            )}

            {contactErr && contactErr.length > 0 && (
              <Alert
                className="mb-2"
                variant="danger"
                onClose={() => setContactErr("")}
                dismissible
              >
                <span className="cancel-icon ">{contactErr}</span>
              </Alert>
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

        <Col
          md={4}
          className="p-3 contact-img-col"
          data-aos="fade-up"
          data-aos-once={true}
        >
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
