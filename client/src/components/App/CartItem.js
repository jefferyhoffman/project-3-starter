import React from 'react';
    
export default class CartItem extends React.Component {
 

  render(){
    const { product } = this.props;
    console.log(product)
    return (
      <div className="cardProduct" style={{ marginBottom: "10px"}}>
        <div className="card-body">
          <h4 className="productName">{product.name}</h4>
          <img id="cartItem" src={product.img} alt="o" style={{width: '100px', height: '100px'}}/>
          <small className="priceTag">price: <span id="productPrice">${product.price}</span></small>
          <small id="quantityTag" className="card-text">
              Quantity: <span id="quantitySpan">{product.quantity}</span></small>
          <button id="removeBtn" className="btn btn-sm btn-warning" 
              onClick={() => this.props.remove(product)}>Remove this item</button><hr id="productHr" />
        </div>
      </div>
     )
  }
}