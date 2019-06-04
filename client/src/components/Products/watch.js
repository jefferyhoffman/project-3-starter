import React from "react";

function WatchCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
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

export default WatchCard;