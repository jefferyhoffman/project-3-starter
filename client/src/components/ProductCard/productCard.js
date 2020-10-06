import React, { Component } from 'react';

class ProductCard extends Component {


  render() {

    return (
        <div className="container no-margin">
        <div className="card">
            <div className="imgBx">
                <img src="https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png" alt="n-95"/>
            </div>

            <div className="contentBx">

                <h2>N-95 Mask</h2>
                <p>item description</p>
                <a href="#">Buy Now</a>
            </div>

        </div>
    </div>

    )
  }
}

export default ProductCard;