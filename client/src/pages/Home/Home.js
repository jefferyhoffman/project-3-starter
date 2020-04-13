import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Grid } from "@material-ui/core";
import HomePageColumn from "../../components/HomePageColumn";
import defaultData from "./defaultData.json";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

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
  state = {
    defaultData,
    
  };

  onDragEnd = result => {

  }
  render() {
    const { classes } = this.props;

    return (
      <DragDropContext
      onDragEnd={this.onDragEnd}>
         <div className={classes.root}>
        <Grid container justify="left">
          <Grid xs={12} spacing={4} container item className={classes.grid}>
            {this.state.defaultData.map((data,index) => (
              
              <Droppable droppableId={data.id}>
                {provided => (

                <HomePageColumn 
                innerRef={provided.inneRef}
                {...provided.droppableProps}
                {...provided.placeholder}
                {...data} 
                key={data.id}
                index={index} />) }

                 
              </Droppable>
             
            ))}
          </Grid>
        </Grid>
      </div>

      </DragDropContext>
     
    );
  }
}

export default withStyles(styles)(HomePage);
