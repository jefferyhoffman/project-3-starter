import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";
import { TiLeaf } from "react-icons/ti";
import { MdLineWeight } from "react-icons/md";

import "./style.css";

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true,
  };

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && "show"}`;
    const togglerClass = `navbar-toggler ${collapsed && "collapsed"}`;

    return (
      <div className="Navigation nav_navbar_bglight nav_navbar_br">
        <nav className="navbar navbar-expand-md navbar-expand-lg navbar-light mb-3">
          <Link className="navbar-brand nav_heading_dark_bold " to="/">
          <TiLeaf/>Smaller Footprint
          </Link>
          <button
            className={togglerClass}
            onClick={this.toggleCollapse}
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MdLineWeight/>           
          </button>

          <div className={targetClass} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">            
              {user && (
                <li className="nav-item">
                  <Link
                    className="nav-link nav_heading_dark"
                    to="/userpage"
                    onClick={this.toggleCollapse}
                  >
                    User Page
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav">
              {user ? (
                <AuthDropdown onClick={this.toggleCollapse} />
              ) : (
                <li className="nav-item nav_heading_dark ">
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={this.toggleCollapse}
                  >
                    Log in or Register
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
