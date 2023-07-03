import React from "react";
import "./contact.css"

export const Contact = () => {
  return (
    <div className=" d-flex vw-100">
      <div>
        <img src="/assets/contactpic.jpg" alt="brindis" className="img-fluid "/>
      </div>
      <div className="bg-dark text-light text-center p-3 container-fluid">
        <h2>Contact us</h2>
        <p>
          Our Direction : <span>123, 1st street, Reactcity</span>
        </p>
        <p>
          Our Phone : <span>123-456-7890</span>
        </p>
        <p>
          Our Email : <span>restaurantreactxpress@gmail.com</span>
        </p>
        <div className="icon">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i src=".../public/facebook.svg"></i>
        </div>
      </div>
    </div>
  );
};
