import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactUs() {
  const formRef = useRef(); // Reference to the form 

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent form submission refresh

    emailjs
      .sendForm(
        "service_z2qy42j", // Service ID
        "template_qiiky96",
        formRef.current, // Pass the form reference
        "wDZ-m-sMIrzM5fenk" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you! Your message has been sent.");
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contactDesc">
      <h1>Contact Us</h1>
      <h2>Your Email</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" placeholder="Enter your email" name="email" />
        <h2>Your name (first and last)</h2>
        <input type="text" placeholder="Enter your name- first and last" name="name" />
        <h2>Reason for Contacting Us</h2>
        <select name="reason">
          <option value="Questions about the food/Nutrition">Questions about the food/Nutrition</option>
          <option value="Locations">Locations</option>
          <option value="Feedback">Feedback</option>
          <option value="Compliments">Compliments</option>
        </select>
        <h2>We'd Love to hear from you!</h2>
        <label>
          Service
          <textarea name="message" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactUs;
