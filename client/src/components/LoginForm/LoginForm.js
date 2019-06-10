import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
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
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className='LoginForm'>
        <div className='card'>
          <div className='card-body'style={{background: '#a8ff78', background: '-webkit-linear-gradient(to top, #78ffd6, #a8ff78)',background: 'linear-gradient(to top, #78ffd6, #a8ff78)',}}>

            <form className='LoginForm' onSubmit={this.handleSubmit}>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{fontSize: '1.em', fontFamily: '"Rye", Cursive'}}>@</span>
                </div>
                <input
                  className='form-control'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='email@provider.com'
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{fontSize: '1.em', fontFamily: '"Rye", Cursive'}}>P</span>
                </div>
                <input
                  className='form-control'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>

              <button className='btn btn-primary' type='submit' style={{backgroundColor: '#a8ff78', color: 'black'}}>Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;

