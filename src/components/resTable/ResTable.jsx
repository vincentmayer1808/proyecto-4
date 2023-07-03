import React from "react";
import { db } from "../../firebase/firebase";

export const ResTable = ({ reservations, setCurrentId }) => {
  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar esta reservation?")) {
      return;
    }
    await db.collection("reservations").doc(id).delete();
  };

  return (
    <div className="container-fluid pb-5">
      <table className="table-fluid table-dark table-striped mt-5 mx-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Persons</th>
            <th>Date and Time</th>
            <th>Configuration</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((el) => (
            <tr key={el.id}>
              <td>{el.username}</td>
              <td>{el.email}</td>
              <td>{el.phone}</td>
              <td>{el.persons}</td>
              <td>{el.date.split('T').join(' ')}</td>
              <td>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => setCurrentId(el.id)}
                >
                  editar
                </button>
                <button
                  className="btn btn-danger mt-1 mx-2"
                  onClick={() => handleDelete(el.id)}
                >
                  eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
