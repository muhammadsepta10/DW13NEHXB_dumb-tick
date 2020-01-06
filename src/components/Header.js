import React, { Component } from "react";
import { Navbar, Nav, Container, Dropdown, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  handleClick = () => {
    localStorage.clear();
    window.location.href = "http://localhost:3000/";
  };
  hide() {
    if (!localStorage.getItem("token"))
      return (
        <Nav className="">
          <Nav.Link href="#deets">
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className="text-white"
            >
              Login
            </Link>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <Link
              to="/registrasi"
              style={{ textDecoration: "none" }}
              className="text-white"
            >
              Register
            </Link>
          </Nav.Link>
        </Nav>
      );
    else
      return (
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            className="text-white my-1"
            style={{ textDecoration: "none" }}
            id="dropdown-custom-components"
          >
            <Image
              style={{ width: 30 }}
              className="mr-2"
              src={localStorage.getItem("image")}
              roundedCircle
            />
            {localStorage.getItem("name")}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="5">
              <Link
                to="/profile"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                Profile
              </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="4">
              <Link
                to="/my_ticket"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                My Ticket
              </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">
              <Link
                to="/payment"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                Payment
              </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              <Link
                to="/input_event"
                style={{ textDecoration: "none", color: "black" }}
              >
                Add Event
              </Link>
            </Dropdown.Item>
            <hr />
            <Dropdown.Item eventKey="1" onClick={this.handleClick}>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link
                style={{ textDecoration: "none" }}
                className="text-white"
                to="/"
              >
                Dumb-Thick
              </Link>
            </Navbar.Brand>
            {this.hide()}
          </Container>
        </Navbar>
      </div>
    );
  }
}
