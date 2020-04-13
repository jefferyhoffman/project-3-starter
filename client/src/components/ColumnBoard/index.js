import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Input,
} from "@material-ui/core";
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

  state = {
    card: undefined,
    column: undefined,
    isCardLoading: true,
  };

  // componentDidMount() {
  //   this.refreshColumn();
  // }
  // refreshColumn = () => {
  //   const { authToken } = this.context;

  //   API.Cards.createCardInColumn(authToken)
  //     .then((res) => {
  //       console.log(res.data);
  //       this.setState({ card: res.data, isCardLoading: false });
  //     })
  //     .catch((err) => console.log(err));
  // };

  handleAddCard = () => {
    const { handleRefresh, boardId, colIndex} = this.props;
    const { authToken } = this.context;
    console.log("Adding a card");

    API.Cards.createCardInColumn(
      authToken, 
      boardId, 
      colIndex, 
      "Edit me", 
      "Edit me")
      .then(() => handleRefresh())
      .catch((err) => console.log(err));
  };

  handleSave = (cardIndex, title, body) => {
    const { authToken } = this.context;
    const { boardId, colIndex } = this.props;
    console.log("Saving a card");
    API.Cards.updateCard(authToken, boardId, 
      colIndex,cardIndex, title, body)
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
        {/* {isCardLoading ? (
          <div> Loading a card...</div>
        ) : card ? ( */}
        <Grid container item>
          <Grid item className={classes.grid} xs={12}>
            <Paper className={classes.paper}>
              <div>
                <div>
                  {/* <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom="true"
                  >
                     {this.props.title}  
                  </Typography> */}
                  {/* to input column text */}
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
                  {/* Should add a CardBoard onClick*/}
                  {/* <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    className={classes.actionButtom}
                    //onClick={this.handleColEdit}
                  >
                    Edit
                  </Button> */}
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

              {cards.map((card,index) => (
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
