import React, { Component } from "react";
import Banner from "./Banner";
import Content from "./Content";
import Header from "./../Header";
import Footer from "./../Footer";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import { connect } from "react-redux";
import { getEventDetaile } from "./../../_redux/action/event";
import { addOrder } from "./../../_redux/action/order";

class Event_detaile extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      number: 1,
      price: 0,
      event: 0
    };
  }
  componentDidMount() {
    // axios.get(`http://localhost:5000/api/categories`).then(res => {
    //   const temps = res.data;
    //   this.setState({ data: temps });
    // });
    const { id } = this.props.match.params;
    // axios.get(`http://localhost:5000/api/events/event/${id}`).then(res => {
    //   const temps = res.data;
    //   this.setState({ data: temps });
    // });

    this.props.dispatch(getEventDetaile(id));

    setTimeout(() => {
      const data = this.props.eventDetaile;
      console.log("data", data);
      this.setState({
        price: data && data.price,
        event: data && data.id
      });
    }, 100);
  }
  handleClick = () => {
    window.confirm("apakah anda yakin");
    const totalPrice = this.state.price;
    const customer = localStorage.getItem("id");
    const quantity = this.state.number;
    const event = this.state.event;
    console.log(totalPrice, customer, quantity, event);
    this.props.dispatch(addOrder(event, customer, quantity, totalPrice));
  };
  handleChange = e => () => {
    console.log("p", e);
  };
  render() {
    // console.log(this.state.data);
    const event = this.props.eventDetaile;
    const isLoading = this.props.isLoading;
    // console.log("event", event);

    switch (isLoading) {
      case true:
        return <div>LOADING</div>;
      case false:
        return (
          <div>
            <Header />
            <Container>
              <p onChange={this.handleChange}>{this.state.price}</p>
              <Banner
                key={event && event.id}
                image={event && event.img}
                title={event && event.name}
                price={event && event.price * this.state.number}
                category={event && event.Category.name}
                start={event && event.startTime}
                end={event && event.endTime}
                timeStart={event && event.startTime}
                timeEnd={event && event.endTime}
                creator={event && event.User.name}
                phone={event && event.User.phoneNumber}
                email={event && event.User.email}
                increment={() => {
                  this.setState({ number: this.state.number + 1 });
                  this.setState({
                    price: event.price * (this.state.number + 1)
                  });
                }}
                decrement={() => {
                  if (this.state.number <= 1) {
                    this.setState({ number: 1 });
                    this.setState({
                      price: event.price * this.state.number
                    });
                  } else {
                    this.setState({ number: this.state.number - 1 });
                    this.setState({
                      price: event.price * (this.state.number - 1)
                    });
                  }
                }}
                number={this.state.number}
                onChange={() => {
                  this.setState({ price: event.price * this.state.number });
                }}
                buy={this.handleClick}
              />
              <Content
                key="123123123124124312344"
                desc={event.descrption}
                location={event.addres}
                googleMap={event.urlMaps}
                Ivent={event.id}
              />
            </Container>
            <Footer />
          </div>
        );
      default:
        return <div>error</div>;
    }
  }
}
const mapsToProps = state => ({
  eventDetaile: state.eventDetaile.data,
  isLoading: state.eventDetaile.isLoadingDetaileEvent,
  isError: state.eventDetaile.isErrorDetaileEvent
});
export default connect(mapsToProps)(Event_detaile);
