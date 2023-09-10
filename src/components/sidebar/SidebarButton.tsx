import React from "react";
import "./SidebarButton.css";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";

interface buttonProps {
  title: string;
  to: string;
  icon: React.ReactNode;
}

const SidebarButton: React.FC<buttonProps> = (props) => {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const btnClass = isActive ? "btn-body active" : "btn-body";

  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {props.icon}
        </IconContext.Provider>

        <p className="btn-title">{props.title}</p>
      </div>
    </Link>
  );
};

export default SidebarButton;
