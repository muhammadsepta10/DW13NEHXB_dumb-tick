import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#5d5b6a",
          position: "relative",
          marginTop: -200
        }}
        className=" text-white mt-5 position-relative"
      >
        <Container>
          <Row className="px-5 py-4 h6">
            <Col>
              <div className="my-auto">
                <p className="h2">Dumb-Tick</p>
                <p>
                  dumb-tick is web-bases platforrm thath provides for various
                  events around music science and programming
                </p>
              </div>
            </Col>
            <Col className="ml-5">
              <p style={{ marginBottom: 5 }}>Links</p>
              <p style={{ marginBottom: 20 }}>
                <Link
                  style={{ textDecoration: "none" }}
                  className="text-white"
                  to="/about"
                >
                  About Us
                </Link>
              </p>
              <p style={{ marginBottom: 0 }}>Follow Us On :</p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://instagram.com"
                className="text-white mr-4"
                style={{
                  textDecoration: "none"
                }}
              >
                <FaInstagram className="mr-2" />
                Instagram
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://twitter.com"
                className="text-white"
                style={{
                  textDecoration: "none"
                }}
              >
                <FaTwitter className="mr-2" />
                Twitter
              </a>
            </Col>
            <Col>
              <p>
                Have A Question
                <br />
                Dumb-Tick
                <br />
                Email : support@dumbtick.com
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
