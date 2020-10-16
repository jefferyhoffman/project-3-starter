import React, { Component } from "react";
import FOOTER from "../../components/Footer";
import LOGO from "../../components/LOGO";
import PATRONCARD from "../../components/PATRONCARD";
import VENDORCARD from "../../components/VENDORCARD";
import MARKETCARD from "../../components/MARKETCARD";
// import "../../components/App/utils/button"
class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <LOGO></LOGO>
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
