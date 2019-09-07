import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginForm/LoginForm';

import './Landing.css';

class Landing extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ''
  };

  handleSubmit = (email, password) => {
    API.Users.login(email, password)
      .then(response => response.data)
      .then(({ user, token }) => {
        this.context.onLogin(user, token);
        this.setState({ redirectToReferrer: true, error: '' });
      })
      .catch(err => {
        let message;

        switch (err.response.status) {
          case 401:
            message =
              'Sorry, that email/password combination is not valid. Please try again.';
            break;
          case 500:
            message = 'Server error. Please try again later.';
            break;
          default:
            message = 'Unknown error.';
        }

        this.setState({ error: message });
      });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div
        style={{
          border: '29px solid transparent',
          backgroundImage:
            "url('https://freebie.photography/concept/network_node.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          borderImageSource:
            'url("http://res.cloudinary.com/cspaveljb/image/upload/v1499110958/corkborder_f8cm3g.png")',
          borderImageSlice: '29 29',
          borderImageWidth: '29px 29px',
          height: '100vh'
        }}
        className='Form'
      >
        <div className='mask rgba-gradient align-items-center' />
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 white-text text-center text-md-left'>
              <h1
                id='cc'
                style={{ marginTop: '10vh' }}
                className='h1-responsive font-weight-bold wow fadeInLeft'
                data-wow-delay='0.3s'
              >
                #GetPosted
              </h1>
              <hr className='hr-light wow fadeInLeft' data-wow-delay='0.3s' />
              <h6 className='mb-3 wow fadeInLeft' data-wow-delay='0.3s'>
                Already have an account?
              </h6>
              <LoginForm onSubmit={this.handleSubmit} />
              {/* <Link
                to='/'
                id='login'
                variant='outline-warning'
                style={{ color: 'black' }}
                className='btn btn-outline-white wow fadeInLeft'
                data-wow-delay='0.3s'
              >
                Logingggg
              </Link> */}
            </div>

            {this.state.error && (
              <div className='row'>
                <div className='col'>
                  <div className='alert alert-danger mb-3' role='alert'>
                    {this.state.error}
                  </div>
                </div>
              </div>
            )}

            <div id='reg' className='col-md-6'>
              <div
                style={{ marginTop: '10vh' }}
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
                  <div className='md-form'>
                    <i className='fas fa-user prefix white-text active'></i>
                    <input
                      type='text'
                      id='form3'
                      className='white-text form-control'
                    />

                    <label htmlFor='form3'>Your name</label>
                  </div>
                  <div className='md-form'>
                    <i className='fas fa-envelope prefix white-text active'></i>
                    <input
                      type='email'
                      id='form2'
                      className='white-text form-control'
                    />

                    <label htmlFor='form2'>Your email</label>
                  </div>
                  <div className='md-form'>
                    <i className='fas fa-lock prefix white-text active'></i>
                    <input
                      type='password'
                      id='form4'
                      className='white-text form-control'
                    />
                    <label htmlFor='form4'>Your password</label>
                  </div>
                  <div className='text-center mt-4'>
                    <Link to='/register'>
                      <button type='button' className='btn btn-outline-light'>
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
