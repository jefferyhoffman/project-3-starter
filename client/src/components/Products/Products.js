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
            ${props.price}
          </li>
         
        </ul>
        <h1 onClick={() => props.addToCart(props.item)}><i className="fas fa-shopping-cart fa-1x"></i></h1>
      </div>
    </div>
    
  
  );
}

export default ProductCard;