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
        <Dropdown variant="link-primary">
          <Dropdown.Toggle id="dropdown-custom-components">
            <Image
              style={{ width: 30 }}
              src={localStorage.getItem("image")}
              roundedCircle
            />
            {localStorage.getItem("name")}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="5">Profile</Dropdown.Item>
            <Dropdown.Item eventKey="4">My Ticket</Dropdown.Item>
            <Dropdown.Item eventKey="3">Payment</Dropdown.Item>
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

  // const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  //   <a
  //     href=""
  //     ref={ref}
  //     onClick={e => {
  //       e.preventDefault();
  //       onClick(e);
  //     }}
  //   >
  //     {/* Render custom icon here */}
  //     &#x25bc;
  //     {children}
  //   </a>
  // ));
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
