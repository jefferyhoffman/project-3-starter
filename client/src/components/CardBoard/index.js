import React, { useState } from "react";
import withStyles from "@material-ui/styles/withStyles";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  CardHeader,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
const cardMenu = ["To Do", "In Progress", "Done"];
const ITEM_HEIGHT = 20;

const CardBoard = (props) => {

  const { classes, title, body, handleSave, handleDelete } = props;

  // card menu
  const [anchorMenu, setAnchorMenu] = useState(null);
  const open = Boolean(anchorMenu);
  const handleClick = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorMenu(null);
  }

  return (
    <div>
      <Card variant="outlined">
        <div>
          
          <div>
            {/* <CardHeader> */}
           
              <IconButton 
                aria-label="Status"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}

              >
                <MoreVertIcon />
              </IconButton>
              
                <Menu
                  id="long-menu"
                  anchorMenu={anchorMenu}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  }}
                >
                  {cardMenu.map((menuoption) => (
                    <MenuItem key={menuoption} selected={menuoption === 'Pyxis'} onClick={handleClose}>
                      {menuoption}
                    </MenuItem>
                  ))}
                </Menu>
              
            


          {/* </CardHeader> */}

          </div>

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

            {/* {<AutoComplete>
                  {body}
              </AutoComplete> */}

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
