import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.title = "By Forte | Contact";
  }

  render() {
    return (
      <div className="container">
        <h1>CONTACT</h1>
        <br />
        <div>
          {" "}
          <h5>
            <b>EMAIL</b>
          </h5>
          <a
            href="mailto:supplybyforte@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>supplybyforte@gmail.com</p>
          </a>
        </div>
        <div>
          {" "}
          <h5>
            <b>INSTAGRAM</b>
          </h5>
          <a
            href="https://www.instagram.com/supplybyforte/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>@supplybyforte</p>
          </a>
        </div>
        <div>
          {" "}
          <h5>
            <b>FACEBOOK</b>
          </h5>
          <a
            href="https://www.facebook.com/supplybyforte"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>Supply By Forte</p>
          </a>
        </div>
      </div>
    );
  }
}