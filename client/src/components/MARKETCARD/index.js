import React from "react";
import "./style.css";

function MARKETCARD(){
    return(
    <div className="card">
    <img src="marketsign.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Market</h5>

      <p className="card-text">Type in your zipcode to find a Farmer Markets near you! </p>
      <a href="/zip-code" className="btn btn-primary">Market Search</a>

    </div>
    </div>
  );
}
export default MARKETCARD;