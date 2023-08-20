import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { CiMusicNote1 } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";

const Sidebar: React.FC = () => {
  const [activeNav, setActiveNav] = useState(() => {
    const data = localStorage.getItem("page");
    return data || "#home";
  });

  useEffect(() => {
    localStorage.setItem("page", activeNav);
  }, [activeNav]);

  return (
    <div className="sidebar-container">
      <h2 className="sidebar-header">Music App</h2>
      <div className="sidebar-content">
        <h3>CATEGORY</h3>
        <div className="sidebar-categories">
          <a
            href="#home"
            className={activeNav === "#home" ? "active-bar" : ""}
            onClick={() => setActiveNav("#home")}
          >
            <AiOutlineHome className="sidebar-icon" /> <h3>Home</h3>
          </a>
          <a
            href="#song"
            className={activeNav === "#song" ? "active-bar" : ""}
            onClick={() => setActiveNav("#song")}
          >
            <CiMusicNote1 className="sidebar-icon" /> <h3>Songs</h3>
          </a>
          <a
            href="#favorites"
            className={activeNav === "#favorites" ? "active-bar" : ""}
            onClick={() => setActiveNav("#favorites")}
          >
            <AiOutlineHeart className="sidebar-icon" /> <h3>Favorites</h3>
          </a>
        </div>
      </div>
      <footer>© Roi Yehezkel</footer>
    </div>
  );
};

export default Sidebar;
