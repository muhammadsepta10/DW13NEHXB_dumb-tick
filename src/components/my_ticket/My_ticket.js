import React, { Component } from "react";
import Header from "./../Header";
import Footer from "./../Footer";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Ticket from "./ticket";
import { connect } from "react-redux";
import { getMyTicket } from "./../../_redux/action/order";

class My_ticket extends Component {
  componentDidMount() {
    const id = localStorage.getItem("id");
    console.log(id);
    this.props.dispatch(getMyTicket(id));
  }
  render() {
    const myTicket = this.props.myTicket;
    const isLoading = this.props.isLoading;
    const isError = this.props.isError;
    console.log(myTicket && myTicket);

    switch (isLoading) {
      case true:
        return <div>LOADING</div>;
      case false:
        return (
          <div>
            <Header />
            <Container className="mt-5">
              <p className="h1 text-dark mb-5">My Ticket</p>
              <Row>
                <Col className="border-top border-danger bg-light">
                  {myTicket &&
                    myTicket.map(item => (
                      <Ticket
                        key={item.id}
                        name={item.Event.name}
                        date={item.Event.startTime}
                        time={item.Event.startTime}
                        addres={item.Event.addres}
                        id
                      />
                    ))}
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        );

      default:
        return <div>ERROR</div>;
    }
  }
}
const mapsToProps = state => ({
  myTicket: state.order.myTicket,
  isLoading: state.order.isLoadingMyTicket,
  isError: state.order.isErrorMyTicket
});

export default connect(mapsToProps)(My_ticket);
