import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginForm/LoginForm';
import withStyles from "@material-ui/styles/withStyles";
import { Grid, Typography } from "@material-ui/core";
const backgroundShape = require("../../images/shape.svg");


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 200px",
    paddingBottom: 200,
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  box: {
    marginBottom: 40,
    height: 65,
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
});
class Login extends Component {
  static contextType = AuthContext;

  state = {
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

  render() {
    const { classes } = this.props;

    const { from } = this.props.location.state || { from: { pathname: "/secret" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid
            spacing={4}
            alignItems="center"
            justify="center"
            container
            className={classes.grid}
          >
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    <h1>Login</h1>
                  </Typography>
                </div>

            {this.state.error &&
              <div className={classes.box}>
                  <div className='alert alert-danger mb-3' role='alert'>
                    {this.state.error}
                  </div>
              </div>}
              <Grid item xs={12} md={4}>
                <LoginForm onSubmit={this.handleSubmit} />
                <Grid item xs={12} md={8} justify='center'>Don't have an account? <Link to='/register'>Click here to register.</Link>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
