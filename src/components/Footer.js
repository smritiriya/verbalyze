import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer2 from "./footer2";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="footer ">
      <Container className="py-5">
        <Row>
          <Col md={3} className="footer-column text-center text-sm-start">
                      <img src={logo} alt="" style={{ width: "200px" }} />
                      
          </Col>
          <Col md={3} className="footer-column text-center text-sm-start">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Lorem, ipsum.</a>
              </li>
              <li>
                <a href="/">Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href="/">Lorem.</a>
              </li>
              <li>
                <a href="/">Lorem, ipsum dolor.</a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="footer-column text-center text-sm-start">
            <h4>Our Product</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Abouts us</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Feedbacks</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="footer-column">
            <p>Subscribe to our newsletter for updates</p>
            <Form>
              <Form.Group
                controlId="formEmail"
                style={{ display: "flex", backgroundColor: "white" }}
              >
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ backgroundColor: "white", border: "none" }}
                />
                <Button
                  style={{
                    backgroundColor: "skyblue",
                    width: "100px",
                                      color: "black",
                                      borderRadius: "0",
                    border:"none"
                  }}
                >
                  Subscribe
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12} className="text-center">
            <Footer2 />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
