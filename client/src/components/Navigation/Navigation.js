import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import AuthContext from "../../contexts/AuthContext";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  const [isActive, setisActive] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(value => !value);
  }

  return (
    <nav
      className="navbar is-fixed-top color"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand" to="#">
        <a className="navbar-item" href="#">
          <img src="./assets/images/theLumberJack.png " className='image is-rounded'/>
        </a>
      </div>
      <label
        onClick={() => {
          setisActive(!isActive);
        }}
        role="button"
        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </label>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            <strong>Home</strong>
          </Link>

          <Link className="navbar-item" to="/leaderboard">
            <strong>Leaderboard 🔥</strong>
          </Link>

          {/*Only render if the user is logged in */}
          {user && (
            <Link className="navbar-item" to="/menu">
              <strong>Menu</strong>
            </Link>
          )}
        </div>

        <div className="navbar-end">
          <div className="buttons">
            {user ? (
              <AuthDropdown onClick={toggleCollapse}/>
            ) : (
              <>
                <Link className="button login" to="/login">
                  Login
                </Link>
                <Link className="button signUp" to="/register">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
