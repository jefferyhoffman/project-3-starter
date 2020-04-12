import React, { Component } from 'react';
import withStyles from "@material-ui/styles/withStyles";

// import { Link } from 'react-router-dom';
// import Gravatar from 'react-gravatar';
import { Button } from "@material-ui/core";


import AuthContext from '../../contexts/AuthContext';

const styles = (theme) => ({
  actionButton: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 100,
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  }


});


class AuthDropdown extends Component {
  static contextType = AuthContext;

  state = {
    isOpen: false
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = () => {
    this.context.onLogout();
    //this.props.onClick();
  }

  render() {
    const { classes } = this.props;

    const { user } = this.context;
    const { isOpen } = this.state;

    const dropdownMenuClass = `dropdown-menu dropdown-menu-right ${isOpen && 'show'}`;

    return (
<<<<<<< HEAD
      <div className={classes.alignRight}>
        <Button className="btn btn-link dropdown-toggle" onClick={this.toggleOpen} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {/* <Gravatar className="rounded-circle" email={user.email} size={30} /> */}
           {user.email}
        </Button>
          <Button color="primary"
              variant="outlined"
              size="small"
              className={classes.actionButton} onClick={this.handleLogout}>Logout</Button>
      </div>
=======
      <li className="nav-item dropdown">

        <button className="btn btn-link dropdown-toggle" onClick={this.toggleOpen} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          
          <Gravatar className="rounded-circle" email={user.email} size={30} /> {user.email}
       
        </button>
        <div className={dropdownMenuClass} aria-labelledby="navbarDropdown">

          <div className="dropdown-item" onClick={this.handleLogout}>Logout</div>

        </div>
      </li>
>>>>>>> 68004c69046f20df9689a0b696658f20e5b222cf
    );


  }
}

export default withStyles(styles)(AuthDropdown);
