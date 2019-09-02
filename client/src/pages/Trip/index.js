import React, { Component } from "react";
import TripForm from "../../components/TripForm";

class TripPage extends Component {
  render() {
    return (
      <div className="Home container">
        <div className="row my-5">
          <div className="col-12 my-5">
            <TripForm />
          </div>
        </div>
      </div>
    );
  }
}

export default TripPage;
