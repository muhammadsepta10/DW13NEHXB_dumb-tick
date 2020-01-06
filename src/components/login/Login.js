import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup
} from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
  state = {
    email: "",
    password: ""
  };
  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const email = this.state.email;
    const password = this.state.password;
    axios
      .post("http://localhost:5000/api/auth/login", { email, password })
      .then(res => {
        const data = res.data.user;
        const token = res.data.token;
        localStorage.setItem("id", data.id);
        localStorage.setItem("name", data.name);
        localStorage.setItem("image", data.img);
        localStorage.setItem("phoneNumber", data.phoneNumber);
        localStorage.setItem("token", token);
        alert("login sukses");
        window.location.href = "http://localhost:3000/";
      })
      .catch(res => {
        alert("login failed, your email or password is Wrong");
      });
  };

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  render() {
    console.log(localStorage.getItem("token"));
    console.log(this.state);
    return (
      <Container>
        <Card
          className="shadow"
          style={{ margin: "10%", backgroundColor: "#F4E1E1" }}
          body
        >
          <Row>
            <Col lg="3"></Col>
            <Col lg="6">
              <div className="text-center" style={{ margin: "10%" }}>
                <h1>LOGIN</h1>
                <Form
                  style={{ marginTop: 30, marginBottom: 30 }}
                  onSubmit={this.handleSubmit}
                >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      onChange={this.handlerChange}
                      require
                    />
                  </Form.Group>

                  <InputGroup className="mb-3">
                    <Form.Control
                      required
                      name="password"
                      placeholder="Password"
                      type={this.state.hidden ? "password" : "text"}
                      onChange={this.handlerChange}
                    />
                    <InputGroup.Append>
                      <Button
                        onClick={this.toggleShow}
                        style={{
                          textDecoration: "none",
                          fontSize: 20
                        }}
                        variant="link text-dark"
                      >
                        {this.state.hidden ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>

                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
                <p>
                  No account?
                  <Link style={{ textDecoration: "none" }} to="/registrasi">
                    Sign Up
                  </Link>
                </p>
              </div>
            </Col>
            <Col lg="3">
              <Link
                to="/"
                className="text-dark position-absolute h4"
                style={{ textDecoration: "none", right: 0, top: -15 }}
              >
                X
              </Link>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}
