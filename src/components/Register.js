/** @format */

import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post(" http://localhost:8000/users", { email, password })
      .then((response) => {
        console.log(response.data);
        // Handle successful registration
      })
      .catch((error) => {
        console.error(error);
        // Handle registration error
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
