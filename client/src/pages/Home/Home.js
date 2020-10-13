import React, { Component } from "react";
import FOOTER from "../../components/Footer";
import LOGO from "../../components/LOGO";
import PATRONCARD from "../../components/PATRONCARD";
import VENDORCARD from "../../components/VENDORCARD";
import MARKETCARD from "../../components/MARKETCARD";
import Navigation from '../../components/NAVBAR';

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <LOGO></LOGO>
        <Navigation />
        <div className="row">
          <div className="col-sm">
            <PATRONCARD />
          </div>
          <div className="col-sm">
            <VENDORCARD />
          </div>
          <div className="col-sm">
            <MARKETCARD />
          </div>
        </div>
        <FOOTER />
      </div>
    );
  }
}

export default HomePage;
