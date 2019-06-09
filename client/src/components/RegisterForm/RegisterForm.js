import React, { Component } from 'react';
import '../../pages/Home/style.css';
import '../RegisterForm/style.css';

class RegisterForm extends Component {

  state = {
    email: '',
    password: '',
    firstName: "",
    lastName: '',
    phone: '',
    address: ''
  };

  handleInputChange = event => {
    let { name, value } = event.target;

    // if (name === 'phone'){
    //   if (value.length === 3 || value.length === 7){
    //     value += '-'
    //   }
    //   value = value.substring(0, 12)
    // }

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, password, firstName, lastName, phone, address } = this.state;
    console.log(this.props)
    this.props.onSubmit(email, password, firstName, lastName, phone, address);
  }

  render() {
    console.log(this.props.firstName)
    console.log(this.props)
    const { email, password, firstName, lastName, phone, address } = this.state;

    return (<div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6 form">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-success" style={{textAlign: 'center'}}>Create an Account with Greenscapes</h2>
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <input
                    className='form-control'
                    id='firstName'
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    value={firstName}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    id='lastName'
                    type='text'
                    name='lastName'
                    placeholder="Last Name"
                    value={lastName}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control"
                    id='address'
                    type='text'
                    name='address'
                    placeholder="Address"
                    value={address}
                    onChange={this.handleInputChange} />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    id='phone'
                    type='text'
                    name='phone'
                    placeholder="Phone Number"
                    value={phone}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <br />
              <div className="form-group text-left">
                <label form="email">Email</label>
                <input
                  className="form-control"
                  id='email'
                  type="email"
                  name='email'
                  aria-describedby="emailHelp"
                  placeholder="Email@provider.com"
                  value={email}
                  onChange={this.handleInputChange} />
              </div>
              <div className="form-group text-left">
                <label form="password">Password</label>
                <input
                  className="form-control"
                  id='password'
                  type="password"
                  name='password'
                  placeholder="Password"
                  value={password}
                  onChange={this.handleInputChange} />
              </div>
              <button type="submit" style={{width: '100%'}} className="btn btn-success">Join Today!</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-sm-3"></div>
    </div>
    );
  }
}

export default RegisterForm;

