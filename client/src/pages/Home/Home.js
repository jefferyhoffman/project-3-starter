import React, { Component } from "react";
import CardLayout from "../../components/CardLayout/CardLayout";
import LeftRail from "../../components/LeftRail/LeftRail";
import { Image } from "semantic-ui-react";
import "./Home.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Image centered src={require("../../assets/images/megabitesLogo.png")}/>
        <div className="bgStyle">
          <LeftRail />
          <CardLayout />
        </div>
      </div>
    );
  }
}

export default HomePage;
