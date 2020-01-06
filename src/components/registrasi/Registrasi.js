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

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
  state = {
    name: "",
    phoneNumber: "",
    image: "",
    email: "",
    username: "",
    password: ""
  };
  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const name = this.state.name;
    const phoneNumber = this.state.phoneNumber;
    const email = this.state.email;
    const password = this.state.password;
    const img = this.state.image;
    axios
      .post("http://localhost:5000/api/auth/register", {
        name,
        phoneNumber,
        email,
        password,
        img
      })
      .then(res => {
        alert("registrasi sukses");
        window.location.href = "http://localhost:3000/login";
      })
      .catch(res => {
        alert("email anda telah terdaftar, silahkan login!!");
      });
    // window.location.href = "http://localhost:3000/login";
  };

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  render() {
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
                <h1>REGITRASI</h1>
                <Form
                  onSubmit={this.handleSubmit}
                  style={{ marginTop: 30, marginBottom: 30 }}
                >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter rname"
                      name="name"
                      onChange={this.handlerChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      required
                      type="phone"
                      placeholder="phone Number"
                      name="phoneNumber"
                      onChange={this.handlerChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      required
                      type="phone"
                      placeholder="Image(url)"
                      name="image"
                      onChange={this.handlerChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      required
                      name="email"
                      onChange={this.handlerChange}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <InputGroup className="mb-3">
                    <Form.Control
                      required
                      placeholder="Password"
                      name="password"
                      onChange={this.handlerChange}
                      type={this.state.hidden ? "password" : "text"}
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
                    Register
                  </Button>
                </Form>
                <p>
                  Already have an account?{" "}
                  <Link style={{ textDecoration: "none" }} to="/login">
                    Sign in
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
