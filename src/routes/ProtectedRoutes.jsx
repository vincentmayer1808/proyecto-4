import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({children, isAllowed}) => {
  
  if(!isAllowed) {
     window.alert("Sign In first to get your reservation");
    return <Navigate to="/" />
   
     
  }

  return children ? children : <Outlet />
}
