import React from 'react';
    
export default class CartItem extends React.Component {
  
 

  render(){
    const { product } = this.props;
    console.log(product)
    return (
      <div className="cardProduct">
        <div className="card-body">
          <h4 id="itemsBoughtName" className="card-title">{product.name}</h4>
          <img id="itemsBoughtImg" src={product.img} alt="o" style={{width: '75px', height: '75px'}}/>
          <small id="priceTag">price: ${product.price}</small>
          <small id="quantityTag">quantity: <span id="quantitySpan">{product.quantity}</span></small>
          {/* <h5 className="card-text"><small>total: </small>${product.price * product.quantity} */}

          <button className="btn btn-sm btn-warning" id="removeBtn" 
              onClick={() => this.props.remove(product)}>Remove from cart</button>
        </div>

      </div>
     )
  }
}