import React  from "react";
import withStyles from "@material-ui/styles/withStyles";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
} from "@material-ui/core";

import CardHeaderMenu from "../CardHeaderMenu";

const styles = (theme) => ({
  root: {
    nimWidth: 275,
    nimHeight: 300,
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

const CardBoard = (props) => {
  
  const { classes, title, body, handleSave, handleEdit, handleDelete } = props;

  return (
    <div>
       <Card variant="outlined">
        <div>
          <CardHeaderMenu />

          <CardContent>
            <form noValidate autoComplete="off" className={classes.formStyle}>
              <TextField
                id="standard-basic"
                label="Task Title"
                multiline
                rows="1"
                defaultValue="Title"
                className={classes.cardTitle}
                variant="filled"
                value={title}
              />
            </form>

            <form noValidate autoComplete="off" className={classes.formStyle}>
              <TextField
                id="filled-multiline-static"
                label="Description"
                multiline
                rows="4"
                defaultValue="Default Value"
                value={body}
              />
            </form>
          </CardContent>
        </div>
        <div className={classes.alignRight}>
          <CardActions>
            <Button
              //onClick={this.openDialog}
              variant="contained"
              color="secondary"
              size="small"
              className={classes.actionButtom}
              //value={value}
              onClick={() => handleSave(props)}
            >
              Save
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              className={classes.actionButton}
              onClick={() => handleEdit(props)}
            >
              Edit
            </Button>
            <Button
              //onClick={this.openDialog}
              color="primary"
              variant="outlined"
              size="small"
              className={classes.actionButton}
              onClick={() => handleDelete(props)}
            >
              Delete
            </Button>
          </CardActions>
        </div>
      </Card> 
      
    </div>
  );
};

export default withStyles(styles)(CardBoard);
