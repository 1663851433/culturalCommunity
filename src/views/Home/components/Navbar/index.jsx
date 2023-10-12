/**
 * Top Navbar
 */
import "./index.scss";
import {
  Popover,
  Button,
  List,
  ListItem,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import {
  MoreHoriz,
  Inbox as InboxIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import BaseDialog from "@/components/dialogCommon/index.jsx";

import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const open = Boolean(anchorEl);
  const [showPassword, setShowPassword] = useState(false);

  const btnMore = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dialogClose = () => {
    setDialogVisible(false);
  };

  const btnSignUp = () => {
    setDialogVisible(true);
  };
  return (
    <>
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
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <List>
                  <ListItem disablePadding onClick={btnSignUp}>
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
      <BaseDialog
        title="Sign Up"
        className="sign-form"
        open={dialogVisible}
        onClose={dialogClose}
      >
        <div className="form-main">
          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <OutlinedInput label="Email" />
          </FormControl>
          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
            <OutlinedInput label="Name" />
          </FormControl>
          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div className="form-footer">
          <Divider />
          <Button variant="contained" color="warning" size="large">
            Sign In
          </Button>
        </div>
      </BaseDialog>
    </>
  );
};

export default Navbar;
