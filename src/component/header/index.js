// Header.js
import React from "react";
import { Notifications } from "@mui/icons-material";
import "./header.css";

const Header = ({ title, userName }) => {
  return (
    <header className="header">
      {/* Left Section: Title */}
      <div className="header-left">{/* <h1>{title}</h1> */}</div>

      {/* Right Section: User Profile and Notifications */}
      <div className="header-right">
        <div className="user-info">
          <span className="user-name">{userName}</span>
          <Notifications className="notification-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
