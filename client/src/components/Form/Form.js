import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',

    }

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        })
    }

    render() {
        return (
            <form>
                        <input
                            name="firstName"
                            placeholder='First Name'
                            value={this.state.firstName}
                            onChange={e => this.change(e)}
                        />
                        <br></br>
                        <input
                            name="lastName"
                            placeholder='Last Name'
                            value={this.state.lastName}
                            onChange={e => this.change(e)}
                        />
                        <br></br>
                        <input
                            name="username"
                            placeholder='Username'
                            value={this.state.username}
                            onChange={e => this.change(e)}
                        />
                        <br></br>
                        <input
                            name="email"
                            placeholder='E-mail'
                            value={this.state.email}
                            onChange={e => this.change(e)}
                        />
                        <br></br>
                        <input
                            name="password"
                            type="password"
                            placeholder='Password'
                            value={this.state.password}
                            onChange={e => this.change(e)}
                        />
                        <br></br>
                        <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form >
                    );
                }
            };
            
export default Form;