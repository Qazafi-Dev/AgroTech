import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { RiUser3Fill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";

const AccountMenu = ({
  open = false,
  anchorEl = false,
  handleClose = () => {},
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <RiUser3Fill />
        </ListItemIcon>
        My Account
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <FaShieldAlt />
        </ListItemIcon>
        Reset Password
      </MenuItem>

      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;
