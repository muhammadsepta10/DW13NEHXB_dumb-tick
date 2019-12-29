import React, { Component } from "react";
import Banner from "./Banner";
import Content from "./Content";
import Header from "./../Header";
import Footer from "./../Footer";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class Event_detaile extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    // axios.get(`http://localhost:5000/api/categories`).then(res => {
    //   const temps = res.data;
    //   this.setState({ data: temps });
    // });
    const { id } = this.props.match.params;
    axios.get(`http://localhost:5000/api/events/event/${id}`).then(res => {
      const temps = res.data;
      this.setState({ data: temps });
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <Header />
        <Container>
          {this.state.data.map(item => (
            <Banner
              image={item.img}
              title={item.name}
              price={item.price}
              category={item.Category.name}
              start={item.startTime}
              end={item.endTime}
              timeStart={item.startTime}
              timeEnd={item.endTime}
              creator={item.User.name}
              phone={item.User.phoneNumber}
              email={item.User.email}
            />
          ))}
          {this.state.data.map(item => (
            <Content desc={item.descrption} location={item.addres} />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}
