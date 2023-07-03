import { NavLink } from "react-router-dom";

export const NavBar = ({ user, onLogin, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
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

        {user ? (
          <div className="navbar-collapse d-flex justify-content-end ml-auto">
            <div className="navbar-nav ml-auto">
              <div className="d-flex align-items-center">
                <img
                  src={user.photo}
                  alt={user.name}
                  className="img-fluid rounded-circle w-25 "
                />
                <span className="nav-item nav-link text-info">{user.name}</span>
              </div>
              <button className="nav-item nav-link btn" onClick={onLogout}>
                Cerrar sesión
              </button>
            </div>
          </div>
        ) : (
          <div className="navbar-collapse ml-auto">
            <div className="navbar-nav ml-auto">
              <button
                className="nav-item nav-link btn btn-primary"
                onClick={onLogin}
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
