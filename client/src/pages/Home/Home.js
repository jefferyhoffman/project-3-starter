import React, { Component } from 'react';
import ProductView from './../../components/ProductView/productview'
import ProductCard from './../../components/ProductView/productview'

class HomePage extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to git.PPE</h1>
          <p className="lead">A website to order all your PPE needs during the pandemic.</p>
          <hr className="my-4"/>
            <p>Take a look at our inventory below.</p>
            {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
        </div>
        <ProductView />
        </div>
    );
  }
}

export default HomePage;
