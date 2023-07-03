import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import { ReservationPage } from "../pages/ReservationPage";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const MainRouter = ({ user }) => {
  const [isAllowed, setIsAllowed]=useState(false)
  useEffect(()=>{
    if(user?.role === 'ADMIN_ROLE'){
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
  })
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/ReservationPage" element={<ReservationPage />} />


        {/* <Route
          element={<ProtectedRoutes isAllowed={isAllowed} />}
        >
          <Route path="/ReservationPage" element={<ReservationPage />} />
        </Route> */}
      </Routes>
    </div>
  );
};
