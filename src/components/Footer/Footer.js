import React from "react";
import "./Footer.css"

function Footer() {
    return (
<footer>
    <div class="footer-container">
      <div class="logo-section">
        <h1>Foglia e Amore</h1>
        <p>Wholesome vegan and vegetarian cuisine crafted with love.</p>
      </div>
      <div class="social-section">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
      <div class="contact-section">
        <h3>Contact Us</h3>
        <p>Email: fogliaeamore@gmail.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Foglia e Amore. All rights reserved.</p>
    </div>
  </footer>
    )
}

export default Footer;