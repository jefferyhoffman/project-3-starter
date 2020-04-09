import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Grid, Paper, Typography, Button } from "@material-ui/core";

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

class HomePage extends Component {
  render() {
    const { classes } = this.props;

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
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterbottom="True"

                  >
                    Sample To-Do-List
                  </Typography>
                  <Typography variant="body2"             gutterbottom="True"
>
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
                    gutterbottom="True"

                  >
                    second Sample To-Do-List
                  </Typography>
                  <Typography variant="body2"             gutterbottom="True"
>
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
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
