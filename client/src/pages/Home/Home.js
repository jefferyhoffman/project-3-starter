import React, { Component } from 'react';

import SearchForm from "../../components/Search/searchForm"

class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <SearchForm />
      </div>
    );
  }
}

export default HomePage;
