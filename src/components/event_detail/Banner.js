import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "react-moment";
import "moment-timezone";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <Card className="mx-auto" style={{ width: 800, height: 800 }}>
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>
              <Row>
                <Col>
                  <p>{this.props.title}</p>
                </Col>
                <Col>
                  <Button variant="primary">{this.props.price}</Button>
                </Col>
              </Row>
              <p>{this.props.category}</p>
            </Card.Title>
            <hr />
            <Card.Text>
              <Row>
                <Col>
                  <p>Hosted By :</p>
                </Col>
                <Col>
                  <p>Date & Time</p>
                  <Row>
                    <Moment format="DD MMM YYYY">{this.props.start}</Moment> -
                    <Moment format="DD MMM YYYY">{this.props.end}</Moment>
                  </Row>
                  <Row>
                    <Moment format="hh.mm">{this.props.timeStart}</Moment> -{" "}
                    <Moment format="hh.mm">{this.props.timeEnd}</Moment>
                    WIB
                  </Row>
                </Col>
                <Col>
                  <p>Contact Person</p>
                  <Row>{this.props.creator}</Row>
                  <Row>{this.props.phone}</Row>
                  <Row>{this.props.email}</Row>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
