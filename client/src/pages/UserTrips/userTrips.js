import React, { Component } from 'react';

import ResultList from "../../components/Results/resultsContainer"

class UserTripPage extends Component {
  render() {
    return (
      <div className='newTrip'>
        <ResultList />
      </div>
    );
  }
}

export default UserTripPage;