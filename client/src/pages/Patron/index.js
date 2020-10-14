import React, { Component } from "react";
import FOOTER from "../../components/Footer";
import LOGO from "../../components/LOGO";
import Navigation from "../../components/NAVBAR";
import "./style.css";

class Patron extends Component {
  render() {
    return (
      <div className="Patron">
        <LOGO />
        <Navigation />
        <form className="text-center border border-light p-5" action="#!">
          <p className="h4 mb-4">Patron Posts</p>

          <input
            type="text"
            id="defaultContactFormName"
            className="form-control mb-4"
            placeholder="Name"
          />

          <input
            type="email"
            id="defaultContactFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />

          <label>Topic</label>
          <select className="browser-default custom-select mb-4">
            <option value="" disabled>
              Choose option
            </option>
            <option value="1" selected>
              What I'm looking for
            </option>
            <option value="2">Keep me posted about upcoming events</option>
            <option value="3">Comments, Concerns and Everything else</option>
          </select>

          <div className="form-group">
            <label>What are you hungry for?</label>
            <textarea
              className="form-control rounded-0"
              id="exampleFormControlTextarea2"
              rows="3"
              placeholder="Thoughts?"
            ></textarea>
          </div>

          <div className="custom-control custom-checkbox mb-4">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultContactFormCopy"
            />
            <label
              className="custom-control-label"
              for="defaultContactFormCopy"
            >
              Send me a copy of this message
            </label>
          </div>

          <button
            className="btn btn-info btn-block"
            type="submit"
          >
            Send
          </button>
        </form>
        <FOOTER />
      </div>
    );
  }
}
// function Patron() {

//   //  return (
//   //   <main className="body animated slideInLeft">
//   //   <img
//   //     src="farmFreshMarketLogo2.png"
//   //     className="img-fluid"
//   //     alt="Farm Fresh Market Logo 2"
//   //     id="farmFreshMarketLogo2"
//   //   />

//   //   <nav className="navbar navbar-light #388e3c green darken-2 text-white">

//   //     <a className="navbar-brand text-white" href="#">Farm Fresh Market</a>

//   //     <button
//   //       className="navbar-toggler toggler-example #1b5e20 green darken-4 darken-3 text-white"
//   //       type="button"
//   //       data-toggle="collapse"
//   //       data-target="#navbarSupportedContent41"
//   //       aria-controls="navbarSupportedContent41"
//   //       aria-expanded="false"
//   //       aria-label="Toggle navigation"
//   //     >
//   //       <span className="white-text"><i className="fas fa-bars fa-1x"></i></span>
//   //     </button>

//   //     <div className="collapse navbar-collapse" id="navbarSupportedContent41">

//   //       <ul className="navbar-nav mr-auto">
//   //         <li className="nav-item active">
//   //           <a className="nav-link text-white" href="#"
//   //             >Home <span className="sr-only">(current)</span></a>

//   //         </li>
//   //         <li className="nav-item">
//   //           <a className="nav-link text-white" href="#">Map</a>
//   //         </li>
//   //         <li className="nav-item">
//   //           <a className="nav-link text-white" href="#">Farmers</a>
//   //         </li>
//   //         <li className="nav-item">
//   //           <a className="nav-link text-white" href="#">Requests</a>
//   //         </li>
//   //       </ul>

//   //     </div>

//   //   </nav>

//   // <footer
//   //   className="page-footer font-small #388e3c green darken-2 animated slideInLeft"
//   // >

//   //   <div className="footer-copyright text-center py-4 font-weight-bold">
//   //     © 2020 Copyright:
//   //     <a href="https://github.com/ccollins1975/farm-fresh-market">
//   //       Farm Fresh Market</a>
//   //     and powered by Charlotte Agricultural Tracking Services (C.A.T.S.)
//   //   </div>

//   // </footer>

//   // <br />
//   // <br />

//   {/* <script
//       type="text/javascript"
//       src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
//     ></script>

//     <script
//       type="text/javascript"
//       src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"
//     ></script>
//     <!-- Bootstrap core JavaScript -->
//     <script
//       type="text/javascript"
//       src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.min.js"
//     ></script>
//     <!-- MDB core JavaScript -->
//     <script
//       type="text/javascript"
//       src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.16.0/js/mdb.min.js"
//     ></script> */}
//   // </main>

//     // )
// }
export default Patron;
