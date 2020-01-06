import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Qrcode from "qrcode.react";
import Moment from "react-moment";

export default class ticket extends Component {
  render() {
    return (
      <div>
        <Row
          className="mx-auto my-5"
          style={{
            width: "60%",
            height: "60%",
            borderStyle: "solid",
            borderWidth: "5px"
          }}
        >
          <Col lg="8" xs="12" md="6">
            <p className="h2">{this.props.name}</p>
            <p className="h5">
              <Moment format="DD MMM YYYY">{this.props.date}</Moment> at{" "}
              <Moment format="hh:mm">{this.props.time}</Moment>
            </p>
            <p className="h5">{this.props.addres}</p>
          </Col>
          <Col lg="4" xs="12" md="6">
            <Qrcode
              className="m-3"
              value={`http://localhost:3000/event/${this.props.id}`}
              style={{ height: 150 }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
