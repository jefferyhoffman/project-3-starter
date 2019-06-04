import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import id01 from "./id-01.png";
import id02 from "./id-02.png";
import id03 from "./id-03.png";
import id04 from "./id-04.png";
import id05 from "./id-05.png";
import id06 from "./id-06.png";
import id07 from "./id-07.png";
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

  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="row1">

        </div>
        <div className="row" id="row2">
          <div className="col-6" id="row2sec1">
            <h1 className="card-text">STORM Kong-X</h1>
            <img src={id01} className="productImage card-text" alt="product-1" />
            <p className="card-text">The STORM Kong-X watch is a small thin strapped watch that is an effortlessly stylish addition to any wardrobe.
            Made from stainless steel this watch combines modern design with the latest trends with its multi-strap of both bangle and mesh.
                Due to its small nature this is the perfect watch to stack with a statement bracelet. Water resistant to 50m.</p>
            <a href="/" className="btn btn-light card-text">Add to Shopping Cart</a></div>
      

        <div className="col-6" id="row2sec2">
          <h1 className="card-text">STORM Donferg</h1>
          <img src={id02} className="productImage" alt="product-2" />
          <p className="card-text">The STORM Donferg is one of STORM’s most unique designed watches yet.
          Combining fashion and function, the Donferg comes on a textured silicone strap and carries a unique combination-inspired dial.
                It’s unique vertical spinning disc also carry ‘animation mode’, allowing wearers to show of the unique spinning function of the watch to friends!</p>
          <a href="/" className="btn btn-light">Add to Shopping Cart</a>
        </div>
      </div>

        <div className="row" id="row3">
          <div className="col-4" id="row3sec1">
            <h1 className="card-text">STORM Valena</h1>
            <img src={id03} className="productImage" alt="product-3" />
            <p className="card-text">The STORM Valena watch is a small thin strapped watch that is an effortlessly stylish addition to any wardrobe.
            Made from stainless steel this watch combines modern design with the latest trends with its multi-strap of both bangle and mesh.
          Due to its small nature this is the perfect watch to stack with a statement bracelet. Water resistant to 50m.</p>
            <a href="/" className="btn btn-light card-text">Add to Shopping Cart</a>
          </div>
          
          <div className="col-4" id="row3sec2">
            <h1 className="card-text">STORM Yang-X</h1>
            <img src={id04} className="productImage" alt="product-4" />
            <p className="card-text">The STORM Yang-X is a sporty looking watch with multifunction features.
            The  Yang-X has a dual time function meaning you can keep track of the time in 2 time zones.
            The 24 hour and date features make this watch a very useful accessory.
        Made from brushed stainless steel with a deep green dial and waterproof to 50m.</p>
            <a href="/" className="btn btn-light">Add to Shopping Cart</a>
          </div>

          <div className="col-4" id="row3sec3">
            <h1 className="card-text">STORM Yawo-XL</h1>
            <img src={id05} className="productImage" alt="product-5" />
            <p className="card-text">The STORM Yawo-XL is a minimalist watch with a retro STORM feel.
            Based off the best selling Yawo-XL, this new take combines modern comtemporary with sleek design.
            The silver strap is made from high quality brushed stainless steel, while the Yawo-XL blue dial is uniquely shaped to add dimension.
        The New Yawo-XL is water resistant. </p>
            <a href="/" className="btn btn-light">Add to Shopping Cart</a>
          </div>
        </div>
        <div className="row" id="row4">
          <div className="col-6" id="row4sec1">
            <h1 className="card-text">STORM Razar LTE </h1>
            <img src={id06} className="productImage" alt="product-6" />
            <p className="card-text">The STORM Razar LTE is the latest statement STORM LED watch.
            It’s futuristic rounded case features a sleek glass display with silver LED lights displaying date,
             hour, minute and seconds at the press of a button.
         The Razar LTE is made of high grade brushed stainless steel.</p>
            <a href="/" className="btn btn-light">Add to Shopping Cart</a>
          </div>
          <div className="col-6" id="row4sec2">
            <h1 className="card-text">STORM Razar BLD </h1>
            <img src={id07} className="productImage" alt="product-7" />
            <p className="card-text">The STORM Razar BLD is the latest statement STORM LED watch.
            It’s futuristic rounded case features a sleek glass display with black LED lights displaying date,
             hour, minute and seconds at the press of a button.
         The Razar BLD is made of high grade brushed stainless steel.</p>
            <a href="/" className="btn btn-light">Add to Shopping Cart</a>
          </div>
        </div>



      </div >
    );
  }
}

export default HomePage;