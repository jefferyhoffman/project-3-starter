import React from "react";
import "./style.css";
function MARKETCARD(){
    return(
    <div className="card">
    <img src="marketsign.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Market</h5>
      <p className="card-text">Please type in your zipcode to find Farmer Markets near you.</p>
      <a href="#" className="btn btn-primary">Market Page</a>
    </div>
    </div>
  );
}
export default MARKETCARD;