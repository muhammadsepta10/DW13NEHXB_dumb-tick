import React, { Component } from "react";
import Header from "./../Header";
import Footer from "./../Footer";
import Category from "./Category";
// import axios from "axios";
import EventToday from "./EventToday";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { getCategory } from "../../_redux/action/category";
import { getEvent } from "../../_redux/action/event";
import Axios from "axios";
// import { getEvent } from "../../_redux/action/event";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      today: [],
      search: "",
      event: []
    };
  }
  componentDidMount() {
    // axios.get(`http://localhost:5000/api/categories`).then(res => {
    //   const temps = res.data;
    //   this.setState({ data: temps });
    // });
    // axios.get(`http://localhost:5000/api/events`).then(res => {
    //   const temps = res.data;
    //   this.setState({ today: temps });
    // });

    this.props.dispatch(getCategory());
    this.props.dispatch(getEvent());
  }

  handleChange = e => {
    const search = e.target.value;
    this.setState({
      search: search
    });
    // const url = (window.location.search += search);
    console.log(this.state.search);

    if (search) {
      Axios.get(`http://localhost:5000/api/events/search/${this.state.search}`)
        .then(event => {
          this.setState({
            event: event.data
          });
          console.log("event", this.state.event);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  // search event

  eventSearch() {
    if (this.state.search)
      return (
        <div className="mb-5">
          <p className="h1 text-secondary mt-5">Search : {this.state.search}</p>
          <div className="d-flex flex-wrap">
            {this.state.event.map(item => (
              <EventToday
                key={item.id}
                eventPath={`/event/` + item.id}
                image={item.img}
                title={item.name}
                date={item.startTime}
                desc={item.descrption.substring(0, 50) + "......."}
              />
            ))}
          </div>
        </div>
      );
    else
      return (
        <div>
          <p className="h1 text-secondary mt-5">Today</p>
          <div className="d-flex flex-wrap">
            {this.props.event &&
              this.props.event.map(item => (
                <EventToday
                  key={item.id}
                  eventPath={`/event/` + item.id}
                  image={item.img}
                  title={item.name}
                  date={item.startTime}
                  desc={item.descrption.substring(0, 50) + "......."}
                />
              ))}
          </div>
          <p className="h1 text-secondary mt-5 mb-2">Upcoming Event</p>
          <div className="d-flex flex-wrap">
            {this.props.event &&
              this.props.event.map(item => (
                <EventToday
                  key={item.id}
                  eventPath={`/event/` + item.id}
                  image={item.img}
                  title={item.name}
                  date={item.startTime}
                  desc={item.descrption.substring(0, 50) + "......."}
                />
              ))}
          </div>
        </div>
      );
  }
  render() {
    // const currentDate = new Date();
    // // console.log("asdds", currentDate);
    // const eventTomorow = this.state.today.filter(event => {
    //   return this.state.today.startTime > currentDate;
    // });
    // const eventToday = this.state.today.filter(event => {
    //   return (
    //     this.state.today.startTime > currentDate,
    //     this.state.today.startTime < currentDate
    //   );
    // });

    switch (this.props.isLoadingCategory && this.props.isLoadingEvent) {
      case true:
        return <div>LOADING</div>;
      case false:
        const category = this.props.category;
        const event = this.props.event;
        console.log("event", event);
        console.log("category", category);
        return (
          <div style={{ marginBottom: "-100%" }}>
            <Header />
            <div className="container mt-5">
              <InputGroup className="mb-3">
                <FormControl
                  type="search"
                  onChange={this.handleChange}
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>

              <p className="h1 text-secondary mt-5">Category</p>
              <div className="d-flex flex-wrap">
                {category &&
                  category.map(item => (
                    <Category
                      style={{ display: "inline" }}
                      path={"/category/" + item.id}
                      key={item.id}
                      category={item.name}
                      image={item.image}
                    />
                  ))}
              </div>
              {this.eventSearch()}
            </div>
            <Footer />
          </div>
        );

      default:
        return <div>error</div>;
    }
  }
}
const mapStatetoProps = state => ({
  category: state.home.data,
  isLoadingCategory: state.home.isLoadingCategory,
  isErrorCategory: state.home.isErrorCategory,
  event: state.home.event,
  isLoadingEvent: state.home.isLoadingEvent,
  isErrorEvent: state.home.isErrorEvent
});
export default connect(mapStatetoProps)(Home);
