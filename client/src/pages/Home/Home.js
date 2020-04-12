import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Grid } from "@material-ui/core";
import HomePageColumn from "../../components/HomePageColumn";

const backgroundShape = require("../../images/shape.svg");

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 200px",
    paddingBottom: 150,
  },
  grid: {
    flexGrow: 1,
    maxWidth: 1000,
    margin: "30px auto 30px",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
      flexFlow: "column",
    
    },
    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 20px)",
      flexFlow: "column",
    },

    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
  },
});

class HomePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="left">
          <Grid xs={12} spacing={4} container item className={classes.grid}>
            <HomePageColumn
              colTitle={"To Do"}
              colBody={"Tasks to complete "}
              taskTitle={"React"}
              taskBody={"Read on React Hooks"}
            />

            <HomePageColumn
              colTitle={"In Progress"}
              colBody={"Tasks in Progress "}
              taskTitle={"Express Server"}
              taskBody={"Set up DB connections"}
            />

            <HomePageColumn
              colTitle={"Completed"}
              colBody={"Tasks to be completed "}
              taskTitle={"Node"}
              taskBody={"Set Up Development Environment"}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
