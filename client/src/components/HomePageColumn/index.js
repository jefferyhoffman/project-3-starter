import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
} from "@material-ui/core";

const styles = (theme) => ({
  
  colGrid: {
    flexGrow: 1,
    justifyContent: "flex-end",
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
            <Paper className={classes.paper}>
              <div>
                <div>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom="true"
                  >
                    {this.props.colTitle}
                  </Typography>

                  <form noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      color="secondary"
                      value={this.props.colBody}
                    />
                  </form>
                </div>
                <div className={classes.alignRight}>
                  <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    className={classes.actionButtom}
                  >
                    Edit
                  </Button>
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
                        defaultValue="Title"
                        className={classes.cardTitle}
                        variant="filled"
                        value={this.props.taskTitle}
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
                        defaultValue="Default Value"
                        value={this.props.taskBody}
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
                      variant="contained"
                      size="small"
                      className={classes.actionButton}
                    >
                      Edit
                    </Button>
                    <Button
                      color="primary"
                      variant="outlined"
                      size="small"
                      className={classes.actionButton}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(HomePageColumn);
