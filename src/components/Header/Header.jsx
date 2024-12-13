import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import "./Header.css";

const Header = () => {
  // const navigationLinks = [
  //   { label: "Home", Path: "/arviewer" },
  //   { label: "About", Path: "/arviewer/about" },
  //   { label: "Feedback", Path: "/arviewer/feedback" },
  //   { label: "SignIn", Path: "/arviewer/sign-in" },
  // ];
  const navigationLinks = [];
  const [showMobileSidebar, setShowMobileSidebar] = useState(true);
  const handleItemClick = () => {
    setShowMobileSidebar(true);
  };
  return (
    <header>
      <div className="logo-img-container">
        <Link to="/arviewer">
          <img src="arviewer/neoverse_header_img.png"  className="logo-img" />
        </Link>
      </div>
      <div className="profile-img">
        <img />
      </div>
      {/* Mobile Menu Icon */}
      {/* <nav>
        <div className="navtop">
          <h3>
            <Link
              to="/"
              onClick={() => showMobileSidebar && setShowMobileSidebar(false)}
              className="project-title"
            >
            </Link>
          </h3>
          <div
            className={`mobile-menu-icon ${!showMobileSidebar ? "active" : ""}`}
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            {Array.from({ length: 2 + showMobileSidebar }, (_, i) => (
              <div
                key={i}
                className={
                  i === 0 ? "firstbar" : i === 1 ? "secondbar" : "lastbar"
                }
              />
            ))}
          </div>
        </div>
      </nav> */}
      <ul className={`desktop-nav ${showMobileSidebar ? "" : "show"}`}>
        {navigationLinks.map((items, key) => {
          return (
            <li key={key} onClick={handleItemClick}>
              <Link to={items.Path}>{items.label}</Link>
            </li>
          );
          /* activeStyle={{ color: "blue", textDecoration: "underline" }} */
        })}
      </ul>
    </header>
  );
};

export default Header;
