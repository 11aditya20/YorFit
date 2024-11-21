import React, { useState, useEffect, useRef } from "react";
// import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";
import { Link } from 'react-router-dom';


function Header() {

  return (
    <header>
      <nav>
        <div>
          <Link to="/">
          <div className="logo1">Yor</div>
          <div className="logo2">Fit</div>
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/howitworks">How it Works</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/getfit">Get Fit</Link></li>
        </ul>

        <div className="cart">
          <a href="#">
            <img src="/images/user.png" alt="User" />
          </a>
          {/* {showMenu && isAuthenticated && (
            <div ref={menuRef} className="user-menu">
              <p className="user-email">
                <span>Logged in as: </span>
                <span className="email">{userEmail}</span>
              </p>
              <button>Logout</button>
            </div>
          )} */}
          <a href="#">
            <img src="/images/cart-icon.png" alt="Cart" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
