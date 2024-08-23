import React from "react";
import Common from "../COMPONENTS/Common";
import HomeImg from "../IMAGES/home.jpg";

const Home = () => {
  return (<>
    <Common
      imgscr={HomeImg}
      greetings="Hi, I'm" 
      brand="Jayson"
      content="I thrive on coding from scratch, bringing innovative ideas to life across browsers and mobile devices."
      visit= "/projects"
      btname= "Get Started"
    />
  </>);
}

export default Home;