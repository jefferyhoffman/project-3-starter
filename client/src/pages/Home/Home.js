import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Grid, Paper, Typography } from "@material-ui/core";
import HomePageColumn from "../../components/HomePageColumn";
import defaultData from "./defaultData.json";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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
    flexFlow: "row wrap",
    justifyContent: "center",
  },
  colGrid: {
    flexGrow: 1,
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
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  box: {
    marginBottom: 40,
    height: 120,
    textAlign: "center",

  },
});

class HomePage extends Component {
  state = {
    defaultData,
  };

  onDragEnd = (result) => {};
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
            item
            className={classes.grid}
          >
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      color="secondary"
                      style={{ textTransform: "uppercase" }}
                      gutterBottom
                      variant="h4"
                    >
                      Welcome to Task Attack
                    </Typography>
                    <Typography  variant="h6" gutterBottom>
                      This app was created for busy people like you!
                      Register and create an account.
                      You will see a dashboard that looks like the one below. Click on "Add a task"
                      to add a task, then edit the title and description to save edit.
                      Send us your feedback at taskattack@gmail.com. 

                    </Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.colGrid}>
              <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.defaultData.map((data, index) => (
                  <Droppable droppableId={data.id}>
                    {(provided) => (
                      <HomePageColumn
                        innerRef={provided.inneRef}
                        {...provided.droppableProps}
                        {...provided.placeholder}
                        {...data}
                        key={data.id}
                        index={index}
                      />
                    )}
                  </Droppable>
                ))}
              </DragDropContext>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
