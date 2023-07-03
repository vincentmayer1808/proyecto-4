import React from 'react'
import { db } from '../../firebase/firebase';

export const ResTable = ({reservations, setCurrentId}) => {
   const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar esta reservation?")) {
      return;
    }
    await db.collection("reservations").doc(id).delete();
  };
 
  return (

    <div>
           <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Persons</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((el) => (
              <tr key={el.id}>
                <td>{el.username}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{el.persons}</td>
                <td>{el.date}</td>
                <td>
                  <button onClick={() => setCurrentId(el.id)}>editar</button>
                  <button onClick={() => handleDelete(el.id)}>eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
