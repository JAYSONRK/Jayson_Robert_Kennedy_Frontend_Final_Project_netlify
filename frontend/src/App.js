import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./PAGES/Home";
import About from "./PAGES/About";
import Projects from "./PAGES/Projects";
import Contact from "./PAGES/Contact";
import Navbar from "./COMPONENTS/Navbar";
import Project1 from "./PROJECTS/Project1";
import Project2 from "./PROJECTS/Project2";
import Project3 from "./PROJECTS/Project3";

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
    <Route exact path='/contact' element={<Contact/>}/>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
  </>);
}

export default App;
