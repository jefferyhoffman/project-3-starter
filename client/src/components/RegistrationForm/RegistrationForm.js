import React, { Component } from 'react';



class RegistrationForm extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, username } = this.state;

    this.props.onSubmit(email, password, username);
  }

  render() {
    const { email, password, username } = this.state;

    if (!this.props.registered){return (
      <div id="login" className='LoginForm'>
        <div
          
          className='card wow fadeInRight size'
          data-wow-delay='0.3s'
        >
          <div className='card-body'>
            <div className='text-center'>
              <h3 className='white-text'>
                <i className='fas fa-user white-text'></i> Register:
              </h3>
              <hr className='hr-light' />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className='md-form'>
                <i className='fas fa-user prefix white-text active'></i>
                <input
                  type='text'
                  id='form3'
                  name='username'
                  className='white-text form-control'
                  value={username}
                  onChange={this.handleInputChange}
                />
                <label htmlFor='form3'>{!this.state.username ? "Your name" : ""}</label>
              </div>
              <div className='md-form'>
                <i className='fas fa-envelope prefix white-text active'></i>
                <input
                  type='email'
                  id='form2'
                  name='email'
               
                  className='white-text form-control'
                  value={email}
                  onChange={this.handleInputChange}
                />
                <label htmlFor='form2'>{!this.state.email ? "Your email" : ""}</label>
              </div>
              <div className='md-form'>
                <i className='fas fa-lock prefix white-text active'></i>
                <input
                  type='password'
                  id='form4'
                  className='white-text form-control'
            
                  name='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
                <label htmlFor='form4'>{!this.state.password ? "Your password" : ""}</label>
              </div>

              <button type='submit' className='btn btn-outline-light'>
                Register
                      </button>
            </form>
          </div>
        </div>
      </div>
    )} else {
      return(<div></div>)
    }
    
  }
}

export default RegistrationForm;
