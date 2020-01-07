import React, { Component } from "react";

// import logo from "./logo.svg";
// import MainGrass from "../../images/MainGrass.jpg";
import overlayLogo from "../../images/BGM_LOGO_10.11.17_1038697311177295.png";




class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="parallax parallax-1">
          <div className="container">
            <div className="row">
              <div className="centeredContent">
                <img className="overlayImage" src={overlayLogo} />
                <p class="mission">
                  Our mission is to provide our clients with the highest level
                  of quality services at fair and competitive prices. We believe
                  that by providing our clients with exceptional workmanship,
                  extraordinary service and professional integrity, we’ll ensure
                  the longevity of our company through repeat and referral
                  business
                </p>
              </div>
              {/* <h1>This is the best feature ever!!!</h1> */}
            </div>
          </div>
        </div>

        
        <div className="parallax parallax-2">
        <div className="centeredContent">
                {/* <img className="overlayImage" src={} /> */}
                <p class="services">
                We are a full service commercial landscaping company that specializes in everything from general maintenance to large installs.
                </p>
                <button className="servicesbtn">SERVICES</button>
              </div>
          
        </div>

        <div className="container">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
        <div className="parallax parallax-3"></div>
      </div>
    );
  }
}

export default HomePage;
