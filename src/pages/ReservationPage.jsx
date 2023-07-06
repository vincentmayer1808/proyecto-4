import React from 'react'
import { ReservationForm } from '../components/reservationForm/ReservationForm'


export const ReservationPage = ({uid}) => {

  return (
    <>
    <ReservationForm uid={uid}/>
    </>
  )
}
