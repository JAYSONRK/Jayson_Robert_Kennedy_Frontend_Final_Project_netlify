import React from "react";
import Phone from "../IMAGES/phone-volume-solid.svg";
import LinkedIn from "../IMAGES/linkedin.svg";
import Email from "../IMAGES/envelope-regular.svg";
import Github from "../IMAGES/github.svg";
const Contact = () => {
  return (<>
  <div id="contact">
    <h1 className="text-center">Contact</h1>
  </div>
  <div className="container contact-div">
    <div className="row">
      <div className="col-12 mx-auto">
        <div className="contacts row text-center">
          <div className="ping col-10 col-md-5 col-lg-3 mx-auto my-auto">
            <img src={Phone} alt="phone"/>
            <h4 className="my-2">Phone</h4>
            <p>8861996992</p>
          </div>
          <div className="ping col-10 col-md-5 col-lg-3 mx-auto my-auto">
              <a href="https://www.linkedin.com/in/jayson-robert-kennedy/">
              <img src={LinkedIn} alt="linkedin"/>
              <h4 className="my-2">LinkedIn</h4>
              <p>https://www.linkedin.com/in/jayson-robert-kennedy/</p>
            </a>
          </div>
          <div className="ping col-10 col-md-5 col-lg-3 mx-auto my-auto">
            <a href="mailto:jaysonrobert1@gmail.com">
              <img src={Email} alt="email"/>
              <h4 className="my-2">Email</h4>
              <p>jaysonrobert1@gmail.com</p>
            </a>
          </div>
          <div className="ping col-10 col-md-5 col-lg-3 mx-auto my-auto">
          <a href="https://github.com/JAYSONRK">
            <img src={Github} alt="github"/>
            <h4 className="my-2">Github</h4>
            <p>https://github.com/JAYSONRK</p>
          </a>  
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default Contact;