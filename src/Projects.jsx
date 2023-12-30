import React from "react";
import { NavLink } from "react-router-dom";


const Projects = () => {
  return (<>
    <div id="project">
      <h1 className="text-center">Projects</h1>
    </div>
    <div className="container project-div">
      <div className="row">
        <div className="col-12 mx-auto">
          <div className="projects row text-center mt-4">
            <div className="work html-css-div col-10 col-md-5 col-lg-2 mx-auto my-4 py-4">
              <i className="html-css fa-solid fa-laptop fa-4x py-3 "></i>
              <h5 className="my-2 py-2">HTML, CSS & JS</h5>
              <NavLink to='/projects/1' className="btn-project1 my-3">Go</NavLink>
            </div>
            <div className="work react-div col-10 col-md-5 col-lg-2 mx-auto my-4 py-4">
              <i className="react fa-brands fa-react fa-4x py-3"></i>
              <h4 className="my-2 py-2">React</h4>
              <NavLink to='/projects/2' className="btn-project2 my-3">Go</NavLink>
            </div>
            <div className="work bootstrap-div col-10 col-md-5 col-lg-2 mx-auto my-4 py-4">
              <i className="bootstrap fa-brands fa-bootstrap fa-4x py-3"></i>
              <h4 className="my-2 py-2">Bootstrap</h4>
              <NavLink to='/projects/3' className="btn-project3 my-3">Go</NavLink>
            </div>
            <div className="work apps-api-div col-10 col-md-5 col-lg-2 mx-auto my-4 py-4">
              <i className="apps-api fa-regular fa-credit-card fa-4x py-3"></i>
              <h5 className="my-2 py-2">Apps & API</h5>
              <NavLink to='/projects/4' className="btn-project4 my-3">Go</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default Projects;