import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Row, Container, Col, Form, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Event from "./../home/EventToday";
import { connect } from "react-redux";
import { getEventCategory, getCategoryId } from "../../_redux/action/category";

class Category extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: [],
  //     list: []
  //   };
  // }
  componentDidMount() {
    // const { id } = this.props.match.params;
    // console.log(id);
    // axios.get(`http://localhost:5000/api/events/category/${id}`).then(res => {
    //   const temp = res.data;
    //   // console.log(temp);
    //   this.setState({ data: temp });
    //   // console.log(this.state.data);
    // });
    // axios
    //   .get(`http://localhost:5000/api/categories/category/${id}`)
    //   .then(res => {
    //     const temp = res.data;
    //     // console.log(temp);
    //     this.setState({ list: temp });
    //   });

    this.props.dispatch(getEventCategory(this.props.match.params.id));
    this.props.dispatch(getCategoryId(this.props.match.params.id));
  }
  render() {
    const event = this.props.event;
    const category = this.props.categoryId;
    console.log("event", event && event);
    console.log("category", category && category);

    switch (this.props.isLoadingCategory && this.props.isLoadingEvent) {
      case true:
        return (
          <Spinner animation="border" style={{ margin: "50%" }} role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        );
      case false:
        return (
          <div style={{ marginBottom: "-100%" }}>
            <Header />
            <Container className="my-5">
              <input type="date" />
              <p className="h1">{category && category.name}</p>
              <div className="d-flex flex-wrap mt-5">
                {event &&
                  event.map(item => (
                    <Event
                      key={item.id}
                      className="m-5"
                      eventPath={`/event/` + item.id}
                      image={item.img}
                      title={item.name}
                      date={item.startTime}
                      goooleMap={item.urlMaps}
                      desc={item.descrption.substring(0, 50) + "......."}
                    />
                  ))}
              </div>
            </Container>
            <Footer />
          </div>
        );
      default:
        return <div>error</div>;
    }
  }
}
const mapStatetoProps = state => ({
  categoryId: state.categoryPage.category,
  isLoadingCategory: state.categoryPage.isLoadingCategory,
  isErrorCategory: state.categoryPage.isErrorCategory,
  event: state.categoryPage.event,
  isLoadingEvent: state.categoryPage.isLoadingEvent,
  isErrorEvent: state.categoryPage.isErrorEvent
});
export default connect(mapStatetoProps)(Category);
