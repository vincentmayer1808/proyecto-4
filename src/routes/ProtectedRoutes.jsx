import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ children, isAllowed }) => {
  if (!isAllowed) {
    window.alert("Please, sign In first to get your reservation");
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
};
