import React, { Component } from "react";
import TripForm from "../../components/TripForm";

import testJS from "../../lib/testJS";

class TestPage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <h2>I am the Test Page</h2>
            <TripForm />
            <button onClick={testJS.testFunc}>Create Spotify Playlist</button>
            <div id="playlist-results" />
          </div>
        </div>
      </div>
    );
  }
}

export default TestPage;
