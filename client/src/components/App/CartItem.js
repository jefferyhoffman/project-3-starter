import React from 'react';
    
export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 1}
  }

  render(){
    const { product } = this.props;
    return (
      <div className="card" style={{ marginBottom: "10px"}}>
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <h5 className="card-text"><small>price: </small>${product.price}</h5>
          <span className="card-text text-success">
              <small>Quantity: </small>{product.qty}</span>
          <button className="btn btn-sm btn-warning float-right" 
              onClick={() => this.props.remove(product)}>Remove from cart</button>
        </div>
      </div>
     )
  }
}