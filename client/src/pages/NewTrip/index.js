import React, { Component } from "react";
import TripForm from "../../components/TripForm";
import TripGenres from "../../components/TripGenres";
import Button from "../../components/Button";

class NewTripPage extends Component {
  render() {
    return (
      <div className="Home container">
        <div className="row my-5">
          <div className="col-12 my-5">
            <TripForm />
            {/* <div className="col-lg-6 text-center my-auto">
                  <h3>New Trip Form</h3>
                  <TripForm />
                </div> */}
            {/* <div className="col-lg-6 text-center">
                  <h3>Genres</h3>
                  <TripGenres />
                </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default NewTripPage;
