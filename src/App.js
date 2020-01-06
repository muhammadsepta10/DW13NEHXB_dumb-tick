import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import React, { Component } from "react";
import Category from "./components/category/Category";
import Login from "./components/login/Login";
import Registrasi from "./components/registrasi/Registrasi";
import Add_event from "./components/add_event/Add_event";
import Event_detaile from "./components/event_detail/Event_detaile";
import Profile from "./components/profile/Profile";
import Payment from "./components/payment/Payment";
import My_ticket from "./components/my_ticket/My_ticket";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/category/:id" component={Category} />
          <Route path="/login" component={Login} />
          <Route path="/registrasi" component={Registrasi} />
          <Route path="/input_event" component={Add_event} />
          <Route path="/event/:id" component={Event_detaile} />
          <Route path="/profile" component={Profile} />
          <Route path="/payment" component={Payment} />
          <Route path="/my_ticket" component={My_ticket} />
        </Router>
        ;
      </div>
    );
  }
}
