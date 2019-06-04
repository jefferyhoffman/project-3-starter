import React from "react";

function ProductCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt={props.name}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Brand:</strong> {props.brand}
          </li>
          <li>
            <strong>Price:</strong> {props.price}
          </li>
          <li>
            <strong>Quantity:</strong> {props.price}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;