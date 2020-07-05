import React, { Component } from 'react';
import './Home.css'


class HomePage extends Component {
  render() {
    return (
      <div className="container">
      <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification" id='demoTile'>
            <article class="tile is-child notification">
            <p class="title">Demo Gif</p>
              <p class="subtitle">Place Here</p>
        </article>
              
            </article>
            <article class="tile is-child notification" id='googleTile'>
            <article class="tile is-child notification">
            <p class="title">Other Info</p>
              <p class="subtitle">Google Ad Here?</p>
        </article>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification" id="playTile">
            <article class="tile is-child box">
            <p class="title">Ready to Play?</p>
              <p class="subtitle">Click Image to Start!</p>
              <figure class=" image is-128x128 is-inline-block">
                <img className="image is-rounded " id="letsGuess" src="./assets/images/myAvatar.png" />
              </figure>
    </article>
              
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification" id='characterTile'>
           
            <article class="tile is-child notification ">
            <p class="title">Character Info Here</p>
            <p class="subtitle">4 Images of Characters here?</p>
        <div class="content">
        <div className ='field is-grouped'>
            <figure class="image is-128x128">
              <img src="https://bulma.io/images/placeholders/640x480.png"/>
            </figure>
            <figure class="image is-128x128">
              <img src="https://bulma.io/images/placeholders/640x480.png"/>
            </figure>
            <figure class="image is-128x128">
              <img src="https://bulma.io/images/placeholders/640x480.png"/>
            </figure>
            </div>
        </div>
      </article>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification" id="scoreTile">
          <div class="content">
       <article class="tile is-child notification">
      <div class="content">
      <p class="title">High Scores</p>
            <p class="subtitle">See scores below?</p>
        <p class="subtitle">1.</p>
        <p class="subtitle">2. </p>
        <p class="subtitle">3. </p>
        <p class="subtitle">4. </p>
        <p class="subtitle">5. </p>
        <p class="subtitle">6. </p>
        <p class="subtitle">7. </p>
      </div>
    </article>
            
          </div>
        </article>
      </div>
    </div>
   </div>
    );
  }
}

export default HomePage;
