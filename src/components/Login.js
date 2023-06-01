/** @format */

import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
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
      .get(" http://localhost:8000/users")
      .then((response) => {
        console.log(response.data);
        // const data = response.data.filter(
        //   (item) => item.email === email && item.password === password
        // );
        // console.log(data);
        // eslint-disable-next-line array-callback-return
        response.data.map((item) => {
          if (item.email === email && item.password === password) {
            console.log("sucess");
          }
        });

        // if (
        //   response.data.email === email &&
        //   response.data.password === password
        // ) {
        //   console.log("sucess");
        // }
      })
      .catch((error) => {
        console.error(error);
        // Handle login error
      });
    // axios
    //   .post("http://localhost:3001/login", { email, password })
    //   .then((response) => {
    //     console.log(response.data);
    //     // Handle successful login
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // Handle login error
    //   });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
