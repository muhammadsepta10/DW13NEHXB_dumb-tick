import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-primary mt-5">
        <Container>
          <Row>
            <Col>
              <div classname="my-auto">
                <p classname="h2">Dumb Ticket</p>
                <p>
                  dumb-tick is web-bases platforrm thath provides for various
                  events around music science and programming
                </p>
              </div>
            </Col>
            <Col>
              <p>Links</p>
              <br />
              <p>About Us On</p>
              <br />
              <p>Follow Us On</p>
              <br />
              <p>Instagram</p>
              <br />
              <p>Twitter</p>
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
