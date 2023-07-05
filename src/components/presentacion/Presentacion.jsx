import React from 'react'
import "./homepage.css"

export const Presentacion = () => {
  return (
    <div className="homebreak d-flex ">
        <div className="container-fluid bg-dark text-light text-center p-3 ">
          <h1>React Xpress </h1>
          <p>
            React Xpress is the new restaurant in town to go and enjoy a good
            food with your friends and family. We'll make sure that you get well
            attended with the best express food around
          </p>
        </div>
        <div>
          <img
            src="/assets/restaurantpics.jpg"
            alt="mainpic"
            className="img-fluid"
          />
        </div>
      </div>
  )
}
