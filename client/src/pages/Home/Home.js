import React, { Component } from "react";

// import logo from "./logo.svg";
// import MainGrass from "../../images/MainGrass.jpg";

class HomePage extends Component {


  render() {


    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            {/* <div className="col">
              <p>
                Scroll Up and Down this page to see the parallax scrolling
                effect.{" "}
              </p>
            </div> */}
          </div>
        </div>
        <div className="parallax parallax-1">
          <h1>This is the best feature ever!!!</h1>
        </div>
        <div
          style={{
            height: "400px",
            backgroundColor: "#ffc41f",
            fontSize: "36px",
            zIndex: "1000"


          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div>
                  Our mission is to provide our clients with the highest level of quality services at fair and competitive prices.  We believe that by providing our clients with exceptional workmanship, extraordinary service and professional integrity, we’ll ensure the longevity of our company through repeat and referral business
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax parallax-2"></div>

        <div className="container">
          <div className="row">
            <div className="col">

            </div>
          </div>
        </div>
        <div className="parallax parallax-3"></div>

      </div>

    );
  }
}

export default HomePage;
