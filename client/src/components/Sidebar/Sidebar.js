import React, { Component } from "react";
import "./sidebar.css";
// import {
//   Button,
//   Nav,
//   NavItem,
//   NavDropDown,
//   MenuItem,
//   Carousel,
//   Modal,
//   ButtonToolbar,
//   Form,
//   InputGroup,
//   FormControl
// } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";
import AuthContext from "../../contexts/AuthContext";




class Sidebar extends Component {
    static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    const routes = [
        {
          path: "/",
          exact: true,
          main: () => <h2>Home</h2>
        },
        {
          path: "/add",
        //   main: () => <h2>Add New Trip</h2>
        },
        {
          path: "/shoelaces",
          sidebar: () => <div>shoelaces!</div>,
          main: () => <h2>Shoelaces</h2>
        }
      ];

    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "100%",
              width: "12%",
              position: "fixed",
              zIndex: "-1",
              top: "0",
              left: "0",
              backgroundColor: "grey",
              overflowX: "hidden",
              paddingTop: "20px"
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                textAlign: "center"
              }}
            >
              <li className="namer">
                <AuthDropdown />
              </li>
              <br />
              <li className='nav-item'>
                <Link className='bar-item' to='/' onClick={this.toggleCollapse}>Home</Link>
              </li>
              <Link to="/add" className={window.location.pathname === "/add" ? "nav-link active" : "nav-link"}>
         Add New Trip
        </Link>
              <li>
                <Link to="/bubblegum" className="barItem">
                  My Trips
                </Link>
              </li>
              <li>
                <Link to="/shoelaces" className="barItem">
                  Browse Trips
                </Link>
              </li>
            </ul>

            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along

              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default Sidebar;
