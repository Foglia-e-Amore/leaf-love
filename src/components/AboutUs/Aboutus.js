import React from "react";
import { Link } from 'react-router-dom';
import "./Aboutus.css"

function Aboutus() {
        return(
        <div 
         className="AboutDesc">
        <h1>Celebrating the land, the leaf, and the love since 2009!</h1>
        <h2 style={{ fontSize: '20px' }}> Could green on the plate, bring green to the tummy? That was the question 5 young men asked 
            when they left a restaurants after some half cooked broccoli. 
            The Short Answer? Foglia-i-amore! The long answer? You! 
            Thank’s to all of you who have ate here, or are considering eating here,
            know that you are helping make and transform vegetarian cuisine into something never before.
            Ever since Foglia-i-Amore opened in 2009, in some small, run down, restaurants, 
            we have been serving the community with Vegetarian food that have left them craving for more!
            No matter the location, we have always strived to not only represent local vegetarian cuisine, 
            but vegetarian cuisine from around the world so we and our customers can celebrate the Leaf, 
            the Land, and the Love all together. We also support and Empower he Local community with our
            Philosophy of Farm-to-Cook system, where we have local farmers deliver their produce!
            We also establish healthy diets into our food, and we believe that is what makes us 
            different from our competitors. For more information about any of our services, 
            the answers are all on this website. See for yourself, if green on the plate, 
            can bring green to the tummy</h2>
            <FAQButton  />
            <CharityButton />
            <FarmtoTableButton />
            <ContactButton />
            <TaRButton />
            <BaCButton />

        </div>
    )
}

function FAQButton() {
    return (
      <Link to="/faq">
        <button >
          FAQ's
        </button>
      </Link>
    );
  }
  function CharityButton() {
    return (
      <Link to="/Charity">
        <button >
          Our Charities
        </button>
      </Link>
    );
  }

  function FarmtoTableButton() {
    return (
      <Link to="/F2Table">
        <button>
          Farm to Table
        </button>
      </Link>
    );
  }

  function ContactButton() {
    return (
      <Link to="/Contact">
        <button>
          Contact Us
        </button>
      </Link>
    );
  }

  function TaRButton() {
    return (
      <Link to="/TaR">
        <button >
          Testimonials and Reviews
        </button>
      </Link>
    );
  }

  function BaCButton() {
    return (
      <Link to="/BaC">
        <button>
          Business and Colloboration
        </button>
      </Link>
    );
  }



const aboutLink = document.createElement("AboutPage")
    aboutLink.href = 'menu';
    aboutLink.style.color = 'blue';

 
export default Aboutus;
