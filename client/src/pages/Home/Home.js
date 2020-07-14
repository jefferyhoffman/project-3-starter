import React, { Component } from "react";
import CardLayout from "../../components/CardLayout/CardLayout";
import LeftRail from "../../components/LeftRail/LeftRail";
import TopRail from "../../components/TopRail/TopRail";
import { Image } from "semantic-ui-react";
import "./Home.css";

class HomePage extends Component {
  //Define function then pass the function into leftRail and then within leftRail do the callback. Parameter that represents array
  //console.log the array parameter to see if its passed in properly. Then can pass it into the state of the homepage (will have to make a state in homepage). Then pass new array into cardLayout.
  render() {
    return (
      <div>
        <Image centered src={require("../../assets/images/megabitesLogo.png")}/>
        <div className="bgStyle">
          <TopRail />
          <LeftRail />
          <CardLayout />
        </div>
      </div>
    );
  }
}

export default HomePage;
