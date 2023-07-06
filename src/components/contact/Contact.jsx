import React from "react";
import "./contact.css";


export const Contact = () => {
  return (
    <>
      <div id="contact" className="container-fluid d-flex align-items-center bg-dark text-light text-center breakpoint">
        <div>
          <img
            src="/assets/contactpic.jpg"
            alt="brindis"
            className="img-fluid vw-100 "
          />
        </div>
        <div className="container-fluid">
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
          <div className="icon d-flex justify-content-evenly mb-3">
            <a href="https://facebook.com">
              <i className="bi bi-facebook" />
            </a>
            <a href="https://whatsapp.com">
              <i className="bi bi-whatsapp" />
            </a>
            <a href="https://instagram.com">
              <i className="bi bi-instagram" />
            </a>
            <a href="https://twitter.com">
              <i className="bi bi-twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light text-center fs-6">
        <p>® All Rights Reserved vincentmayer1808</p>
      </div>
    </>
  );
};
