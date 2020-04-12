import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Grid, Paper, Typography, Button, TextField } from "@material-ui/core";
import CardBoard from "../../components/CardBoard";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";

const styles = (theme) => ({
  grid: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: 500,
    marginLeft: 20,
    marginBottom: 30,
  },

  paper: {
    padding: theme.spacing(4),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 100,
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
});

class ColumnBoard extends Component {
  static contextType = AuthContext;

 // editColumnTitle is icebox.. and also currently broken
  editColumnTitle = (title) => {
    // const { title } = this.props;
    API.Columns.updateColumnTitle(
      title,
    )
    .then((res) => {console.log(res)})
    .catch((err) => console.log(err));
  }

  handleAdd = () => {
    const { handleRefresh, boardId } = this.props;
    const { authToken } = this.context;

    API.Cards.createCardInColumn(
      authToken,
      boardId,
      1,
      "My Name",
      "Lorem ipsum..."
    )
      .then(() => handleRefresh())
      .catch((err) => console.log(err));
  };

  handleSave = (card) => {
    const { authToken } = this.context;
    API.Cards.createCardInColumn(
      authToken,
      this.props.id,
      this.props.index,
      card.title,
      card.id,
      card.body
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  handleDelete = (card) => {
    const { authToken } = this.context;
    API.Cards.deleteCardInColumn(
      authToken,
      this.props.id,
      this.props.index,
      card[cardIndex]
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const { classes, title, cards } = this.props;

    return (
      <div>
        <Grid container item>
          <Grid item className={classes.grid} xs={12}>
            <Paper className={classes.paper}>
              <div>
                <div>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom="true"
                  >
                    {/* {this.props.title} */}
                  </Typography>
                  {/* to input column text */}
                  <form noValidate autoComplete="off">
                    <TextField
                       id="standard-basic"
                       // label="Column Title"
                       // variant="outlined"
                       color="secondary"
                       defaultValue = {title}
                      // onChange = {this.editColumnTitle}
                    />
                  </form>
                </div>
                <div className={classes.alignRight}>
                  {/* Should add a CardBoard onClick*/}
                  <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    className={classes.actionButtom}
                    //onClick={this.handleEdit}
                  >
                    Edit
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    className={classes.actionButtom}
                    onClick={this.handleAdd}
                  >
                    Add a Task
                  </Button>
                </div>
              </div>

              {cards.map((card) => (
                <CardBoard
                  {...card}
                  handleSave={this.handleSave}
                  handleDelete={this.handleDelete}
                />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ColumnBoard);
