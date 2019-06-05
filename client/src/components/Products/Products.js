import React from "react";
import "./style.css"

function ProductCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.item.image} alt={props.item.name}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.item.name}
          </li>
          <li>
            <strong>Brand:</strong> {props.item.brand}
          </li>
          <li>
            <strong>Price:</strong> {"$" + props.item.price}
          </li>
          {/* <li>
            <strong>Quantity:</strong> {props.item.quantity}
          </li> */}
        </ul>
        <h1 onClick={() => props.addToCart(props.item)}>Buy Me</h1>
      </div>
    </div>
  );
}

export default ProductCard;