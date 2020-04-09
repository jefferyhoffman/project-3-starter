import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";

const styles = (theme) => ({  
  root:{
    nimWidth: 275,
    nimHeight:  300
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

class ColumnBoard extends Component {
  render() {
    const { classes, title, body } = this.props;

    return (
      <div>
        <Card>
          <CardContent>
              <Typography >

                  {title}
              </Typography>
              {/* <AutoComplete>
                  {body}
              </AutoComplete> */}
        

          </CardContent>
          <CardActions>
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
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ColumnBoard);
