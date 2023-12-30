import React from "react";
import Common from "./Components/Common";
import AboutImg from "./Images/about.jpg"

const About = () => {
  return (<>
    <Common
      imgscr={AboutImg}
      greetings="I'm a" 
      brand="Frontend Developer"
      content="Languages I speak: HTML, CSS, Javascript."
      contenta="Dev Tools: React, Bootstrap, Github."
      visit= "/contact"
      btname= "Contact Me"
    />
  </>);
}

export default About;