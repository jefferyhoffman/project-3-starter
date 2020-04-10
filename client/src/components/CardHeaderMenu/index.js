import React, { useState } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = (theme) => ({
  root: {
    nimWidth: 275,
    nimHeight: 300,
  },
});
const cardMenu = ["To Do", "In Progress", "Done"];
const ITEM_HEIGHT = 20;

const CardHeaderMenu = (props) => {
  // card menu
  const [anchorMenu, setAnchorMenu] = useState(null);
  const open = Boolean(anchorMenu);
  const handleClick = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorMenu(null);
  };

  return (
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
            width: "20ch",
          },
        }}
      >
        {cardMenu.map((menuoption) => (
          <MenuItem
            key={menuoption}
            selected={menuoption === "Pyxis"}
            onClick={handleClose}
          >
            {menuoption}
          </MenuItem>
        ))}
      </Menu>

      {/* </CardHeader> */}
    </div>
  );
};

export default withStyles(styles)(CardHeaderMenu);
