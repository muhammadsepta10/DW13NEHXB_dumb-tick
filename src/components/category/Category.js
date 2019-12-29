import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Row, Container, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Event from "./../home/EventToday";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      list: []
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    axios.get(`http://localhost:5000/api/events/category/${id}`).then(res => {
      const temp = res.data;
      console.log(temp);
      this.setState({ data: temp });
      console.log(this.state.data);
    });
    axios
      .get(`http://localhost:5000/api/categories/category/${id}`)
      .then(res => {
        const temp = res.data;
        console.log(temp);
        this.setState({ list: temp });
      });
  }
  render() {
    return (
      <div style={{ marginBottom: "-100%" }}>
        <Header />
        <Container className="my-5">
          <p className="h1">{this.state.list.name}</p>
          <p>
            sort By:{" "}
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="date" type="date" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
            </Form>
          </p>
          <div className="d-flex flex-row mx-auto">
            {this.state.data.map(item => (
              <Event
                className="m-5"
                eventPath={`/event/` + item.id}
                image={item.img}
                title={item.name}
                date={item.startTime}
                desc={item.descrption.substring(0, 50) + "......."}
              />
            ))}
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
