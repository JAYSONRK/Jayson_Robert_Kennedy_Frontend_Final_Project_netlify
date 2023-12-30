import React from "react";
import Phone from "./Images/phone-volume-solid.svg";
import Whatsapp from "./Images/whatsapp.svg";
import Email from "./Images/envelope-regular.svg";
import Github from "./Images/github.svg";
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
            <img src={Whatsapp} alt="whatsapp"/>
            <h4 className="my-2">Whatsapp</h4>
            <p>8095446720</p>
          </div>
          <div className="ping col-10 col-md-5 col-lg-3 mx-auto my-auto">
            <img src={Email} alt="email"/>
            <h4 className="my-2">Email</h4>
            <p><a href="mailto:someone@yoursite.com">jaysonrobert1@gmail.com</a></p>
          </div>
          <div className="ping col-10 col-md-5 col-lg-3 mx-auto my-auto">
            <img src={Github} alt="github"/>
            <h4 className="my-2">Github</h4>
            <p><a href="https://github.com/JAYSONRK">https://github.com/JAYSONRK</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default Contact;