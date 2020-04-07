import React, { Component } from "react";
// import withStyles from "@material-ui/styles/withStyles";
// import { Link, withRouter } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import { Link as MaterialLink } from "@material-ui/core";
// import Menu from "./Menu";

const useStyles = theme => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    // borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "white"
  },
  inline: {
    display: "inline"
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  },
  // link: {
  //   textDecoration: "none",
  //   color: "inherit"
  // },
  // productLogo: {
  //   display: "inline-block",
  //   borderLeft: `1px solid ${theme.palette.grey["A100"]}`,
  //   marginLeft: 32,
  //   paddingLeft: 24,
  //   [theme.breakpoints.up("md")]: {
  //     paddingTop: "1.5em"
  //   }
  // },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
    [theme.breakpoints.up("md")]: {
      paddingTop: "0.8em"
    }
  },
  // iconContainer: {
  //   display: "none",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "block"
  //   }
  // },
  iconButton: {
    float: "right"
  }
  // tabContainer: {
  //   marginLeft: 32,
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none"
  //   }
  // },
  // tabItem: {
  //   paddingTop: 20,
  //   paddingBottom: 20,
  //   minWidth: "auto"
  // }
})

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <button color="inherit">Login</button>
        </Toolbar>
      </AppBar>
    </div>
  );
};