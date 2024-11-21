import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";
import { Link } from 'react-router-dom';


function Header() {
  const { isAuthenticated, userEmail, logout } = useAuth(); // Access userEmail from context
  const [showMenu, setShowMenu] = useState(false); // Track menu visibility
  const menuRef = useRef(null); // Reference to the user menu div

  const handleUserClick = () => {
    setShowMenu((prev) => !prev); // Toggle the menu when the user clicks on the profile icon
  };

  const handleLogout = () => {
    logout(); // Trigger logout from context
    setShowMenu(false); // Close the menu
  };

  // Close the menu when clicking outside the user menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false); // Close menu if click is outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav>
        <div>
          <div className="logo1">Yor</div>
          <div className="logo2">Fit</div>
        </div>

        <ul className="nav-links">
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><Link to="/landing/HowItWorks/">How it Works</Link></li>
          <li><a href="#">About Us</a></li>
        </ul>

        <div className="cart">
          <a href="#" onClick={handleUserClick}>
            <img src="/images/user.png" alt="User" />
          </a>
          {showMenu && isAuthenticated && (
            <div ref={menuRef} className="user-menu">
              <p className="user-email">
                <span>Logged in as: </span>
                <span className="email">{userEmail}</span>
              </p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
          <a href="#">
            <img src="/images/cart-icon.png" alt="Cart" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
