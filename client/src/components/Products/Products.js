import React from "react";
import "./style.css"

function ProductCard(props) {
  return (
    
    <div className="card" id="productCard">
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
        <h1 onClick={() => props.addToCart(props.item)}><i id="productCart" className="fas fa-shopping-cart"></i></h1>
      </div>
    </div>
    
  
  );
}

export default ProductCard;