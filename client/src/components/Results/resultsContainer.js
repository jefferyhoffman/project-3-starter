import React, { Component } from "react";
import ResultList from "./viewResults";
import Card from "./Card";
// import API from "../utils/API";

class ResultContainer extends Component {
  state = {
    
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
//   componentDidMount() {
//     this.searchGiphy("kittens");
//     //this makes kittens show when page is loaded
//   }

//   searchGiphy = query => {
//     API.search(query)
//       .then(res => this.setState({ results: res.data.data }))
//       .catch(err => console.log(err));
//   };

  

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