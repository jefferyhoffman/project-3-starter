import React from 'react';
    
export default class CartItem extends React.Component {
  
 

  render(){
    const { product } = this.props;
    console.log(product)
    return (
      <div className="cardProduct" style={{ marginBottom: "10px"}}>
        <div className="card-body">
<<<<<<< HEAD
          <h4 className="card-title">{product.name}</h4>
          <li></li>
          <img src={product.img} alt="o" style={{width: '75px', height: '75px'}}/>
          <h5 className="card-text"><small>price: </small>${product.price}</h5>
          <h5 className="card-text"><small>quantity: </small>{product.quantity}</h5>
          <h5 className="card-text"><small>total: </small>${product.price * product.quantity}

          <button className="btn btn-sm btn-warning float-right" 
              onClick={() => this.props.remove(product)}>Remove from cart</button></h5>
=======
          <h4 className="productName">{product.name}</h4>
          <img id="cartItem" src={product.img} alt="o" style={{width: '100px', height: '100px'}}/>
          <small className="priceTag">price: <span id="productPrice">${product.price}</span></small>
          <small id="quantityTag" className="card-text">
              Quantity: <span id="quantitySpan">{product.quantity}</span></small>
          <button id="removeBtn" className="btn btn-sm btn-warning" 
              onClick={() => this.props.remove(product)}>Remove this item</button><hr id="productHr" />
>>>>>>> 505fe7f2ea8b7baaa2442d6ce7ff5d87280f6f44
        </div>
      </div>
     )
  }
}