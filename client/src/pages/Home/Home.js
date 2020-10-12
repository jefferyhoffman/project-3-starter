import React, { Component } from "react";
import FOOTER from "../../components/FOOTER";
import LOGO from "../../components/LOGO";
// import "../../components/App/utils/button"
class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <LOGO />
        <div className="row">
          <div className="col">
            <div class="treat-wrapper">
              <button class="treat-button">Produce!</button>
            </div>
          </div>
        </div>
        <FOOTER />
      </div>
    );
  }
}

export default HomePage;
