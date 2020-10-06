import React, { Component } from 'react';
import ProductCard from '../ProductCard/productCard'

class ProductView extends Component {


  render() {

    return (
        <div className="container-fluid productview">
        <div className="row">
        <div className="col-12">
<ProductCard />

        </div>
        
            
            </div>
        </div>
    )
  }
}

export default ProductView;
