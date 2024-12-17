import React from "react";
import "./AboutUs.css";
import Aboutus from "./Aboutus";

function AboutUsPage() {
    return (
        <div className="about-us">
            <header className="about-header">
                <h1>About Us</h1>
            </header>
            <main className="main">
                <section className="intro">
                    <h2>Who We Are</h2>
                    <p>
                        Welcome to our website! We are dedicated to providing exceptional service and
                        ensuring our customers have the best experience possible. We are celebrating the Leaf,
                        the land, and the Love!
                    </p>
                </section>
            </main>
        </div>
    );
}

export default AboutUsPage;

const aboutLink = document.createElement("About Us")
menuLink.href = 'About Us';

