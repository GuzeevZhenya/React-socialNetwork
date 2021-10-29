import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navbar-item">
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="navbar-item">
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className="navbar-item">
        <a>News</a>
      </div>
      <div className="navbar-item">
        <a>Music</a>
      </div>
      <div className="navbar-item">
        <a>Setings</a>
      </div>
    </nav>
  );
};

export default Navbar;
