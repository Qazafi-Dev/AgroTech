import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";

import { Button, Divider } from "@mui/material";
import { FaGear } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

const ITEM_HEIGHT = 36;
const MOBILE_ITEM_HEIGHT = 48;

const ITEM_PADDING_TOP = 8;
const MENU_ITEMS = 3;
const NotificationMenu = ({
  open = false,
  anchorEl = false,
  handleClose = () => {},
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      className="notications dropdown-list"
      id="notif-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          style: {
            maxWidth: "22%",
            minWidth: "15%",
            maxHeight: "50%",
          },
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
      <div className="align-items-center d-flex menu-head">
        <h5>Notifications</h5>
        <FaGear />
      </div>
      <Divider />
      <div className="scroll ">
        {[1, 1, 1, 1, 1].map(() => (
          <div>
            <MenuItem onClick={handleClose}>
              {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => ( */}
              <div className="d-flex align-items-center">
                <div className="userImg">
                  <span className="rounded-circle d-flex align-items-center">
                    <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                  </span>
                </div>
              </div>
              <div className="notifInfo">
                <h4>
                  <span>
                    <b>This </b>
                    is the test Notifications for
                    <b> Qasim Ali </b>
                    to manage
                  </span>
                </h4>
              </div>
              {/* ))} */}
            </MenuItem>
          </div>
        ))}
      </div>
    </Menu>
  );
};

export default NotificationMenu;
