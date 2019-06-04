import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import id01 from "./id-01.png";
import id02 from "./id-02.png";
// import id03 from "./id-03.jpg";
// import id04 from "./id-04.jpg";
// import id05 from "./id-05.jpg";
// import id06 from "./id-06.jpg";
// import id07 from "./id-07.jpg";
// import id08 from "./id-08.jpg";
// import id09 from "./id-09.jpg";
// import id10 from "./id-10.jpg";
// import id11 from "./id-11.jpg";
// import id12 from "./id-12.jpg";
import "./style.css";
// import WatchWrapper from "../../components/Products/WatchWrapper";
// import WatchCard from '../../components/Products/watch';

// const watchImgs = require("../../../public/images");

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  handleclick = (event) => {
    console.log("click")
    let { counter } = this.state
    counter++
    this.setState({ counter })
    console.log(this.state.counter)
  }
  
    // var titanic = new Titanic();

  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="row1">

        </div>
        <div className="row" id="row2">
          <div className="col-6" id="row2sec1" id="productCard">
            <h5 className="card-title">STORM Kong-X</h5>
            <img src={id01} id="productImage" alt="product-1"/>
            <p className="card-text">The STORM Kong-X watch is a small thin strapped watch that is an effortlessly stylish addition to any wardrobe.
            Made from stainless steel this watch combines modern design with the latest trends with its multi-strap of both bangle and mesh.
                Due to its small nature this is the perfect watch to stack with a statement bracelet. Water resistant to 50m.</p>
            <a href="/" className='shopping shopping-chat'>Add to Shopping Cart</a></div>
      </div>

      <div className="col-6" id="row2sec2" id="productCard">
        <h5>STORM Donferg</h5>
        <img src={id02} id="productImage" alt="product-2"/>
        <p className="card-text">The STORM Donferg is one of STORM’s most unique designed watches yet.
        Combining fashion and function, the Donferg comes on a textured silicone strap and carries a unique combination-inspired dial.
                It’s unique vertical spinning disc also carry ‘animation mode’, allowing wearers to show of the unique spinning function of the watch to friends!</p>
        <a href="/" className="btn btn-primary">Add to Shopping Cart</a>
      </div>

      <div className="row" id="row3">
        <div className="col-4" id="row3sec1">

        </div>
        <div className="col-4" id="row3sec2">

        </div>
        <div className="col-4" id="row3sec3">

        </div>
      </div>
      <div className="row" id="row4">
        <div className="col-6" id="row4sec1">

        </div>
        <div className="col-6" id="row4sec2">

        </div>
      </div>



      </div >
    );
  }
}

export default HomePage;