import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar-header">Music App</h2>
      <div className="sidebar-content">
        <h3>CATEGORY</h3>
        <div className="sidebar-categories">
          <h3>Home</h3>
          <h3>Songs</h3>
          <h3>Favorites</h3>
        </div>
      </div>
      <footer>© Roi Yehezkel</footer>
    </div>
  );
};

export default Sidebar;
