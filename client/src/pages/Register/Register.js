import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import withStyles from "@material-ui/styles/withStyles";
import { Grid, Paper, Typography } from "@material-ui/core";
const backgroundShape = require("../../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "visible",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 250px",
    paddingBottom: 560
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
    height: 80,
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

class Register extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: "",
    boardCreated: false
  }

  handleBoard = (title, userId, columns) => {
    API.Boards.createBoard(title, userId, columns)
      .then(response => {
        this.setState({ boardCreated: true });
        console.log("response: " + response);
        console.log("this.state: " + this.state);
      })
      .catch(err => {
        if (err.response.status === 401) {
          this.setState({ error: "board not created." });
        }
      });
  };


  handleSubmit = (email, password) => {
    API.Users.create(email, password)
      .then(response => {
        this.setState({ redirectToReferrer: true });
        console.log(response);
        
      })
      // .then(() => this.handleBoard())
      .catch(err => {
        if (err.response.status === 401) {
          this.setState({ error: "Sorry, that email/password combination is not valid. Please try again." });
        }
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
          gutterbottom="True"
          container
          className={classes.grid}
        >
          <Grid item xs={12} md={4}>
            <Grid item className={classes.box}>

              <Paper className={classes.paper}>
                <Typography
                  style={{ textTransform: "uppercase", fontSize: 40 }}
                  color="secondary"
                  align='center'
                  variant="h1"
                >Register Account</Typography>

                {this.state.error &&
                  <div className={classes.box} >
                    <div role='alert'>
                      {this.state.error}
                    </div>
                  </div>
                }
                <div>
                  <RegistrationForm onSubmit={this.handleSubmit} />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
}

export default withStyles(styles)(Register);
