import React, { Component } from 'react';

import SearchContainer from "../../components/Search/searchContainer"


class Browse extends Component {
  render() {
    return (
      <div className='container'>
      <h1>Browse Trips</h1>
      <hr/>
      <SearchContainer />
      </div>
    );
  }
}

export default Browse;