import React, { Component } from 'react';
import './Home.css'


class Menu extends Component {
  render() {
    return (
      <div className="container">
      <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification" id='demoTile'>
            <article className="tile is-child notification">
            <p className="title">Demo Gif</p>
              <p className="subtitle">Place Here</p>
        </article>
              
            </article>
            <article className="tile is-child notification" id='googleTile'>
            <article className="tile is-child notification">
            <p className="title">Other Info</p>
              <p className="subtitle">Google Ad Here?</p>
        </article>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification" id="playTile">
            <article className="tile is-child box">
            <p className="title">Ready to Play?</p>
              <p className="subtitle">Click Image to Start!</p>
              <figure className=" image is-128x128 is-inline-block">
                <img className="image is-rounded " id="letsGuess" src="./assets/images/theLumberjack.png" />
              </figure>
    </article>
              
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification" id='characterTile'>
           
            <article className="tile is-child notification ">
            <p className="title">Character Info Here</p>
            <p className="subtitle">4 Images of Characters here?</p>
        <div className="content">
        <div className ='field is-grouped'>
            <figure className="image is-128x128">
              <img src="https://bulma.io/images/placeholders/640x480.png"/>
            </figure>
            <figure className="image is-128x128">
              <img src="https://bulma.io/images/placeholders/640x480.png"/>
            </figure>
            <figure className="image is-128x128">
              <img src="https://bulma.io/images/placeholders/640x480.png"/>
            </figure>
            </div>
        </div>
      </article>
          </article>
        </div>
      </div>
     
       
    </div>
   </div>
    );
  }
}

export default Menu;
