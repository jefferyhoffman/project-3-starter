import React from 'react';
    
export default class CartItem extends React.Component {
 

  render(){
    const { product } = this.props;
    console.log(product)
    return (
      <div className="card" style={{ marginBottom: "10px"}}>
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <img src={product.img} alt="o" style={{width: '75px', height: '75px'}}/>
          <h5 className="card-text"><small>price: </small>${product.price}</h5>
          <span className="card-text text-success">
              <small>Quantity: </small>{product.quantity}</span>
          <button className="btn btn-sm btn-warning float-right" 
              onClick={() => this.props.remove(product)}>Remove from cart</button>
        </div>
      </div>
     )
  }
}