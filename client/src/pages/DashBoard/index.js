import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Grid, Paper, Typography, Button } from "@material-ui/core";

const backgroundShape = require("../../images/shape.svg");

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 400,
    height: "100%",
  },
  grid0: {
    flexGrow: 1,

  },

  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
    display:"flex",
    justifyContent: "space-evenly",
    flexFlow: "row nowrap",
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

class DashBoard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid
            spacing={4}
            container
            className={classes.grid}
          >
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    To Do
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    To read a book
                  </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.actionButtom}
                  >
                    Learn more
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    In Progress
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    learn coding
                  </Typography>
                </div>
                <div className={classes.alignRight}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.actionButtom}
                  >
                    Edit
                  </Button>
                  <Button
                    //onClick={this.openDialog}
                    variant="outlined"
                    className={classes.actionButtom}
                  >
                    Delete
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    Done
                  </Typography>
                </div>
                <div className={classes.alignRight}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.actionButtom}
                  >
                    Add
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    Ice Box
                  </Typography>
                </div>
                <div className={classes.alignRight}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.actionButtom}
                  >
                    Add
                  </Button>
                </div>
                <div>


                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DashBoard);
