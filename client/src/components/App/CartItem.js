import React from 'react';
    
export default class CartItem extends React.Component {
  
 

  render(){
    const { product } = this.props;
    console.log(product)
    return (
      <div className="card" style={{ marginBottom: "10px"}}>
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <li></li>
          <img src={product.img} alt="o" style={{width: '75px', height: '75px'}}/>
          <h5 className="card-text"><small>price: </small>${product.price}</h5>
          <h5 className="card-text"><small>quantity: </small>{product.quantity}</h5>
          <h5 className="card-text"><small>total: </small>${product.price * product.quantity}

          <button className="btn btn-sm btn-warning float-right" 
              onClick={() => this.props.remove(product)}>Remove from cart</button></h5>
        </div>
      </div>
     )
  }
}