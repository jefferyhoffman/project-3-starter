import React, { Component } from 'react';

class ProductCard extends Component {


  render() {

    return (

        <div className="card">
            <div className="imgBx">
                <img src="https://pngimg.com/uploads/toilet_paper/toilet_paper_PNG18285.png" alt="n-95"/>
            </div>

            <div className="contentBx">

                <h2>Toilet Paper</h2>
                <p>item description</p>
                <a href="#">Add to Cart</a>
            </div>

        </div>


    )
  }
}

export default ProductCard;