import React from "react";
import "./style.css";
function PATRONCARD(){
    return(
    <div className="card">
    <img src="farmers-market-meagan-flickr-600x347.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Patron</h5>
      <p className="card-text">Patrons please click here.</p>
      <a href="/patron" className="btn btn-primary">Patron Page</a>
    </div>
    </div>
  
  );
}
export default PATRONCARD;