// Sidebar.js
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>AgriDashboard</h2>
      <ul>
        <li>Crop Management</li>
        <li>Soil Analysis</li>
        <li>Weather</li>
        <li>Yield Predictions</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
