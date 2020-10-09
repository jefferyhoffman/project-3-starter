import React, { Component } from 'react';

class ProductView extends Component {

  render() {

    return (
      <div className="container-fluid productview">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="hello"><img src="https://fontmeme.com/permalink/201007/517ba7a72257094330b50dc86d054820.png" alt=""></img></h1>
            <p className="paragraph"> <strong>Choose from our wide selection of PPE products. As a company, we strive to keep our customers safe through an unprecedented time. <br/>All of our products are medically-certified PPE. We ensure the highest quality products backed by our 100% money back guarantee.</strong> </p>
            <div className="row">
              <div className="col-3 text-center">
                </div>
                <div className="col-3 text-center">
                </div>
                <div className="col-3 text-center">
                </div>
                <div className="col-3 text-center">
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductView;
