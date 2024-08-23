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
            <div className="work react-div col-10 col-md-5 col-lg-2 mx-auto my-4 py-4">
              <i className="react fa-brands fa-react fa-4x py-3"></i>
              <h5 className="my-2 py-2">Static Websites <br/> (Basic)</h5>
              <NavLink to='/projects/1' className="btn-project2 my-3">Go</NavLink>
            </div>
            <div className="work bootstrap-div col-10 col-md-5 col-lg-2 mx-auto my-4 py-4">
              <i className="fa-solid fa-globe fa-4x py-3" style={{color: '#5b2c6f'}}></i>
              <h5 className="my-2 py-2">Full Fledged Websites <br/> (SME)</h5>
              <NavLink to='/projects/2' className="btn-project3 my-3">Go</NavLink>
            </div>
            <div className="work apps-api-div col-10 col-md-5 col-lg-2 mx-auto my-4 py-4">
              <i className="apps-api fa-regular fa-credit-card fa-4x py-3"></i>
              <h5 className="my-2 py-2">Mobile Apps <br/> (SME)</h5>
              <NavLink to='/projects/3' className="btn-project4 my-3">Go</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default Projects;