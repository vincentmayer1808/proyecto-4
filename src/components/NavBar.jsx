import { NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Home
          </NavLink>
        </div>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/MenuPage">
            Menu
          </NavLink>
        </div>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/ReservationPage">
            Reservation
          </NavLink>
        </div>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/SignInPage">
            Sign in
          </NavLink>
        </div>
      </div>
    </nav>
  )
}