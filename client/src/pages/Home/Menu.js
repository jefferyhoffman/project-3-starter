import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";




const Menu= ()=> {
  
    return (
      <>
        <h1>Welcome to Let's Guess!</h1>
       
        <div className="container">
          <div className="columns is-multiline is-mobile">
          <div className="column is-half">
              <article className="tile is-child box" id="demoTile">
                <article className="tile is-child box">
                  <p className="title">Demo</p>
                  <img src="https://media.giphy.com/media/lr7Vf26ewmT76gKwu7/giphy.gif" />
                </article>
              </article>
            </div>
            <div className="column is-half">
              <article
                className="tile is-child notification"
                id="characterTile"
              >
                <article className="tile is-child notification ">
                  <p className="title">Let's Guess Characters</p>
                  <p className="subtitle">Find out more about your favourite Character</p>
                  <Carousel />
                  <br/>
                  <br/>
                  <Link className="button enterBtn" to='/characters'>Enter</Link>
                </article>
              </article>
            </div>
           
       
            <div className="column">
              <article className="tile is-child box" id="playTile">
                <article className="tile is-child box" id="playTile2">
                  <p className="title">Ready to Play?</p>
                  <p className="subtitle">Click Image to Start!</p>
                  <figure className=" image is-128x128 is-inline-block">
                    <Link to="/MainGame">
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

export default Menu;
