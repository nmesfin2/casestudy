import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">ProductCat Portal</h1>
                <p className="lead">
                  {" "}
                  Manage your product catelog, dream big and implment whatever you want to implment
                </p>
                <hr />
                <a href="register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </a>
                <a href="login" className="btn btn-lg btn-light">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
