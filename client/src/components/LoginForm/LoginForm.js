import React, { Component } from 'react';
import withStyles from "@material-ui/styles/withStyles";
import { Grid, Button } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import { TextField } from "@material-ui/core"
import Icon from '@material-ui/core/Icon';
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
    const { classes } = this.props;

    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl className='LoginForm' >
          <Grid item>
            <Icon>mail</Icon>
            <TextField className='form-control'
              id='email'
              type='email'
              name='email'
              placeholder='email@provider.com'
              value={email}
              onChange={this.handleInputChange}
            >
            </TextField>
          </Grid>
          <Grid item>
            <Icon>lock</Icon>
            <TextField
              className='form-control'
              id='password'
              type='password'
              name='password'
              placeholder='password'
              value={password}
              onChange={this.handleInputChange}
            >
            </TextField>
          </Grid>

          <Button color="primary"
            variant="contained"
            type="submit"
            className={classes.actionButton}>Login</Button>
        </FormControl>
      </form>
    )
  }
}
export default withStyles(styles)(LoginForm);