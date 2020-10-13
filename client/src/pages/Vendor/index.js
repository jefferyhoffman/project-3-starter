import React, { Component } from "react";
import FOOTER from "../../components/Footer";
import LOGO from "../../components/LOGO";
import Navigation from '../../components/NAVBAR';
import "./style.css";

class Vendor extends Component {
  render (){
    return (
      <div className="Vendor">
        <LOGO></LOGO>
        <Navigation />
    <form className="text-center border border-light p-5" action="#!">
      <p className="h4 mb-4">Vendor Registration</p>

     
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

     
      <label>Subject</label>
      <select className="browser-default custom-select mb-4">
        <option value="" disabled>Choose option</option>
        <option value="1" selected>Market Offering</option>
        <option value="2">Feature Offering</option>
        <option value="3">Report a bug</option>
      </select>

      
      <div className="form-group">
        <label>What's in my Market'</label>
        <textarea
          className="form-control rounded-0"
          id="exampleFormControlTextarea2"
          rows="3"
          placeholder="My Market"
        ></textarea>
      </div>

      
      <div className="custom-control custom-checkbox mb-4">
        <input
          type="checkbox"
          className="custom-control-input"
          id="defaultContactFormCopy"
        />
        <label className="custom-control-label" for="defaultContactFormCopy"
          >Send me a copy of this message</label>
      </div>

      
      <button
        className="btn btn-info btn-block #6d4c41 brown darken-1"
        type="submit">
        Send
      </button>
    </form>
        <FOOTER />
      </div>
    )
  }
}
// function Vendor(){
  
//    return (
//     <main className="body animated slideInLeft">
//     <img
//       src="farmFreshMarketLogo2.png"
//       className="img-fluid"
//       alt="Farm Fresh Market Logo 2"
//       id="farmFreshMarketLogo2"
//     />

   
//     <nav className="navbar navbar-light #388e3c green darken-2 text-white">
      
//       <a className="navbar-brand text-white" href="#">Farm Fresh Market</a>

     
//       <button
//         className="navbar-toggler toggler-example #1b5e20 green darken-4 darken-3 text-white"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent41"
//         aria-controls="navbarSupportedContent41"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="white-text"><i className="fas fa-bars fa-1x"></i></span>
//       </button>

      
//       <div className="collapse navbar-collapse" id="navbarSupportedContent41">
        
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link text-white" href="#"
//               >Home <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-white" href="#">Map</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-white" href="#">Farmers</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-white" href="#">Requests</a>
//           </li>
//         </ul>
        
//       </div>
     
//     </nav>
    

    

//   </main>

// //     )
// // }
export default Vendor;