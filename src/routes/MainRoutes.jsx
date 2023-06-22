import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { MenuPage } from '../pages/MenuPage'
import { SignInPage } from '../pages/SignInPage'
import { ReservationPage } from '../pages/ReservationPage'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='MenuPage' element={<MenuPage/>}/>
            <Route path='ReservationPage' element={<ReservationPage/>}/>
            <Route path='SignInPage' element={<SignInPage/>}/>
        </Routes>
    </div>
  )
}
