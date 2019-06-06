import React, { Component } from 'react';
import "./register.css";


class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { name, email, password } = this.state;

    this.props.onSubmit(name, email, password);
    event.preventDefault();
  }

  render() {
    const { name, email, password } = this.state;


    return (
      <div className="container">
        <div className='RegisterFormT'>
          <div className='card'>
            <div className='card-body'>
              <h1>Register</h1>
              <form className='RegisterForm' onSubmit={this.handleSubmit}>
                <div className='input-group mb-3'></div>
                  <div className="input-group-prepend"></div>

                  <input
                    className='form-control'
                    id='name'
                    type='name'
                    name='name'
                    placeholder='name'
                    value={name}
                    onChange={this.handleInputChange}
                  />
        

                  <div className='input-group mb-3'></div>
                    <div className="input-group-prepend"></div>
                   
                    <input
                      className='form-control'
                      id='email'
                      type='email'
                      name='email'
                      placeholder='email@koscowix.com'
                      value={email}
                      onChange={this.handleInputChange}
                    />


                    <div className='input-group mb-3'></div>
                      <div className="input-group-prepend"></div>
                      
                      <input
                        className='form-control'
                        id='password'
                        type='password'
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={this.handleInputChange}
                      />
                  
<br/>
                    <button className='btn btn-secondary sub-button' type='submit'>Register</button>
                    </form>
                </div>
           </div>
          </div>
        </div>
      

    )
  }
}

export default Register;