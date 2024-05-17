import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

// Header component for website navigation
const Header = () => {
  // Assume isLoggedIn is a state variable representing the user's login status
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand/logo */}
        <a className="navbar-brand" href="/">
          Style-Mantra
        </a>
        {/* Toggle button for collapsing navbar on small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links and form */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Navigation links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className="nav-link mx-lg-4 mx-md-0 mx-sm-0 mx-0"
                href="/Products"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link mx-lg-4 mx-md-0 mx-sm-0 mx-0 dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Men's
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Women's
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Kids
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-lg-4 mx-md-0 mx-sm-0 mx-0" href="/">
                Latest Arrivals
              </a>
            </li>
          </ul>
          {/* Search form */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
          {/* Cart and Login buttons */}
          <div className="d-flex align-items-center">
            <a href="/" className="btn btn-outline-secondary mx-2">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </a>
            <a href="/login" className="btn btn-outline-secondary mx-2">
              <FontAwesomeIcon icon={faUser} /> Login
            </a>
          </div>
          {/* User account dropdown (conditionally rendered) */}
          {isLoggedIn && (
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUser} /> My Account
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/pentry">
                    Data Entry
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
