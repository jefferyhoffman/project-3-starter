import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const headerStyle = {
  background: "orange",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const EvenInfo = props => {
  return (
    <div style={{ textAlign: "center", padding: "10px", background: "white" }}>
      <header style={headerStyle}>
        <h1>Summer BBQ </h1>
      </header>
      <h2 className="title" style={{ color: "orange", padding: "20px" }}></h2>
      <h3 className="location">At the Pond</h3>
      <h3 className="date">September 12th, 2019</h3>
      <h3 className="time">5pm - 8pm</h3>
      <p className="info">
        Join the fun and meet your neighbors! Meat and drinks will be provided
        by HOA. <br />
        Everyone should bring side dish or dessert to share. <br />
        We also need some additional equipment and games so everyone can enjoy
        the event.
        <br />
        Please choose and/or add the item you are planning to bring.
      </p>
    </div>
  );
};

export default EvenInfo;
