import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

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
            <Segment inverted>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                      <Form.Input fluid type="email" name="email" label="E-mail" placeholder="E-mail" value={email} onChange={this.handleInputChange}/>
                        <Form.Input
                            fluid
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Segment>
        );
    }
}
export default LoginForm;
