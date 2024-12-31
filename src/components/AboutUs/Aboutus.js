import React from "react";
import { Link } from 'react-router-dom';
import vegrest from "../../images/vegrest.png";
import "./Aboutus.css"


function Aboutus() {
  return (
    <div className="AboutDesc">
      <div className="button-container">
        <FAQButton />
        <CharityButton />
        <FarmtoTableButton />
        <ContactButton />
        <TaRButton />
        <BaCButton />
      </div>

          <h2 className="imgtextx" style={{ fontSize: '15px' }}>
            Ever since Foglia-i-Amore opened in 2009, in some small, run down, restaurants, 
            we have been serving the community with Vegetarian food that have left them craving for more!
            No matter the location, we have always strived to not only represent local vegetarian cuisine, 
            but vegetarian cuisine from around the world so we and our customers can celebrate the Leaf, 
            the Land, and the Love all together. We also support and Empower the Local community with our
            Philosophy of Farm-to-Cook system, where we have local farmers deliver their produce!
            We also establish healthy diets into our food, and we believe that is what makes us 
            different from our competitors. For more information about any of our services, 
            the answers are all on this website. See for yourself, if green on the plate, 
            can bring green to the tummy</h2>

        </div>
    
    )
}

function FAQButton() {
    return (
      <Link to="/faq">
        <button className="aboutus-button">
          FAQ's
        </button>
      </Link>
    );
  }
  function CharityButton() {
    return (
      <Link to="/Charity">
        <button className="aboutus-button">
          Our Charities
        </button>
      </Link>
    );
  }

  function FarmtoTableButton() {
    return (
      <Link to="/Farm-to-table">
        <button className="aboutus-button">
          Farm to Table
        </button>
      </Link>
    );
  }

  function ContactButton() {
    return (
      <Link to="/Contact">
        <button className="aboutus-button">
          Contact Us
        </button>
      </Link>
    );
  }

  function TaRButton() {
    return (
      <Link to="/testreview">
        <button className="aboutus-button">
          Testimonials and Reviews
        </button>
      </Link>
    );
  }

  function BaCButton() {
    return (
      <Link to="/BaC">
        <button className="aboutus-button">
          Business and Colloboration
        </button>
      </Link>
    );
  }



const aboutLink = document.createElement("AboutPage")
    aboutLink.href = 'menu';
    aboutLink.style.color = 'blue';

 
export default Aboutus;
