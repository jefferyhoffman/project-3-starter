import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import {
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  IconButton,
} from "@material-ui/core";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Draggable } from "react-beautiful-dnd";

const styles = (theme) => ({
  colGrid: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 400,
    marginLeft: 20,
    marginBottom: 30,
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
    width: 100,
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardTitle: {
    fontSize: 18,
  },
  formStyle: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
});
class HomePageColumn extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container item>
          <Grid item className={classes.colGrid} xs={12} md={4}>
            <Draggable dragagableId={this.props.id} index={this.props.index}>
              {(provided) => (
                <Paper
                  className={classes.paper}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  inneRef={provided.innerRef}
                >
                  <div>
                    <div>
                      <form noValidate autoComplete="off">
                        <TextField
                          id="standard-basic"
                          color="secondary"
                          value={this.props.colBody}
                        />
                      </form>
                    </div>
                    <div className={classes.alignRight}>
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        className={classes.actionButtom}
                      >
                        Add a Task
                      </Button>
                    </div>
                  </div>
                  {/* Card here */}
                  <Card variant="outlined">
                    <div>
                      {/* <CardHeaderMenu /> */}

                      <CardContent>
                        <form
                          noValidate
                          autoComplete="off"
                          className={classes.formStyle}
                        >
                          <TextField
                            id="standard-basic"
                            multiline
                            rows="1"
                            defaultValue={this.props.taskTitle}
                            className={classes.cardTitle}
                            variant="filled"
                            // value={this.props.taskTitle}
                          />
                        </form>

                        <form
                          noValidate
                          autoComplete="off"
                          className={classes.formStyle}
                        >
                          <TextField
                            id="filled-multiline-static"
                            multiline
                            rows="4"
                            defaultValue={this.props.taskBody}
                            // value={this.props.taskBody}
                          />
                        </form>
                      </CardContent>
                    </div>
                    <div className={classes.alignRight}>
                      <CardActions>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          className={classes.actionButtom}
                        >
                          Save
                        </Button>

                        <Button
                          color="primary"
                          variant="outlined"
                          size="small"
                          className={classes.actionButton}
                        >
                          Delete
                        </Button>
                        <IconButton
                          //onClick={this.openDialog}
                          color="primary"
                          variant="outlined"
                          size="small"
                          className={classes.sideButton}
                        >
                          <ArrowLeftIcon />
                        </IconButton>
                        <IconButton
                          //onClick={this.openDialog}
                          color="primary"
                          variant="outlined"
                          size="small"
                          className={classes.sideButton}
                        >
                          <ArrowRightIcon />
                        </IconButton>
                      </CardActions>
                    </div>
                  </Card>
                </Paper>
              )}
            </Draggable>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(HomePageColumn);
