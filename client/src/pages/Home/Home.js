import React, { Component } from "react";

// import logo from "./logo.svg";
// import MainGrass from "../../images/MainGrass.jpg";
import overlayLogo from "../../images/transaparentlogo.png";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                Scroll Up and Down this page to see the parallax scrolling
                effect.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="parallax parallax-1">
          <h1>This is the best feature ever!!!</h1>
          <img className="overlayLogo" src={overlayLogo}/>
        </div>

        <div
          style={{
            height: "200px",
            backgroundColor: "#ffc41f",
            fontSize: "36px",
            textAlign: "center",
            // opacity: "100",
            // backgroundColor: "#11ffee00",
            // zIndex: "1000",
            position: "center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div>
                  Scroll Up and Down this page to see the parallax scrolling
                  effect. This div is just here to enable scrolling. Tip: Try to
                  remove the background-attachment property to remove the
                  scrolling effect.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax parallax-2"></div>
      </div>
    );
  }
}

export default HomePage;
