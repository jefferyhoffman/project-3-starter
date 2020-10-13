import React, { Component } from "react";
import FOOTER from "../../components/FOOTER";
import LOGO from "../../components/LOGO";
// import "../../components/App/utils/button"
class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <LOGO></LOGO>
        {/* add link for API market */}
        <FOOTER />
      </div>
    );
  }
}

export default HomePage;
