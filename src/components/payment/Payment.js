import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPayment } from "./../../_redux/action/order";
import { connect } from "react-redux";
import axios from "axios";

import Header from "./../Header";
import Footer from "./../Footer";
import Ticket from "./Ticket";
import { confirmed } from "./../../_redux/action/order";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      id: 0
    };
  }

  componentDidMount() {
    const id = localStorage.getItem("id");

    this.props.dispatch(getPayment(id));

    setTimeout(() => {
      const data = this.props.payment;
      // console.log("data", data);
      this.setState({
        id: data && data.id
      });
    }, 1);
  }

  handleClick = id => () => {
    const API = "http://localhost:5000/api/order";
    const attachment =
      "https://1.bp.blogspot.com/-hyzxX07ciWk/XPaURkosaeI/AAAAAAAABRM/AaCDgJWE8pM-f97Xp9fldguUsjcQ0aGJACLcBGAs/s640/hadits21info-invoice%25231797799.jpg";
    // this.props.dispatch(confirmed(id, attachment));
    var config = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    };
    axios
      .put(
        `${API}/confirm/${id}`,
        {
          attachment
        },
        config
      )
      .then(input => {
        console.log(input);
        window.location.href = "http://localhost:3000/payment";
      })
      .catch(err => {
        alert("eror", err);
      });
  };
  render() {
    const payment = this.props.payment;
    const isLoading = this.props.isLoading;
    const isError = this.props.isError;
    console.log(this.state);
    return (
      <div>
        <Header />
        <Container>
          <p className="h1 text-secondary my-5">Payment</p>
          {payment &&
            payment.map(payment => (
              <Ticket
                name={payment.User.name}
                price={payment.Event.price}
                event={payment.Event.name}
                date={payment.Event.startTime}
                time={payment.Event.startTime}
                addres={payment.Event.addres}
                id={payment.event}
                quantity={payment.quantity}
                totalPrice={payment.totalPrice}
                onClick={
                  payment.status === "pending"
                    ? this.handleClick(payment.id)
                    : " "
                }
                status={payment.status}
                variant={
                  payment.status === "pending"
                    ? "btn-lg btn-secondary"
                    : payment.status === "confirm"
                    ? "btn-lg btn-warning disabled"
                    : payment.status === "approved"
                    ? "btn-lg btn-success disabled"
                    : "btn-lg btn-secondary"
                }
              />
            ))}
        </Container>
        <Footer />
      </div>
    );
  }
}
const mapsToProps = state => ({
  payment: state.order.payment,
  isLoading: state.order.isLoadingPayment,
  isError: state.order.isErrorPayment
});
export default connect(mapsToProps)(Payment);
