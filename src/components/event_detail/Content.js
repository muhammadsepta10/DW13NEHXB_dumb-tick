import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter, FaFacebookF, FaPaperclip } from "react-icons/fa";
import copy from "copy-to-clipboard";
import { Link } from "react-router-dom";

export default class Content extends Component {
  render() {
    return (
      <div className="mx-auto mt-5" style={{ width: 750 }}>
        <Row className="mt-2">
          <Col lg="5" md="5" xs="5">
            <p className="h3">Event Description</p>
            <p>{this.props.desc}</p>
          </Col>
          <div
            style={{
              width: "0px",
              height: "400",
              border: "0.5px #212529 solid"
            }}
          ></div>
          <Col lg="6" md="6" xs="6" className="ml-5">
            <p className="h3">Location</p>
            <Row>{this.props.location}</Row>
            <Row>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src={this.props.googleMap}
                  allowfullscreen
                ></iframe>
              </div>
              {/* <iframe
                src={this.props.googleMap}
                width="400"
                height="400"
                frameborder="0"
                style={{ border: 0 }}
              ></iframe> */}
            </Row>
            <Row className="mt-5">
              <p className="Share Event"></p>
              <Col>
                <Card
                  style={{ backgroundColor: "#1FA0F4" }}
                  className="d-flex flex-row text-white"
                >
                  <FaTwitter className="mx-auto my-2 h6" />{" "}
                  <p className="mx-auto my-2 h6">Twitter</p>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{ backgroundColor: "#3b569d" }}
                  className="d-flex flex-row text-white"
                >
                  <FaFacebookF className="mx-auto my-2 h6" />{" "}
                  <p className="mx-auto my-2 h6">Facebook</p>
                </Card>
              </Col>
              <Col>
                <Link
                  className="mx-auto"
                  style={{ textDecoration: "none" }}
                  to={`/event/` + this.props.Ivent}
                >
                  <Card
                    style={{ backgroundColor: "#6d7170" }}
                    className="d-flex flex-row text-white"
                    onClick={() => {
                      const text = window.location.toString();
                      copy(text);
                    }}
                  >
                    <FaPaperclip className="mx-auto my-2 h6" />{" "}
                    <p className="mx-auto my-2 h6">Copy Link</p>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
