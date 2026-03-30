import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "./Particle";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Note: Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' 
    // with actual values from EmailJS dashboard.
    emailjs
      .sendForm(
        "service_hdnzruf",
        "template_f07qc6u",
        form.current,
        "y4i7raivwnWuFSdqN"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Get in <strong className="purple">Touch</strong>
              </h1>
              <p style={{ color: "white" }}>
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>
            
            <Form ref={form} onSubmit={sendEmail} className="contact-form">
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label style={{ color: "white" }}>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  name="user_name" 
                  required 
                  className="contact-input"
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label style={{ color: "white" }}>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  name="user_email" 
                  required 
                  className="contact-input"
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formGroupMessage">
                <Form.Label style={{ color: "white" }}>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Write your message here..." 
                  name="message" 
                  required 
                  className="contact-input"
                />
              </Form.Group>
              
              <Button 
                variant="primary" 
                type="submit" 
                disabled={loading}
                className="contact-btn"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="bottom-right" theme="dark" />
    </Container>
  );
}

export default Contact;
