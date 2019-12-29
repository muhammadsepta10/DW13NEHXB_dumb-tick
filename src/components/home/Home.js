import React, { Component } from "react";
import Header from "./../Header";
import Footer from "./../Footer";
import Search from "./Search";
import Category from "./Category";
import axios from "axios";
import EventToday from "./EventToday";
import { Card, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { getCategory } from "../../_redux/action/category";
// import { getEvent } from "../../_redux/action/event";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      today: []
    };
  }
  componentDidMount() {
    // axios.get(`http://localhost:5000/api/categories`).then(res => {
    //   const temps = res.data;
    //   this.setState({ data: temps });
    // });
    axios.get(`http://localhost:5000/api/events`).then(res => {
      const temps = res.data;
      this.setState({ today: temps });
    });

    this.props.dispatch(getCategory());
    // this.props.dispatch(getEvent());
  }
  render() {
    const category = this.props.category;
    console.log("category", category);

    const currentDate = new Date();
    console.log("asdds", currentDate);
    const eventTomorow = this.state.today.filter(event => {
      return this.state.today.startTime > currentDate;
    });
    const eventToday = this.state.today.filter(event => {
      return (
        this.state.today.startTime > currentDate,
        this.state.today.startTime < currentDate
      );
    });
    return (
      <div style={{ marginBottom: "-100%" }}>
        <Header />
        <div className="container mt-5">
          <Search />

          <p className="h1 text-secondary mt-5">Category</p>
          <div className="d-flex flex-row mx-auto">
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
          <p className="h1 text-secondary mt-5">Today</p>
          <div className="d-flex">
            {this.state.today.map(item => (
              <EventToday
                eventPath={`/event/` + item.id}
                image={item.img}
                title={item.name}
                date={item.startTime}
                desc={item.descrption.substring(0, 50) + "......."}
              />
            ))}
          </div>
          <p className="h1 text-secondary mt-5 mb-2">Upcoming Event</p>
          <div className="d-flex flex-row">
            {this.state.today.map(item => (
              <EventToday
                eventPath={`/event/` + item.id}
                image={item.img}
                title={item.name}
                date={item.startTime}
                desc={item.descrption.substring(0, 50) + "......."}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStatetoProps = state => ({
  category: state.category.data,
  isLoading: state.category.isLoading,
  isError: state.category.isError
});
export default connect(mapStatetoProps)(Home);
