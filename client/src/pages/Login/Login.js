import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

<<<<<<< HEAD
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./style.css";
=======
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";
import LoginForm from "../../components/LoginForm/LoginForm";
>>>>>>> a55919de72e4491c202071b7e930e82d6e64e2cd

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

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/userpage" },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
<<<<<<< HEAD
      <div className='Login'>
        <div className='row'>
          <div className='col'>
            <h3 className="h3_heading_dark">Log in</h3>
=======
      <div className="Login">
        <div className="row">
          <div className="col">
            <h1>Login</h1>
>>>>>>> a55919de72e4491c202071b7e930e82d6e64e2cd
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
<<<<<<< HEAD
            <div className='mt-3 p_text_dark'>Create your own account <Link to='/register'>here.</Link></div>
=======
            <div className="mt-3">
              Don't have an account?{" "}
              <Link to="/register">Click here to register.</Link>
            </div>
>>>>>>> a55919de72e4491c202071b7e930e82d6e64e2cd
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
