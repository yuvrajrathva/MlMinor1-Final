import React from 'react'
import './Navbar.css'
import logo from "../assets/logo1.png"
const Navbar = () => {
  return (
    <div class="navbar-container">
      <div class="nav" id="navbar">
        <div class="nav-left">
          <a href="home/">
            <div class="nav-logo">
              <img src={logo} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar