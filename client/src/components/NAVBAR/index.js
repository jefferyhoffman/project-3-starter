import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import AuthContext from "../../contexts/AuthContext";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";

class NAVBAR extends Component {
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
      <div className="Navigation">
        <nav className="navbar navbar-light bg-green text-black animated slideInLeft">
          {/*<!-- Navbar brand -->*/}
          <Link className="navbar-brand text-black" href="#">
            Farm Fresh Market
          </Link>

          {/*<!-- Collapse button -->*/}
          <button
            className={togglerClass}
            onClick={this.toggleCollapse}
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*<!-- Collapsible content -->*/}
          <div className={targetClass} id="navbarSupportedContent41">
            {/*<!-- Links -->*/}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link text-black" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-black" href="/Vendor">
                  Vendors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/Patron">
                  Patron
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/zip-code">
                  Market Search
                </a>
              </li>
            </ul>
            {/*<!-- Links -->*/}
          </div>
          {/*<!-- Collapsible content -->*/}
        </nav>
      </div>
    );
  }
}
export default NAVBAR;
