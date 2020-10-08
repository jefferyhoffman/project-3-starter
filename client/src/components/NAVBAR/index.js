import React from "react";
import "./style.css";
function NAVBAR(){
    return(
       <!--Navbar-->
    <nav class="navbar navbar-light #388e3c green darken-2 text-white animated slideInLeft">
    {/*<!-- Navbar brand -->*/}
    <a class="navbar-brand text-white" href="#">Farm Fresh Market</a>

    {/*<!-- Collapse button -->*/}
    <button
      class="navbar-toggler toggler-example #1b5e20 green darken-4 darken-3 text-white"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent41"
      aria-controls="navbarSupportedContent41"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="white-text"><i class="fas fa-bars fa-1x"></i></span>
    </button>

    {/*<!-- Collapsible content -->*/}
    <div class="collapse navbar-collapse" id="navbarSupportedContent41">
      {/*<!-- Links -->*/}
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link text-white" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Map</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Farmers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Requests</a>
        </li>
      </ul>
      {/*<!-- Links -->*/}
    </div>
    {/*<!-- Collapsible content -->*/}
  </nav>
    );
}
export default NAVBAR;