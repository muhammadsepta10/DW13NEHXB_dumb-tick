import React, { Component } from "react";
import { Card, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default class EventToday extends Component {
  render() {
    return (
      <Card style={{ width: 250, height: 420 }} className="m-2 shadow">
        <Link
          to={this.props.eventPath}
          style={{ textDecoration: "none" }}
          className="text-secondary"
        >
          <Card.Img
            variant="top"
            style={{ width: "100%", height: 200 }}
            src={this.props.image}
          />
        </Link>
        <Card.Body>
          <Card.Title>
            <Row>
              <Col lg="9">
                <Link
                  to={this.props.eventPath}
                  style={{ textDecoration: "none" }}
                  className="text-secondary"
                >
                  {this.props.title}
                </Link>
              </Col>
              <Col lg="2">
                <Button
                  style={{ marginRight: -30, marginTop: -8 }}
                  className="pl-2"
                  variant="link float-right"
                >
                  <FaHeart
                    variant="link"
                    className="h3"
                    style={{ color: "#F37888", textDecoration: "none" }}
                  />
                </Button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Title className="h6">
            <Moment format="DD MMMM YYYY">{this.props.date}</Moment>
          </Card.Title>
          <Link
            to={this.props.eventPath}
            style={{ textDecoration: "none" }}
            className="text-secondary"
          >
            <Card.Text>{this.props.desc}</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}
