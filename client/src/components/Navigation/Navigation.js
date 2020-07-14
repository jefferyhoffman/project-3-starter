import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import AuthContext from "../../contexts/AuthContext";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";


const Navigation = () => {
  const { user } = useContext(AuthContext);
  const [isActive, setisActive] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(value => !value);
  };

  return (
    <nav
      className="navbar is-fixed-top color"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <NavLink to="/">
            <img src="./assets/images/lgLogo.png " className="logo" />
          </NavLink>
        </div>
      </div>
      <div
        onClick={() => {
          setisActive(!isActive);
        }}
        role="button"
        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" className="is-centered"></span>
        <span aria-hidden="true" className="is-centered"></span>
        <span aria-hidden="true" className="is-centered"></span>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`} id="navbarBasicExample">
        <div className="navbar-start">
          {!user?
          <NavLink 
            to="/"
            className="navbar-item"
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <strong id="nav-titles">Home</strong>
          </NavLink>:
          <NavLink
          className="navbar-item"
          to="/menu"
          onClick={() => {
            setisActive(!isActive);
          }}
        >
          <strong id="nav-titles">Menu</strong>
        </NavLink>}
          <NavLink
            className="navbar-item"
            to="/leaderboard"
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <strong id="nav-titles">Leaderboard 🔥</strong>
          </NavLink>   
        {user &&
        <NavLink
          className="navbar-item"
          to="/characters"
          onClick={() => {
            setisActive(!isActive);
          }}
        >
        <strong id="nav-titles">Characters</strong>
        </NavLink>
        }
        {/* {user &&
        <NavLink
          className="navbar-item"
          to="/game"
          onClick={()=>{
            setisActive(!isActive)
          }}  
        >
        <strong>Practice Game</strong>
        </NavLink>
        } */}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
          <div className="buttons">
            {user ? (
              <AuthDropdown onClick={toggleCollapse} />
            ) : (
              <>
                <NavLink className="button login" to="/login">
                  Login
                </NavLink>
                <NavLink className="button signUp" to="/register">
                  Signup
                </NavLink>
              </>
            )}
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
