import React, { Component } from "react";
import Form from "../../components/Form";

import testJS from "../../lib/testJS";

class LandingPage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <h2>I am the Landing Page</h2>
            <Form />
            <button onClick={testJS.testFunc}>Create Spotify Playlist</button>
            <div id="playlist-results" />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
