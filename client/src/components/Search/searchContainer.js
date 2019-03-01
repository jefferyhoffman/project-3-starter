import React, { Component } from "react";
import SearchForm from "./searchForm";

// import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    search: "",
   
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    // this.searchGiphy("kittens");
    //this makes kittens show when page is loaded
  }

//   searchGiphy = query => {
//     API.search(query)
//       .then(res => this.setState({ results: res.data.data }))
//       .catch(err => console.log(err));
//   };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <div>
        {/* <Card heading ={this.state.result.destination || "Destination"}></Card> */}
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        
      </div>
    );
  }
}

export default SearchContainer;