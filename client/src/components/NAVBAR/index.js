import React from "react";
import "./style.css";
function NAVBAR(){
    return(
       
    <nav className="navbar navbar-light #388e3c green darken-2 text-white animated slideInLeft">
    {/*<!-- Navbar brand -->*/}
    <a className="navbar-brand text-white" href="#">Farm Fresh Market</a>

    {/*<!-- Collapse button -->*/}
    <button
      className="navbar-toggler toggler-example #1b5e20 green darken-4 darken-3 text-white"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent41"
      aria-controls="navbarSupportedContent41"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="white-text"><i class="fas fa-bars fa-1x"></i></span>
    </button>

    {/*<!-- Collapsible content -->*/}
    <div className="collapse navbar-collapse" id="navbarSupportedContent41">
      {/*<!-- Links -->*/}
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link text-white" href="#"
            >Home <span className="sr-only">(current)</span></a
          >
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Map</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Farmers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Requests</a>
        </li>
      </ul>
      {/*<!-- Links -->*/}
    </div>
    {/*<!-- Collapsible content -->*/}
  </nav>
    );
}
export default NAVBAR;