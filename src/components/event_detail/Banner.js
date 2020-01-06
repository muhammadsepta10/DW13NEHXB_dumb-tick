import React, { Component } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "react-moment";
import "moment-timezone";

export default class Banner extends Component {
  render() {
    return (
      <div className="mt-5">
        <Card className="mx-auto shadow" style={{ width: 1000 }}>
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>
              <Row>
                <Col lg="8">
                  <p>{this.props.title}</p>
                </Col>
                <Col lg="4">
                  <FormControl
                    aria-describedby="basic-addon1"
                    value={this.props.price}
                    style={{ width: 1 }}
                    onChange={this.props.onChange}
                    className="mx-auto"
                    hidden
                  />
                  <p style={{ marginRight: -100 }}>Rp {this.props.price}</p>
                </Col>
              </Row>
              <Row>
                <Col lg="8">
                  <p>{this.props.category}</p>
                </Col>
                <Col lg="4">
                  <div
                    style={{ width: 163, height: 40 }}
                    className="d-flex flex-row mt-2 mx-auto"
                  >
                    <InputGroup className="mb-3" style={{ width: 103 }}>
                      <InputGroup.Prepend>
                        <Button
                          variant="outline-secondary"
                          onClick={this.props.decrement}
                        >
                          -
                        </Button>
                      </InputGroup.Prepend>
                      <FormControl
                        value={this.props.number}
                        disabled
                        aria-describedby="basic-addon1"
                      />
                      <InputGroup.Prepend>
                        <Button
                          variant="outline-secondary"
                          onClick={this.props.increment}
                        >
                          +
                        </Button>
                      </InputGroup.Prepend>
                    </InputGroup>
                    <Button
                      variant="secondary"
                      className="ml-2"
                      style={{ height: 40 }}
                      onClick={this.props.buy}
                    >
                      Buy
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Title>
            <hr />
            <Row>
              <Col className="mx-5 pb-5">
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
              <Col className="pb-5">
                <p>Contact Person</p>
                <Row>{this.props.creator}</Row>
                <Row>{this.props.phone}</Row>
                <Row>{this.props.email}</Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
