import React from "react";

export const ReservationForm = () => {
  return (
    <div>
      <form action="submit">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter your name here" />
        <label htmlFor="email">Enter your email contact</label>
        <input type="email" />
        <label htmlFor="phone">Enter your phone number here</label>
        <input type="number" />
        <label htmlFor="date">
          Enter the date and time that you want to reserve
        </label>
        <input type="datetime-local" />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
