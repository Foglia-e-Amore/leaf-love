import React from "react";
import "./Aboutus.css"
 
function contactUs() {
    return (
       <div 
        className="contactDesc">
       <h1>Contact Us</h1>
       <h2>Your Email</h2>
       <form>
        <input type="text" placeholder="Enter your email" />
       </form>
       <h2>Your name (first and last) </h2>
       <form>
        <input type="text" placeholder="Enter your name- first and last" />
       </form>
       <h2> Reason for Contacting Us </h2>
       <select>
        <option value="1"> Questions about the food/Nutrition </option>
        <option value="2"> Locations </option>
        <option value="3"> Feedback </option>
        <option value="4"> Compliments </option>
       </select>  
       <h2> We'd Love to hear from you! </h2>
       <textarea rows="8" cols="30"> Enter Text </textarea>
       </div>
    )
}

export default contactUs;