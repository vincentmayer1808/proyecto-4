import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import { ReservationPage } from "../pages/ReservationPage";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const MainRouter = ({ user }) => {
  const [isAllowed, setIsAllowed] = useState(false);
  const [uid, setUid] = useState("");
  useEffect(() => {
    if (user?.role === "ADMIN_ROLE") {
      setIsAllowed(true);
      setUid(user.id);
    } else {
      setIsAllowed(false);
    }
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MenuPage" element={<MenuPage />} />

        <Route element={<ProtectedRoutes isAllowed={isAllowed} />}>
          <Route
            path="/ReservationPage"
            element={<ReservationPage uid={uid} />}
          />
        </Route>
      </Routes>
    </>
  );
};
