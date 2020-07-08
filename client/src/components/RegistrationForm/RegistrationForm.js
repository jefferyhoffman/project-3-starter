import React, { Component } from "react";
import { Button, Form, Container } from "semantic-ui-react";

import "./RegistrationForm.css";

class RegistrationForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
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
      passwordConfirm,
    } = this.state;

    this.props.onSubmit(
      firstName,
      lastName,
      username,
      email,
      password,
      passwordConfirm
    );
    event.preventDefault();
  };

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      passwordConfirm,
    } = this.state;

    return (
      <Container className="bg">
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
              id="password-confirm"
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Button type="submit">Register!</Button>
        </Form>
      </Container>
    );
  }
}

export default RegistrationForm;
