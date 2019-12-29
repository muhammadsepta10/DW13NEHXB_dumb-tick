import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";

export default class EventToday extends Component {
  render() {
    return (
      <Link
        to={this.props.eventPath}
        style={{ textDecoration: "none" }}
        className="text-secondary"
      >
        <Card style={{ width: "90%" }} className="mx-2">
          <Card.Img
            variant="top"
            style={{ width: "100%", height: 200 }}
            src={this.props.image}
          />
          <Card.Body>
            <Card.Title style={{ width: "100%" }}>
              {this.props.title}
              <Button variant="link-primary float-right">
                <FaHeart className="h3" style={{ color: "#F37888" }} />
              </Button>
            </Card.Title>
            <Card.Title className="h6">
              <Moment format="DD MMMM YYYY">{this.props.date}</Moment>
            </Card.Title>
            <Card.Text>{this.props.desc}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  }
}
