import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import CardBoard from "../../components/CardBoard";
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';

const styles = (theme) => ({
  grid: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    width: 500,
  },

  paper: {
    padding: theme.spacing(4),
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
    alignItems: "flex-start",
  },
});

class ColumnBoard extends Component {
  static contextType = AuthContext;

  handleAdd = () => {
    const { handleRefresh, boardId } = this.props;
    const { authToken } = this.context;

    API.Boards.createCardInColumn(authToken, boardId, 0, "My Name", "Lorem ipsum...")
      .then(() => handleRefresh())
      .catch(err => console.log(err));
  }

  render() {
    const { classes, title, cards } = this.props;

    return (
      <div>
        <Grid container item xs={12} md={4} className={classes.grid0}>
          <Grid item>
            <Paper className={classes.paper}>
              <div className={classes.box}>
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color="secondary"
                  gutterBottom
                >
                  {this.props.title}
                </Typography>
              </div>
              <div className={classes.alignRight}>
                {/* Should add a CardBoard onClick*/}
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.actionButtom}
                  onClick={this.handleAdd}
                >
                  Add
                </Button>
              </div>

              {cards.map(card => (
                <CardBoard {...card} />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ColumnBoard);
