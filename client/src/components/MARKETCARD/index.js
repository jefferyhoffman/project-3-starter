import React from "react";
import "./style.css";
function MARKETCARD(){
    return(
    <div className="card" style="width: 18rem;">
    <img src="marketsign.jpg" className="card-img-top" alt="...">
    <div className="card-body">
      <h5 className="card-title">Market</h5>
      <p className="card-text">Please type in your zipcode to find Farmer Markets near you.</p>
      <a href="#" className="btn btn-primary">Market Page</a>
    </div>
    </img>
  );
}
export default MARKETCARD;