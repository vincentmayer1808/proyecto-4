import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import moment from "moment";
import { ResTable } from "../resTable/ResTable";

export const ReservationForm = () => {
  const initForm = {
    username: "",
    email: "",
    phone: "",
    persons: "",
    date: "",
  };

  const [formState, setFormState] = useState(initForm);
  const [reservations, setReservations] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const { username, email, phone, persons, date } = formState;

  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      username == "" ||
      email == "" ||
      phone == "" ||
      persons == "" ||
      date == ""
    ) {
      return (
    window.alert("Input fields cannot be empty")
      );
    } else {
      handleAdd(formState);
      setFormState(initForm);
    }
  };

  const handleAdd = async (info) => {
    try {
      if (currentId === "") {
        await db.collection("reservations").add(info);
      } else {
        await db.collection("reservations").doc(currentId).update(info);
        setCurrentId("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getReservations = async () => {
    db.collection("reservations").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setReservations(docs);
    });
  };

  const getReservationId = async (id) => {
    const doc = await db.collection("reservations").doc(id).get();
    setFormState({ ...doc.data() });
  };

  useEffect(() => {
    getReservations();
    // console.log(reservations);
  }, []);

  useEffect(() => {
    if (currentId === "") {
      setFormState(initForm);
    } else {
      getReservationId(currentId);
    }
  }, [currentId]);

  return (
    <div>
      <form action="submit">
        <div>
          <label htmlFor="">Your Name</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your name here"
            value={formState.username}
            onChange={onChangeForm}
          />
        </div>
        <div>
          <label htmlFor="email">Enter your email contact</label>
          <input
            name="email"
            type="email"
            value={formState.email}
            onChange={onChangeForm}
          />
        </div>
        <div>
          <label htmlFor="phone">Enter your phone number here</label>
          <input
            name="phone"
            type="number"
            value={formState.phone}
            onChange={onChangeForm}
          />
        </div>
        <div>
          <label htmlFor="persons">How much persons</label>
          <input
            name="persons"
            type="number"
            value={formState.persons}
            onChange={onChangeForm}
          />
        </div>
        <div>
          <label htmlFor="date">
            Enter the date and time that you want to reserve
          </label>
          <input
            name="date"
            type="datetime-local"
            value={formState.date}
            onChange={onChangeForm}
            min={moment().add("15", "minutes").format("YYYY-MM-DD hh:mm")}
            max={moment().add("1", "year").format("YYYY-MM-DD hh:mm")}
          />
        </div>
        <button type="submit" id="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {reservations == "" ? (
        <p>There is no reservations yet</p>
      ) : (
        <div>
          <ResTable reservations={reservations} setCurrentId={setCurrentId} />
        </div>
      )}
    </div>
  );
};
