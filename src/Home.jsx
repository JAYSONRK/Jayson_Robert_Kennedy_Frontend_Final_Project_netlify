import React from "react";
import Common from "./Components/Common";
import HomeImg from "./Images/home.jpg";

const Home = () => {
  return (<>
    <Common
      imgscr={HomeImg}
      greetings="Hi, I'm" 
      brand="Jayson"
      content="I like to code things from scratch and enjoy bringing ideas to life in the browser."
      visit= "/projects"
      btname= "Get Started"
    />
  </>);
}

export default Home;