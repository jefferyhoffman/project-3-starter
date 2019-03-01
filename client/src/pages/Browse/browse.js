import React, { Component } from 'react';

import SearchForm from "../../components/Search/searchForm"


class Browse extends Component {
  render() {
    return (
      <div className='container'>
      <h1>Browse Trips</h1>
      <hr/>
      <SearchForm />
      </div>
    );
  }
}

export default Browse;