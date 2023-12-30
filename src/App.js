import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import Project1 from "./Project1.jsx";
import Project2 from "./Project2.jsx";
import Project3 from "./Project3.jsx";
import Project4 from "./Project4.jsx";

const App = () => {
  return (<>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/projects' element={<Projects/>}/>
      <Route exact path='/projects/1' element={<Project1/>}/>
      <Route exact path='/projects/2' element={<Project2/>}/>
      <Route exact path='/projects/3' element={<Project3/>}/>
      <Route exact path='/projects/4' element={<Project4/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
  </>);
}

export default App;
