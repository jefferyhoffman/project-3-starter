import React, { Component } from "react";
import DestinationForm from "../../components/DestinationForm";
import SongGenres from "../../components/SongGenres";
import Button from "../../components/Button";

function TripForm() {
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

export default TripForm;
