import React, { Component } from 'react';
import SearchForm from "../../components/Search/searchForm"
import "./home.css"

class HomePage extends Component {
  render() {
    return (
      <div className="homehtml">
      <div className='homecontainer'>
        <div>
          <h1>Welcome to Travel'd</h1>
          <h3>Your destination for vacation inspiration!</h3>
        </div>
        <hr />
        <div className="searchDiv">
          <SearchForm />
        </div>
      </div>
      </div>
    );
  }
}

export default HomePage;
