import React, { Component } from 'react';

import SearchForm from "../../components/Search/searchForm"
import Sidebar from "../../components/Sidebar/Sidebar";

class Browse extends Component {
  render() {
    return (
      <div className='container'>
       <Sidebar />
       <div className="row">
       <div className="col-md-1">
       </div>
       <div className="col-md-11"><SearchForm />
       </div>
       </div>
        
      </div>
    );
  }
}

export default Browse;