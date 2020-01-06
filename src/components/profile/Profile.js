import React, { Component } from "react";
import Footer from "./../Footer";
import Header from "./../Header";
import { Container, Col, Row, Image, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Event from "./../home/EventToday";
// import axios from "axios";
import { connect } from "react-redux";
import { getUser, changeUser } from "./../../_redux/action/user";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      // profile: [],
      name: "",
      phoneNumber: "",
      img: "",
      id: ""
    };
  }
  componentDidMount() {
    // axios
    //   .get(`http://localhost:5000/api/user/${localStorage.getItem("id")}`)
    //   .then(res => {
    //     const temp = res.data;
    //     console.log("asd", temp);
    //     this.setState({ profile: temp });
    //     console.log("profile", this.state.profile);
    //   });
    // axios
    //   .get(`http://localhost:5000/api/categories/category/${id}`)
    //   .then(res => {
    //     const temp = res.data;
    //     console.log(temp);
    //     this.setState({ list: temp });
    //   });

    const id = localStorage.getItem("id");
    if (!id) {
      window.location.href = "";
    }
    console.log("id", id);
    this.props.dispatch(getUser(id));

    setTimeout(() => {
      const data = this.props.user;
      console.log("data", data);
      this.setState({
        id: data && data.id,
        phoneNumber: data && data.phoneNumber,
        img: data && data.img,
        name: data && data.name
      });
      console.log(this.state);
    }, 2000);
  }
  handleChange = e => {
    this.props.dispatch(changeUser(e.target.name, e.target.value));
  };
  handleClick = () => {
    const id = localStorage.getItem("id");
    const name = this.state.name;
    const phoneNumber = this.state.phoneNumber;
    const img = this.state.img;
    this.props.dispatch(changeUser(id, name, phoneNumber, img));
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  render() {
    const profile = this.props.user;
    const isLoading = this.props.isLoading;

    switch (isLoading) {
      case true:
        return <div>LOADING</div>;
      case false:
        return (
          <div>
            <Header />
            <Container>
              <p className="h1">Profile</p>
              <Row className="mx-auto">
                <Col>
                  <Row>
                    <p className="h1">{profile && profile.name}</p>
                  </Row>
                  <Row>
                    <p>30 - 03 - 1991</p>
                  </Row>
                  <Row>
                    <p>{profile && profile.phoneNumber}</p>
                  </Row>
                  <Row>
                    <p>{profile && profile.email}</p>
                  </Row>
                </Col>
                <Col>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#editProfile"
                  >
                    Edit Profile
                  </button>
                </Col>
                <Col>
                  <Image
                    style={{ width: 100 }}
                    src={localStorage.getItem("image")}
                    roundedCircle
                  />
                </Col>
              </Row>
              <p className="h1">Favorite</p>
              <div>
                <Event />
              </div>
            </Container>
            <Footer />
            {/* modal */}
            <div
              className="modal fade"
              id="editProfile"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <Form>
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit Profile
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          value={this.state.name}
                          onInput={this.handleChange}
                          type="text"
                          name="name"
                          required
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          name="phoneNumber"
                          onChange={this.handleChange}
                          // ref={input => (this.phoneNumber = input)}
                          value={this.state.phoneNumber}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                          type="text"
                          name="img"
                          // ref={input => (this.img = input)}
                          onChange={this.handleChange}
                          value={this.state.img}
                          required
                        />
                      </Form.Group>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        onClick={this.handleClick}
                        className="btn btn-primary"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        );
      default:
        return <div>error</div>;
    }
  }
}
const mapsToProps = state => ({
  user: state.user.data,
  isLoading: state.user.isLoading,
  isError: state.user.isError
});

export default connect(mapsToProps)(Profile);
