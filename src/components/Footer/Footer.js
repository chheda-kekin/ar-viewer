import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="contact" id="contact">
      <div className="main-content">
        <div class="contact-content">
          <Link to="/arviewer"> Home </Link>
          <Link to="/arviewer/about"> About </Link>
        </div>

        <div className="contact-content">
          <Link to="/arviewer/feedback"> Feedback </Link>
        </div>
      </div>
      <div className="last">
        <p>&#169; {currentYear} AR-Website | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
