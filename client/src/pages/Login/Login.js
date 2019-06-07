import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginForm/LoginForm';
import Modal from 'react-bootstrap4-modal';
import "./Login.css"


class Login extends Component {
  static contextType = AuthContext;


state={
  modalIsVisible: true,
  redirectToReferrer: false,
  error: ""
}

handleSubmit = (email, password) => {
  API.Users.login(email, password)
    .then(response => response.data)
    .then(({ user, token }) => {
      this.context.onLogin(user, token);
      this.setState({ redirectToReferrer: true, error: "" });
    })
    .catch(err => {
      let message;

      switch (err.response.status) {
        case 401:
          message = 'Sorry, that email/password combination is not valid. Please try again.';
          break;
        case 500:
          message = 'Server error. Please try again later.';
          break;
        default:
          message = 'Unknown error.';
      }

      this.setState({ error: message });
    });
}

closeModal=() => {
  this.setState({modalIsVisible: false})
}

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/secret" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>
               <div className='Login'>
         <div className='row'>
          <div className='col'>
            <h1>Login</h1>
          </div>
        </div>
         {this.state.error &&
          <div className='row'>
            <div className='col'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}
        <div className='row'>
          <div className='col'>
            <LoginForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
      </Modal>

    );
  }
}

export default Login;
