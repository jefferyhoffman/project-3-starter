// import React, { Component } from "react";
// import "./style.css";
// import { Link } from 'react-router-dom';

// class Form extends Component {
//   state = {
//     destination: "",
//     tripDays: "",
//     shortDescription: "",
//     tripImages: []
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.setState({
//       destination: "",
//       tripDays: "",
//       shortDescription: "",
//       tripImages: []
//     });
//     this.props.history.push("/add/additinerary");

//     localStorage.setItem("Destination", this.state.destination)
//     localStorage.setItem("tripDays", this.state.tripDays)
//     localStorage.setItem("shortDescription", this.state.shortDescription)
//     localStorage.setItem("tripImages", this.state.tripImages)
//   };


//   render() {
//     return (
//       <div className="formz">

//         <div className="container" style={{ boxShadow: "5px 5px 5px 5px #999" }}>
//           <div className="form-group">
//             <br />
//             <h4>Enter New Trip</h4>
//             <hr />
//             <form onSubmit={this.handleFormSubmit}>
//               <div className="row">
//                 <div className="col-md-7">
//                   <label>
//                     <h5>Destination:</h5>
//                   </label>
//                   <input
//                     className="destForm"
//                     value={this.state.destination}
//                     name="destination"
//                     onChange={this.handleInputChange}
//                     type="text"
//                     placeholder="Enter Destination"
//                   />
//                 </div>
//                 <div className="col-md-5">
//                   <label>
//                     <h5>Trip Days:</h5>
//                   </label>
//                   <input
//                     className="tripDays"
//                     value={this.state.tripDays}
//                     name="tripDays"
//                     onChange={this.handleInputChange}
//                     type="text"
//                     placeholder="Total Days of Trip"
//                   />
//                 </div>
//               </div>
//               <hr />
//               <div className="row">
//                 <div className="col-md-12">
//                   <label>
//                     <h5 className="short">Short Description:</h5>
//                   </label>
//                   <br />
//                   <textarea
//                     className="shortDescription"
//                     rows="5"
//                     value={this.state.shortDescription}
//                     name="shortDescription"
//                     onChange={this.handleInputChange}
//                     type="text"
//                     placeholder="Brief Description of your trip"
//                   />
//                 </div>
//               </div>
//               <hr />

//               <div className="row">
//                 <div className="col-lg-6">
//                   <label>
//                     <h4>Upload Images: </h4>
//                   </label>
//                   <input
//                     className="img-input"
//                     value={this.state.tripImages}
//                     name="tripImages"
//                     onChange={this.handleInputChange}
//                     type="file"
//                   />
//                 </div>

//               </div>
//               <hr />
//               <Link
//                 to="/add/additinerary"
//                 className={window.location.pathname === "/add/additinerary" ? "nav-link active" : "nav-link"}
//               >
//                 <button className="btn btn-primary  btn-lg" style={{ float: "right" }}>Next</button></Link>
//               <br />
//               <br />
//               <hr />
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Form;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import { Link } from "react-router-dom";
import ItinForm from "./itinForm";
import axios from "axios";


class Form extends Component {
  state = {
    user: localStorage.getItem('token'),
    destination: "",
    tripDays: "",
    shortDescription: "",
    itins: [],
    tripImages: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      destination: "",
      tripDays: "",
      shortDescription: "",
      tripImages: [],
      itins:[],
    });
    this.props.history.push("/mytrips");

    localStorage.setItem("Destination", this.state.destination)
    localStorage.setItem("tripDays", this.state.tripDays)
    localStorage.setItem("shortDescription", this.state.shortDescription)
    localStorage.setItem("tripImages", this.state.tripImages)


    axios({
      method: 'POST',
      url: '/api/trips',
      data: {
        user: localStorage.getItem('token'),
        location: this.state.destination,
        trip_length: this.state.tripDays,
        description: this.state.shortDescription,
        images: this.state.tripImages,
        itinerary: this.state.itins
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .then(() => {
        // this.setState({
        //   location: "",
        //   trip_length: "",
        //   itinerary: [],
        //   shortDescription: "",
        //   images: []
        // })
        localStorage.clear();
      })
      .catch(function (err) {
        console.log(err);
      })
  }


  addItin = itin => {
    this.setState({
      itins: [...this.state.itins, itin]
    });
    localStorage.setItem("Itinerary", JSON.stringify(this.state.itins))
  };
  
  render() {
    return (
      <div className="formz">
        <div className="container" style={{ boxShadow: "5px 5px 5px 5px #999" }}>
          <div className="form-group">
            <br />
            <h4>Enter New Trip</h4>
            <hr />
            <form onSubmit={this.handleFormSubmit}>
              <div className="row">
                <div className="col-md-7">
                  <label>
                    <h5>Destination:</h5>
                  </label>
                  <input
                    className="destForm"
                    value={this.state.destination}
                    name="destination"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Enter Destination"
                  />
                </div>
                <div className="col-md-5">
                  <label>
                    <h5>Trip Days:</h5>
                  </label>
                  <input
                    className="tripDays"
                    value={this.state.tripDays}
                    name="tripDays"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Total Days of Trip"
                  />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <label>
                    <h5 className="short">Short Description:</h5>
                  </label>
                  <br />
                  <textarea
                    className="shortDescription"
                    rows="5"
                    value={this.state.shortDescription}
                    name="shortDescription"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Brief Description of your trip"
                  />
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-lg-6">
                  <label>
                    <h4>Upload Images: </h4>
                  </label>
                  <input
                    className="img-input"
                    value={this.state.tripImages}
                    name="tripImages"
                    onChange={this.handleInputChange}
                    type="file"
                  />
                </div>

              </div>
              <hr />
              <br />
              <h4 className="addIT">Add Your Itinerary</h4>
              <hr />
              <ItinForm onSubmit={this.addItin} />
              {this.state.itins.map(itin => (
                <div
                  className="addB"
                  id={itin.id}
                  key={itin.id}
                > {itin.text}
                  <hr />
                </div>
              ))}
              <div className="sbmtBtn">
                <button type="submit" className="btn btn-primary" onClick={this.addItin}>Submit</button>
              </div>
              <hr />
            </form>
          </div>
        </div>
      </div>
      
    );
  }
}

  export default Form;