import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";
import "./navbar.css";

class Navibar extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: false
  };

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    return (
      <div className={collapsed ? "inactive" : "active"} id="sidenav">
        <div
          className={collapsed ? "inactive" : "active"}
          id="greyout"
          onClick={this.toggleCollapse}
        />
        <nav id="navbar" className={collapsed ? "inactive" : "active"}>
          <Link className="navbar-header" to="/" onClick={this.toggleCollapse}>
            <h3 id="logo">Travel'd</h3>
            <hr />
          </Link>
          <ul className="navbar-nav">
            {user ? (
              <AuthDropdown onClick={this.toggleCollapse} />
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={this.toggleCollapse}
                    id="navitems"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/register"
                    onClick={this.toggleCollapse}
                    id="navitems"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav">
          {user && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/mytrips"
                  onClick={this.toggleCollapse}
                  id="navitems"
                >
                  My Trips
                </Link>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/add"
                  onClick={this.toggleCollapse}
                  id="navitems"
                >
                  Add New Trip
                </Link>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/myaccount"
                  onClick={this.toggleCollapse}
                  id="navitems"
                >
                  Browse Trips
                </Link>
              </li>
            )}

            {/* <li className="nav-item">
              <Link
                className="nav-link"
                to="/browse"
                onClick={this.toggleCollapse}
                id="navitems"
              >
                Browse
              </Link>
            </li> */}
          </ul>
        </nav>
        <div id="content" className={collapsed ? "inactive" : "active"}>
          <button
            type="button"
            id="sidebarCollapse"
            onClick={this.toggleCollapse}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    );
  }
}

export default Navibar;
