/**
 * Top Navbar
 */
import "./index.scss";
import React from "react";
import {
  Popover,
  Button,
  List,
  ListItem,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { MoreHoriz, Inbox as InboxIcon } from "@mui/icons-material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const btnMore = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className="navbar">
      <div className="left-logo">
        <AccountBalanceIcon sx={{ color: "#ff4500" }} />
        &nbsp; Community
      </div>
      <div className="search">
        <SearchOutlinedIcon />
        <input className="input" placeholder="search article" />
        <HighlightOffOutlinedIcon />
      </div>
      <div className="right">
        <Button variant="contained" color="warning">
          Log In
        </Button>
        &nbsp;
        <div className="more-icon">
          <MoreHoriz onClick={btnMore} />
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Box
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sign Up" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
