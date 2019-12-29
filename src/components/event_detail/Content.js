import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Row className="mx-auto">
          <Col>
            <p className="h3">Event Description</p>
            <p>{this.props.desc}</p>
          </Col>
          <Col>
            <p className="h3">Location</p>
            <Row>{this.props.location}</Row>
            <Row>
              {/* <iframe
                src={this.props.googleMap}
                width="600"
                height="450"
                frameborder="0"
                style="border:0;"
              ></iframe> */}
            </Row>
            <Row>
              <p className="Share Event"></p>
              <Col>
                <Button>Twitter</Button>
              </Col>
              <Col>
                <Button>Facebook</Button>
              </Col>
              <Col>
                <Button>Copy Link</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
