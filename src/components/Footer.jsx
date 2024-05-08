import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";

const Footer = () => {
  return (

    <footer id="footer">
      <div id="footer_logo">
        {/* <!--  <img src="logo 1.jpg"> --> */}
      </div>
      <div id="footer_top_details_container">

        <div id="footer_top_details">
          <div id="footer_top_details_heading">
            Features
          </div>
          <p>Web Storage</p>
          <p>Security</p>
          <p>Quick Compression</p>
          <p>Good Quality</p>
        </div>
        <div id="footer_top_details">
          <div id="footer_top_details_heading">
            Cantact with Us
          </div>
          <p>Google</p>
          <p>Email</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

        <div id="footer_top_details">
          <div id="footer_top_details_heading">
            Pages
          </div>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/feedback">
            <p>Feedback</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>

      </div>
      <div id="footer_bottom_details_container">
        <div id="footer_privacy">
          <a href="/₹+">Terms of Service</a>
          <a href="/₹2">Privacy Policy</a>
          <a href="/28!">Security Policy</a>
        </div>
        <p>&copy; 2024-25 all rights reserved.</p>
      </div>
    </footer>


  );
};

export default Footer;
