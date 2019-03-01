import React, { Component } from 'react';

import AddNewTrip from "../../components/AddTrip/index";
import Sidebar from "../../components/Sidebar/Sidebar";

class AddTripPage extends Component {
  render() {
    return (
      <div className='newTrip'>
       <Sidebar />
        <AddNewTrip />
      </div>
    );
  }
}

export default AddTripPage;