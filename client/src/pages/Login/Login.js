import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./style.css";

class Login extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: "",
  };

  handleSubmit = (email, password) => {
    API.Users.login(email, password)
      .then((response) => response.data)
      .then(({ user, token }) => {
        this.context.onLogin(user, token);
        this.setState({ redirectToReferrer: true, error: "" });
      })
      .catch((err) => {
        let message;
        console.log(err);
        // switch (err.response.status) {
        //   case 401:
        //     message =
        //       "Sorry, that email/password combination is not valid. Please try again.";
        //     break;
        //   case 500:
        //     message = "Server error. Please try again later.";
        //     break;
        //   default:
        //     message = "Unknown error.";
        // }

        // this.setState({ error: message });
      });
  };
  componentDidMount(props){
    this.props.backgroundImageChanger('login')
  }
  componentWillUnmount(props){
   this.props.backgroundImageChanger('')
  }
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/userpage" },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className='Login'>
        <div className='row'>
          <div className='col'>
            <h3 className="h3_heading_dark">Welcome back!</h3>
          </div>
        </div>
        {this.state.error && (
          <div className="row">
            <div className="col">
              <div className="alert alert-danger mb-3" role="alert">
                {this.state.error}
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col">
            <LoginForm onSubmit={this.handleSubmit} />
            <div className='mt-3 p_text_dark'>If you have not joined, create your own account <Link to='/register'><span className="form_link">here</span></Link>.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
