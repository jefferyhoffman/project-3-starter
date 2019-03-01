import React, { Component } from 'react';

import SearchForm from "../../components/Search/searchForm"

class HomePage extends Component {
  render() {
    return ( 
       <div className='container'>
      <div className="jumbotron" style={{textAlign:"center"}}> 
       <h1>Welcome to Travel'd</h1>
       </div>
    
    
      <hr/>
        <SearchForm />
      </div>
    );
  }
}

export default HomePage;
