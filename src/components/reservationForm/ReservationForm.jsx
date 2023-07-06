import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import moment from "moment";
import { ResTable } from "../resTable/ResTable";

export const ReservationForm = ({ uid }) => {
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
      uid: uid,
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
      return window.alert("Input fields cannot be empty");
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
      setReservations(docs.filter((el) => el.uid === uid));
    });
  };

  const getReservationId = async (id) => {
    const doc = await db.collection("reservations").doc(id).get();
    setFormState({ ...doc.data() });
  };

  useEffect(() => {
    getReservations();
  }, []);

  useEffect(() => {
    if (currentId === "") {
      setFormState(initForm);
    } else {
      getReservationId(currentId);
    }
  }, [currentId]);

  return (
    <>
      <div className="container-fluid bg-dark px-5">
        <img
          src="assets/reserved.jpg"
          className="img-fluid mb-2"
          alt="reservationPic"
        />
        <div className="container-fluid bg-light text-dark rounded">
          <div className="text-center">
            <h2>Make your reservation</h2>
            <p>
              Please, give us your information so we can reserve the best place
              for you
            </p>
          </div>
          <div className="p-3">
            <form action="submit">
              <div className="form-group g-3 ">
                <label className="col-form-label mx-2" htmlFor="username">
                  Name
                </label>
                <input
                  className="form-control col-auto shadow"
                  name="username"
                  type="text"
                  placeholder="Enter your name here"
                  value={formState.username}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group g-3 ">
                <label className="col-form-label mx-2" htmlFor="email">
                  Email adress
                </label>
                <input
                  className="form-control shadow"
                  name="email"
                  placeholder="Enter your email adress here"
                  type="email"
                  value={formState.email}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group g-3 ">
                <label className="col-form-label mx-2" htmlFor="phone">
                  Phone number
                </label>
                <input
                  className="form-control shadow"
                  name="phone"
                  placeholder="Enter your phone number here"
                  type="number"
                  value={formState.phone}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group g-3">
                <label className="col-form-label mx-2" htmlFor="persons">
                  How much persons?
                </label>
                <input
                  className="form-control shadow"
                  name="persons"
                  placeholder="Enter the number of persons"
                  type="number"
                  value={formState.persons}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group g-3">
                <label className="col-form-label mx-2" htmlFor="date">
                  Date and Time
                </label>
                <input
                  className="form-control shadow"
                  name="date"
                  placeholder="select the date and time of your reservation"
                  type="datetime-local"
                  value={formState.date}
                  onChange={onChangeForm}
                  min={moment().add("15", "minutes").format("YYYY-MM-DD hh:mm")}
                  max={moment().add("1", "year").format("YYYY-MM-DD hh:mm")}
                />
              </div>
              <button
                className="btn btn-primary d-grid col-6 mx-auto mt-2 shadow"
                type="submit"
                id="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="container-fluid bg-dark p-5">
          {reservations == "" ? (
            <p className=" text-center text-light ">
              There is no reservations yet
            </p>
          ) : (
            <div className="container-fluid">
              <ResTable
                reservations={reservations}
                setCurrentId={setCurrentId}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
