import React from "react";

const Card = (prop) => {
  return (<>
        <div className="card-div col-10 col-md-4 col-lg-3">
          <div className="card">
            <img src={prop.imgscr} className="card-img-top" alt="project"/>
            <div className="card-body">
              <h5 className="card-title text-center">{prop.title}</h5>
              <ul className="lang d-flex justify-content-center align-items-center flex-wrap p-0 my-3">
                <li className="html">HTML</li>
                <li className="css">CSS</li>
                {prop.js && <li className="js">JS</li>}
                {prop.api && <li className="api">API</li>}
              </ul>
              <div className="button-div d-flex justify-content-between align-items-center">
                <a href={prop.github} className="btn-git">GitHub</a>
                <a href={prop.visit} className="btn-visit">Visit</a>
              </div>
            </div>
          </div>
        </div>
  </>);
}

export default Card;