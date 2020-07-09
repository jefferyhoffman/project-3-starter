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
  };

  return (
    <nav
      className="navbar is-fixed-top color"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand" to="#">
        <div className="navbar-item">
          <Link to="/">
            <img src="./assets/images/lgLogo.png " className="logo" />
          </Link>
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
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          {!user?
          <Link
            to="/"
            className="navbar-item"
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <strong>Home</strong>
          </Link>:
          <Link
          className="navbar-item"
          to="/menu"
          onClick={() => {
            setisActive(!isActive);
          }}
        >
          <strong>Menu</strong>
        </Link>}
          <Link
            className="navbar-item"
            to="/leaderboard"
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <strong>Leaderboard 🔥</strong>
          </Link>   

        <Link
          className="navbar-item"
          to="/characters"
          onClick={() => {
            setisActive(!isActive);
          }}
        >
        <strong>Characters</strong>
        </Link>
        
        <Link
          className="navbar-item"
          to="/game"
          onClick={()=>{
            setisActive(!isActive)
          }}  
        >
        <strong>Practice Game</strong>
        </Link>
        </div>

        <div className="navbar-end">
          <div className="buttons">
            {user ? (
              <AuthDropdown onClick={toggleCollapse} />
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
