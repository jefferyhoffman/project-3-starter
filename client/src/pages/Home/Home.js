import React, { Component } from "react";
import CardLayout from "../../components/CardLayout/CardLayout";
import LeftRail from "../../components/LeftRail/LeftRail";
import TopRail from "../../components/TopRail/TopRail";
import { Image } from "semantic-ui-react";
import "./Home.css";

class HomePage extends Component {
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
