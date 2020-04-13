import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import CardBoard from "../../components/CardBoard";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";

const styles = (theme) => ({
  grid: {
    flexGrow: 1,
    justifyContent: "center",
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

  state = {
    card: undefined,
    column: undefined,
    isCardLoading: true,
  };

  handleAddCard = () => {
    const { handleRefresh, boardId, colIndex } = this.props;
    const { authToken } = this.context;
    console.log("Adding a card");

    API.Cards.createCardInColumn(
      authToken,
      boardId,
      colIndex,
      "Edit me",
      "Edit me"
    )
      .then(() => handleRefresh())
      .catch((err) => console.log(err));
  };

  handleSave = (cardIndex, title, body) => {
    const { authToken } = this.context;
    const { boardId, colIndex } = this.props;
    console.log("Saving a card");
    API.Cards.updateCard(authToken, boardId, colIndex, cardIndex, title, body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  handleDelete = (event) => {
    event.preventDefault();
    const { authToken } = this.context;
    const { boardId, colId, cardId } = this.props;
    console.log("Deleting a card");
    API.Cards.deleteCardInColumn(authToken, boardId, colId, cardId)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  handleEdit = (event) => {
    event.preventDefault();
    const { authToken } = this.context;
    const { boardId, colId, cardId, title, body } = this.props;

    console.log("Editing...");

    API.Cards.updateCard(authToken, boardId, colId, cardId, title, body)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const { classes, title, cards } = this.props;
    const { card, column } = this.state;

    return (
      <div>
        <Grid container item>
          <Grid item className={classes.grid} xs={12}>
            <Paper className={classes.paper}>
              <div>
                <div>
                  <form noValidate autoComplete="off">
                    <TextField
                      id="standard-basic"
                      // label="Column Title"
                      // variant="outlined"
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      defaultValue={title}
                      value={title}
                      // onChange = {this.editColumnTitle}
                    />
                  </form>
                </div>
                <div className={classes.alignRight}>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    className={classes.actionButtom}
                    onClick={this.handleAddCard}
                  >
                    Add a Task
                  </Button>
                </div>
              </div>

              {cards.map((card, index) => (
                <CardBoard
                  {...card}
                  //colId={column._id}
                  //cardId={card._id}
                  cardIndex={index}
                  handleSave={this.handleSave}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                />
              ))}
            </Paper>
          </Grid>
        </Grid>
        {/* ) : null} */}
      </div>
    );
  }
}

export default withStyles(styles)(ColumnBoard);
