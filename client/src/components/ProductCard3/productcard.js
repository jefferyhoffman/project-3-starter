import React, { Component } from 'react';

class ProductCard extends Component {


  render() {

    return (

        <div className="card">
            <div className="imgBx">
                <img src="https://lh3.googleusercontent.com/proxy/dWuu-h5h4oX4QOqTuex6_VsD9RESJPQdS4M4zfvPrBgxcbdKDpCE8KxGxe9Hklthcm_KKPdOLttiITfzv1LAEOS97nhZmYTF0z5mPfwAPDPaUpFSeXEIfKOTzHWeIebKSb5ut6EBVw" alt="n-95"/>
            </div>

            <div className="contentBx">

                <h2>Hand Sanitizer</h2>
                <p>item description</p>
                <a href="#">Add to Cart</a>
            </div>

        </div>


    )
  }
}

export default ProductCard;