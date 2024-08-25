
import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Exclusive</h2>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">➔</button>
        </form>
      </div>

      <div className="footer-section">
        <h2>Support</h2>
        <address>
          111 Bijoy Sarani, Dhaka,
          <br />
          DH 1515, Bangladesh.
        </address>
        <p>Email: exclusive@gmail.com</p>
        <p>Phone: +88015-88888-9999</p>
      </div>

      <div className="footer-section">
        <h2>Account</h2>
        <ul>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Quick Link</h2>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Download App</h2>
        <p>Save $3 with App New User Only</p>
        <div className="app-links">
          <img
            src="google-play-badge.png"
            alt="Get it on Google Play"
            className="app-store-badge"
          />
          <img
            src="app-store-badge.png"
            alt="Download on the App Store"
            className="app-store-badge"
          />
        </div>
        <div className="social-links">
          <a href="#!">f</a>
          <a href="#!">t</a>
          <a href="#!">i</a>
          <a href="#!">in</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
