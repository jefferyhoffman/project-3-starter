import React, { Component } from "react";

// import logo from "./logo.svg";
// import MainGrass from "../../images/MainGrass.jpg";
// import overlayImage1 from "../../images/rotatedTransparentSaw.png";
// import overlayImage1 from "../../images/WeedCutter.jpeg";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="parallax parallax-1">
          <div className="container">
            <div className="row">
              <div className="centeredContent">
                {/* <img className="overlayImage" src={overlayImage1} /> */}
                <h1 className="phrase">Your #1 Commercial Landscaping Company!</h1>
              </div>
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
        <div className="parallax parallax-3">
          <div className="container">
            <div className="row">
              <div className="centeredContent">
                <p class="mission">
                  Our mission is to provide our clients with the highest level
                  of quality services at fair and competitive prices. We believe
                  that by providing our clients with exceptional workmanship,
                  extraordinary service and professional integrity, we’ll ensure
                  the longevity of our company through repeat and referral
                  business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
