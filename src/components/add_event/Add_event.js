import React, { Component } from "react";
import Header from "./../Header";
import Footer from "./../Footer";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class Add_event extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: "",
      category: "",
      startTime: "",
      endTime: "",
      price: "",
      descrption: "",
      addres: "",
      urlMap: "",
      img: ""
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/categories`).then(res => {
      const temps = res.data;
      this.setState({ data: temps });
    });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const name = this.state.name;
    const category = this.state.category;
    const startTime = this.state.startTime;
    const endTime = this.state.endTime;
    const price = this.state.price;
    const descrption = this.state.descrption;
    const addres = this.state.addres;
    const urlMap = this.state.urlMap;
    const img = this.state.img;
    const createdBy = localStorage.getItem("id");
    axios
      .post("http://localhost:5000/api/events/input", {
        name,
        category,
        startTime,
        endTime,
        price,
        descrption,
        addres,
        urlMap,
        img,
        createdBy
      })
      .then(res => {
        alert("Data Berahsil di input");
        window.location.href = "http://localhost:3000/input_event";
      })
      .catch(err => {
        alert("eror");
      });
  };
  render() {
    return (
      <div>
        <Header />
        <Container className="mt-5">
          <p className="text-secondary h1">Add Event</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control
                name="name"
                type="name"
                placeholder="Enter name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
                as="select"
                placeholder="Select category"
                onChange={this.handleChange}
                name="category"
              >
                <option hidden></option>
                {this.state.data.map(item => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="startTime"
                type="datetime-local"
                placeholder="Start Time"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="endTime"
                type="datetime-local"
                placeholder="End Time"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="price"
                type="number"
                placeholder="Price"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="descrption"
                type="text"
                placeholder="description"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="addres"
                type="text"
                placeholder="addres"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="urlMap"
                type="text"
                placeholder="Map"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="img"
                type="text"
                placeholder="Image"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" className="mx-auto" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        <Footer />
      </div>
    );
  }
}
