import React, { Component } from "react";
import { Button, Form, Container } from "semantic-ui-react";
import "./LoginForm.css";
import { NavLink } from "react-router-dom";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container className="login bg">
        <h1>Login</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              className="email"
              type="email"
              name="email"
              label="E-mail"
              placeholder="E-mail"
              value={email}
              onChange={this.handleInputChange}
            />
            <br />
            <Form.Input
              className="password"
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleInputChange}
            />
            <Button type="submit">Log in</Button>
            <div><h4 className="marginTop">Or don't have an account?</h4><Button as={NavLink} to="/register" type="submit">Sign up!</Button></div>
          </Form>
      </Container>
    );
  }
}
export default LoginForm;
