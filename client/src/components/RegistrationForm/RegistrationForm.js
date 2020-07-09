import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container } from "semantic-ui-react";
import AuthContext from '../../contexts/AuthContext';

import API from '../../lib/API';
import "./RegistrationForm.css";

class RegistrationForm extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
    error: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirm,
    } = this.state;

    if (password !== confirm) {
      return this.setState({ error: "Passwords do not match." });
    }

    API.Users.create(firstName, lastName, username, email, password)
      .then(response => response.data)
      .then(({ user, token }) => {
        // function for logging in
        // this.context.onLogin(user, token);
        console.log(user)
        this.setState({ redirectToReferrer: true, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));

    event.preventDefault();
  };

  render() {
    const {
      redirectToReferrer,
      firstName,
      lastName,
      username,
      email,
      password,
      confirm,
    } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={"/login"} />
    }

    return (
      <Container className="bg">
        <h1>Join the feast!</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field required>
            <label>First Name</label>
            <input
              placeholder="First Name"
              className="form-control"
              id="first-name"
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              className="form-control"
              id="last-name"
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Username</label>
            <input
              placeholder="Username"
              className="form-control"
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>E-mail</label>
            <input
              placeholder="E-mail"
              className="form-control"
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input
              placeholder="Password"
              className="form-control"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Confirm Password</label>
            <input
              placeholder="Confirm Password"
              className="form-control"
              id="confirm"
              // id was previously password-confirm
              type="password"
              name="confirm"
              value={confirm}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Button type="submit">Sign up!</Button>
        </Form>
      </Container>
    );
  }
}

export default RegistrationForm;
