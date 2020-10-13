import React from "react";
import "./style.css";
function VENDORCARD(){
  return(
    <div className="card">
    <img src="farmer.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Vendor</h5>
      <p className="card-text">Vendors please click here.</p>
      <a href="#" className="btn btn-primary">Vendor Page</a>
   
    </div>
    </div>
  )
}
export default VENDORCARD;