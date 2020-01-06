import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Category extends Component {
  render() {
    return (
      <Link
        className="mx-auto"
        style={{ textDecoration: "none" }}
        to={this.props.path}
      >
        <Card
          className="m-2 shadow"
          style={{
            width: 250,
            height: 100,
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: 250
          }}
        >
          <Card.Body className="text-white h2 m-auto ">
            <p
              className="mx-auto my-auto"
              style={{ textTransform: "capitalize" }}
            >
              {this.props.category}
            </p>
          </Card.Body>
        </Card>
      </Link>
    );
  }
}
