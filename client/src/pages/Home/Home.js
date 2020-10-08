import React, { Component } from 'react';
import ProductView from './../../components/ProductView/productview'
import ProductCard from './../../components/ProductView/productview'
import About from '../About/About'

class HomePage extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron text-left">
          {/* <h1 className="display-4">Welcome to git.PPE</h1> */}
          {/* <img className="jumbotronImg" src="https://fontmeme.com/permalink/201007/197bd622ace3df16555e2fc9b07a4ceb.png"/> */}
          {/* <hr className="my-4"/>
            <p>Take a look at our inventory below.</p> */}
            {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
        </div>
        <ProductView />

        
        </div>
       
    );
  }
}

export default HomePage;
