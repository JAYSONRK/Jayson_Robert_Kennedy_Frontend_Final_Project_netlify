import React from "react";
import { NavLink } from "react-router-dom";


const Common = (prop) => {
  return (<>
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-lg-6 col-md-12 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{prop.greetings} <strong className="brand-name">{prop.brand}</strong></h1>
                <h2 className="my-3">
                  {prop.content}<br/>{prop.contenta}
                </h2>
                <div className="mt-3">
                  <NavLink to={prop.visit} className="btn-get-started">{prop.btname}</NavLink>
                </div>
              </div>
              <div className="image-place col-lg-6 col-md-12 order-1 order-lg-2 header-img">
                <img src={prop.imgscr} className="img-fluid animated" alt="Common-img"/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>);
}

export default Common;
