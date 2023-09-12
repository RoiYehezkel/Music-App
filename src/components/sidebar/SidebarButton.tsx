import React from "react";
import "./SidebarButton.css";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";

interface buttonProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  signOutHandler?: () => void;
}

const SidebarButton: React.FC<buttonProps> = ({
  title,
  to,
  icon,
  signOutHandler,
}) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  const btnClass = isActive ? "btn-body active" : "btn-body";

  return (
    <Link to={to}>
      <div
        className={btnClass}
        onClick={() => {
          if (signOutHandler) {
            signOutHandler();
          }
        }}
      >
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {icon}
        </IconContext.Provider>

        <p className="btn-title">{title}</p>
      </div>
    </Link>
  );
};

export default SidebarButton;
