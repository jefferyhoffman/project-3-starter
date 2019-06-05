import React from "react";
import "./style.css"

function ProductCard(props) {
  return (
    
    <div className="card">
      <div className="img-container">
        <img id="watchList" src={props.image} alt={props.name}/>
      </div>
      <hr />
      <div className="contentProduct">
        <ul>
          <li id="liProducts">
            <strong>{props.brand} {props.name}</strong> 
          </li>
          <li id="liProducts">
            Price: {props.price}
          </li>
        </ul>
      </div>
    </div>
    
  
  );
}

export default ProductCard;