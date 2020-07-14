import React, { Component } from "react";
import CardLayout from "../../components/CardLayout/CardLayout";
import LeftRail from "../../components/LeftRail/LeftRail";
import TopRail from "../../components/TopRail/TopRail";
import { Image } from "semantic-ui-react";
import "./Home.css";
import API from "../../lib/API";

class HomePage extends Component {

  state = {
    recipes: [],
    err: "",
  };

  componentDidMount() {
    API.Recipes.all()
      .then((response) => {
        this.setState({ recipes: response.data, err: "" });
      })
      .catch((err) => this.setState({ err: err.message }));
  }  

    filteredList = newList => {
    console.log(newList)
      this.setState({recipes: newList})
    
  }

  //Define function then pass the function into leftRail and then within leftRail do the callback. Parameter that represents array
  //console.log the array parameter to see if its passed in properly. Then can pass it into the state of the homepage (will have to make a state in homepage). Then pass new array into cardLayout.
  render() {
    return (
      <div>
        <Image centered src={require("../../assets/images/megabitesLogo.png")}/>
        <div className="bgStyle">
          <TopRail filteredList={this.filteredList}/>
          <LeftRail filteredList={this.filteredList}/>
          <CardLayout recipes={this.state.recipes}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
