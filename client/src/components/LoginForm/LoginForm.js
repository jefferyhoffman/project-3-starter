import React, { Component } from "react";
import { Button, Form, Segment, Container } from "semantic-ui-react";
import "./LoginForm.css"

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
          <Container className="login">
            <Segment inverted>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                      <Form.Input className="email" type="email" name="email" label="E-mail" placeholder="E-mail" value={email} onChange={this.handleInputChange}/>
                      <br />
                      <Form.Input className="password" label="Password" type="password" name="password" placeholder="Password" value={password} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Segment>
          </Container>
        );
    }
}
export default LoginForm;
