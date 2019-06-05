import React from "react";
import "./style.css"

function ProductCard(props) {
  return (
    
    <div className="card">
      <div className="img-container">
        <img id="watchList" src={props.item.image} alt={props.item.name}/>
      </div>
      <hr />
      <div className="contentProduct">
        <ul>
          <li id="liProducts">
            <strong>{props.item.brand} {props.item.name} {props.item.image}</strong> 
          </li>
          <li id="liProducts">
            ${props.item.price}
          </li>
         
        </ul>
        <h1 onClick={() => props.addToCart(props.item)}> <i className="fas fa-shopping-cart fa-2x"></i></h1>
      </div>
    </div>
    
  
  );
}

export default ProductCard;