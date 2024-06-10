import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import "../../assets/css/style.css";

function Header() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-sm fixed-top ${
      navbarBackground ? "bg-white" : "bg-transparent"
    }`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img id="logo" src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link linkc" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link linkc" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link linkc" to="/destinations">
                Destinations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link linkc" to="/contact">
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link linkc" to="/community">
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn event_btn" to="/book-event">
                <span id="event_btn_txt">Book an event</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
