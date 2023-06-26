import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import { ReservationPage } from "../pages/ReservationPage";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const MainRouter = ({ user }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route
          element={<ProtectedRoutes isAllowed={user?.role === "ADMIN_ROLE"} />}
        >
          <Route path="/ReservationPage" element={<ReservationPage />} />
        </Route>
      </Routes>
    </div>
  );
};
