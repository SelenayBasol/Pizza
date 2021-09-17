import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        <h3>Since 2014</h3>The Silly's Pizzeria is focused on fresh, seasonal produce sourced responsibly and locally where possible. All our dough, sauces and oils are made in-house and paired with high quality seasonal ingredients. The same ethos extends to our drinks, which we guarantee are the best we can serve for the price we charge. Click through to find out more about our produce and suppliers. 
        </p>
      </div>
    </div>
  );
}

export default About;