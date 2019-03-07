import React, { Component } from 'react';
import SearchContainer from "../../components/Search/searchContainer"
import "./home.css"

class HomePage extends Component {
  render() {
    return (
      <div className="homehtml">
      <div className="homehtmlbackground"></div>
          <div className='homecontainer'>
            <div id="headingcontainer">
              <h1 id="homeh1">Welcome to Travel'd</h1>
              <h3 id="homeh3">Your destination for vacation inspiration!</h3>
            </div>
            <div className="searchDiv">
              <SearchContainer />
            </div>
          </div>
      </div>
    );
  }
}

export default HomePage;
