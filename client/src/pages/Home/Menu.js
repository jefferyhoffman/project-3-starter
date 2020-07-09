import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";

class Menu extends Component {
  render() {
    return (
      <>
        <h1>Welcome --userName Here--</h1>
        <div className="container">
          <div class="columns is-multiline is-mobile">
          <div class="column is-half">
              <article className="tile is-child box" id="demoTile">
                <article className="tile is-child box">
                  <p className="title">Demo Gif</p>
                  <img src="/LetsGuessHomeImg.png" />
                </article>
              </article>
            </div>
            <div class="column is-half">
              <article
                className="tile is-child notification"
                id="characterTile"
              >
                <article className="tile is-child notification ">
                  <p className="title">Let's Guess Characters</p>
                  <p className="subtitle">4 Images of Characters here?</p>
                  <Carousel />
                </article>
              </article>
            </div>
           
       
            <div class="column">
              <article className="tile is-child box" id="playTile">
                <article className="tile is-child box" id="playTile2">
                  <p className="title">Ready to Play?</p>
                  <p className="subtitle">Click Image to Start!</p>
                  <figure className=" image is-128x128 is-inline-block">
                    <Link to="/game">
                      <img
                        className="image is-rounded "
                        id="letsGuess"
                        src="./assets/images/theLumberjack.png"
                      />
                    </Link>
                  </figure>
                </article>
              </article>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default Menu;
