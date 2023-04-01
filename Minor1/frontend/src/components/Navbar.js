import React from 'react'
import './Navbar.css'
import logo from "../assets/logo1.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav" id="navbar">
        <div className="nav-left">
          <Link to="/">
            <div className="nav-logo">
              <img src={logo} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar