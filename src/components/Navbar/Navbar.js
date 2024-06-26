import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/cfi-logo-black.png";
import "./Navbar.scss";
export default () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <Fragment>
      <nav>
        <div
          id="nav-icon1"
          onClick={handleClick}
          className={click ? "open" : ""}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div> */}
        <div className="nav-bar">
          <div className="brand">
            <a href="">
              <img src={logo} alt="muon Logo" />
            </a>
          </div>
        </div>
        <div className={click ? "top-nav open" : "top-nav"}>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/open-house"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                OPEN HOUSE
              </Link>
            </li>
            <li>
              <Link to="/clubs" className="nav-link" onClick={closeMobileMenu}>
                CLUBS
              </Link>
            </li>

            <li>
              <Link
                to="/achievements"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                ACHIEVEMENTS
              </Link>
            </li>
            <li>
              <Link to="/teams" className="nav-link" onClick={closeMobileMenu}>
                COMPETITION TEAMS
              </Link>
            </li>
            <li>
              <Link to="/media" className="nav-link" onClick={closeMobileMenu}>
                MEDIA
              </Link>
            </li>
            <li>
              <Link to="/alumni" className="nav-link" onClick={closeMobileMenu}>
                ALUMNI
              </Link>
            </li>
            <li>
              <Link
                to="/aboutUs"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/contactUs"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
