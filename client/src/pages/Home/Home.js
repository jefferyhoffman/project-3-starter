import React, { Component } from "react";

// import logo from "./logo.svg";
// import MainGrass from "../../images/MainGrass.jpg";

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
        </div>
        <div
          style={{
            height: "400px",
            backgroundColor: "red",
            fontSize: "36px"
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
