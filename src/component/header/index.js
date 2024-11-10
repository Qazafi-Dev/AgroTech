// Header.js
import React, { useState } from "react";
import { Notifications } from "@mui/icons-material";
import "./header.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  MdOutlineMenuOpen,
  MdOutlineMenu,
  MdLightMode,
  MdDarkMode,
  MdEmail,
} from "react-icons/md";
import { FaBell, FaUser } from "react-icons/fa6";

import Images from "../../contant/images";
import Searchbox from "../searchbox";
import AccountMenu from "../menu/accountmenu";
import NotificationMenu from "../menu/notificationmenu";
const Header = ({ title, userName }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifanchorEl, setNotifAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const notifOpen = Boolean(notifanchorEl);

  const handleAccountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAccountClose = () => {
    setAnchorEl(null);
  };
  const handleNotifClick = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };
  const handleNotifClose = () => {
    setNotifAnchorEl(null);
  };
  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row  d-flex align-items-centermw-100 ">
          <div className="col-sm-2 part-1">
            <Link to={"/"} className="d-flex align-items-center logo">
              <img src={Images.logo} />
              <span className="ml-2">AGRO TECH</span>
            </Link>
          </div>
          <div className="col-xs-3 d-flex align-items-center part-2 pl-4">
            <Button className="rounded-circle mr-3">
              <MdOutlineMenu />
            </Button>
            <Searchbox />
          </div>
          <div className="col-sm-7 d-flex align-items-center justify-content-end part-3">
            <Button className="rounded-circle mr-3">
              <MdLightMode />
            </Button>
            <Button onClick={handleNotifClick} className="rounded-circle mr-3">
              <FaBell />
            </Button>
            <Button className="rounded-circle mr-3">
              <MdEmail />
            </Button>
            <div className="myAccWrapper">
              <Button
                onClick={handleAccountClick}
                className="myAcc d-flex align-items-center "
              >
                <Button className="userImg mr-3">
                  <FaUser />
                </Button>
                <div className="userInfo">
                  <h4>Qasim Ali</h4>
                  <p className="mb-0 mt-0">@qasimali</p>
                </div>
              </Button>
            </div>
            <AccountMenu
              open={open}
              anchorEl={anchorEl}
              handleClose={handleAccountClose}
            />
            <NotificationMenu
              open={notifOpen}
              anchorEl={notifanchorEl}
              handleClose={handleNotifClose}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
