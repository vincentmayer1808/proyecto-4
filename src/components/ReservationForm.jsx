import React, { useState } from "react";

export const ReservationForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    phone: "",
    date: "",
  });

  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
    console.log(formState);
  };

  return (
    <div>
      <form action="submit">
        <label htmlFor="">Your Name</label>
        <input
          name="username"
          type="text"
          placeholder="Enter your name here"
          value={formState.username}
          onChange={onChangeForm}
        />
        <label htmlFor="email">Enter your email contact</label>
        <input
          name="email"
          type="email"
          value={formState.email}
          onChange={onChangeForm}
        />
        <label htmlFor="phone">Enter your phone number here</label>
        <input
          name="phone"
          type="number"
          value={formState.phone}
          onChange={onChangeForm}
        />
        <label htmlFor="date">
          Enter the date and time that you want to reserve
        </label>
        <input
          name="date"
          type="datetime-local"
          value={formState.date}
          onChange={onChangeForm}
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
