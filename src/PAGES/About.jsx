import React from "react";
import Common from "../COMPONENTS/Common";
import AboutImg from "../IMAGES/about.jpg"

const About = () => {
  return (<>
    <Common
      imgscr={AboutImg}
      greetings="I'm a" 
      brand="Fullstack Developer"
      headera="Languages & Frameworks:"
      contenta="Proficient in HTML, CSS, JavaScript & Bootstrap with a strong foundation in React.js for web applications and React Native for mobile app development."
      headerb="Backend Technologies:"
      contentb="Experienced in using Node.js and Express.js to build robust backends, specialized in creating efficient RESTful APIs. Skilled in managing data with MongoDB and MySQL databases."
      headerc="Development Tools:"
      contentc="Leveraging GitHub, Docker, and Android Studio to streamline the development process and ensure high-quality, maintainable code."
      headerd="Security:"
      contentd="Committed to security utilizing AWS and Cloudflare to safeguard applications."
      visit= "/contact"
      btname= "Contact Me"
    />
  </>);
}

export default About;