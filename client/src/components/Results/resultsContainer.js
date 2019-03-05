import React, { Component } from "react";
import ResultList from "./viewResults";
import Card from "./Card";

class ResultContainer extends Component {
  state = {
    
    results: []
  };

  // componentDidMount() {
  //   this.searchGiphy("kittens");
  // }

  // searchTrips = query => {
  //   API.search(query)
  //     .then(res => this.setState({ results: res.data.data }))
  //     .catch(err => console.log(err));
  // };

  

  render() {
    return (
      <div>
        <Card heading ="heading"></Card>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default ResultContainer;