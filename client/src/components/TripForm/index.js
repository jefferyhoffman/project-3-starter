import React, { Component } from "react";
import DestinationForm from "../../components/DestinationForm";
import SongGenres from "../../components/SongGenres";
import Button from "../../components/Button";

class TripForm extends Component {
  state = {
    startPoint: "Point A",
    endPoint: "Point B"
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <div className="row mx-auto bg-dark text-light p-5">
          <div className="col-lg-6 text-left my-auto">
            <DestinationForm />
          </div>
          <div className="col-lg-6 text-left">
            <SongGenres />
          </div>
          <Button value="Generate Playlist" />
        </div>
      </form>
    );
  }
}

export default TripForm;
