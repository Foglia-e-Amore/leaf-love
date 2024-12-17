import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <div className="Footer">
            <footer class="footer-container">
                <div class="footer-left">
                    <h3 class="footer-heading">Foglia e Amore</h3>
                    <p class="footer-description">Delicious, sustainable, and plant-based meals for every taste!</p>
                </div>
                <div class="footer-right">
                    <ul class="footer-links">
                        <li class="footer-link-item"><a href="#about" class="footer-link">Our Story</a></li>
                        <li class="footer-link-item"><a href="#menu" class="footer-link">Explore Menu</a></li>
                        <li class="footer-link-item"><a href="#contact" class="footer-link">Get in Touch</a></li>
                        <li class="footer-link-item"><a href="#privacy" class="footer-link">Terms & Privacy</a></li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <p class="footer-copyright">&copy; 2024 Foglia e Amore. All rights reserved. Made with love.</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer;