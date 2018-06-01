import React, { Component } from "react";
import Routes from "routes";

import { Fade } from "reactstrap";

import {
  setEnabledCookies,
  getEnabledCookies
} from "./../..//helpers/cookieHelpers";

import { CookiesNotification } from "./../../components/CookiesNotification";

import { NavBar } from "components/Navbar";
import { Footer } from "components/Footer";

import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      redirect: false,
      cookiesEnabled: getEnabledCookies()
    };

    this.handleConfirmCookies = this.handleConfirmCookies.bind(this);
  }

  handleConfirmCookies(value) {
    switch (value) {
      case "yes":
        setEnabledCookies();
        this.forceUpdate();
        break;
      case "no":
        window.location.replace("http://google.ca");
        break;
      default:
        break;
    }
  }

  render() {
    const { redirect } = this.state;

    return (
      <div id="app">
        <div id="NavBar">
          <NavBar />
        </div>
        <div id="body">
          <Routes />
        </div>
        <div id="Footer">
          <Footer />
        </div>
        <Fade in={!getEnabledCookies()}>
          <CookiesNotification
            handleConfirmCookies={this.handleConfirmCookies}
          />
        </Fade>
      </div>
    );
  }
}

export default App;
