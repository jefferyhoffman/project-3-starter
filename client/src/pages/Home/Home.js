import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import id01 from "./images/id-01.png";
import id02 from "./images/id-02.png";
import id03 from "./images/id-03.png";
import id04 from "./images/id-04.png";
import id05 from "./images/id-05.png";
import gif from "./images/productGIF.gif";
import img from "./images/productIMG.jpg";
import "./style.css";
// import WatchWrapper from "../../components/Products/WatchWrapper";
// import WatchCard from '../../components/Products/watch';
import watchVid from "./vidBg.mp4"

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
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="row1">
          <video autoPlay muted loop id="videoBg" src={watchVid} type="video/mp4"></video><br />
          <div className="text-overlay">KOSCOWIX</div>
        <p className="co-bio">Koscowix Co. was created by a dynamic team of four, based in Charlotte, North Carolina. The STORM Brand is the cult of individualism.
        From stylish sports to bold fashion statements, the Storm range combines unique features and gadgets with a wide range of colours and shapes.
         Storm continually seeks stimulation for new challenges in design.
          Storm’s team of dedicated designers take inspiration from the world around them,
          combining unconventional materials together with precision instrumentation.</p>
        </div>

      <div className="row" id="row2">
        <div className="col-6" id="row2sec1">
          <div className="content">
            <h1 id="homeProductN" className="card-text">STORM Kong-X</h1>
            <img src={id01} className="productImage card-text" alt="product-1" />
            <p className="card-text">The STORM Kong-X watch is a small thin strapped watch that is an effortlessly stylish addition to any wardrobe.
            Made from stainless steel this watch combines modern design with the latest trends with its multi-strap of both bangle and mesh.
                Due to its small nature this is the perfect watch to stack with a statement bracelet. Water resistant to 50m.</p>
            <a href="/" className="btn btn-light card-text">Add to Shopping Cart</a>

          </div>
        </div>


        <div className="col-6" id="row2sec2">
          <div className="content">
            <h1 id="homeProductN" className="card-text">STORM Donferg</h1>
            <img src={id02} className="productImage" alt="product-2" />
            <p className="card-text">The STORM Donferg is one of STORM’s most unique designed watches yet.
            Combining fashion and function, the Donferg comes on a textured silicone strap and carries a unique combination-inspired dial.
                  It’s unique vertical spinning disc also carry ‘animation mode’, allowing wearers to show of the unique spinning function of the watch to friends!</p>
            <a href="/" className="btn btn-light">Add to Shopping Cart</a>
          </div>
        </div>
      </div>

      <div className="row" id="row3">
        <div className="col-4" id="row3sec1">
          <div className="content">
            <h1 id="homeProductN" className="card-text">STORM Valena</h1>
            <img src={id03} className="productImage" alt="product-3" />
            <p className="card-text">The STORM Valena watch is a small thin strapped watch that is an effortlessly stylish addition to any wardrobe.
            Made from stainless steel this watch combines modern design with the latest trends with its multi-strap of both bangle and mesh.
              Due to its small nature this is the perfect watch to stack with a statement bracelet. Water resistant to 50m.</p>
            <a href="/" className="btn btn-light card-text">Add to Shopping Cart</a>
          </div>
        </div>
        <div className="col-4" id="row3sec2">
          <div className="content">
            <h1 id="homeProductN" className="card-text">STORM Yang-X</h1>
            <img src={id04} className="productImage" alt="product-4" />
            <p className="card-text">The STORM Yang-X is a sporty looking watch with multifunction features.
            The  Yang-X has a dual time function meaning you can keep track of the time in 2 time zones.
            The 24 hour and date features make this watch a very useful accessory.
              Made from brushed stainless steel with a deep green dial and waterproof to 50m.</p>
            <a href="/" className="btn btn-light">Add to Shopping Cart</a>
          </div>
        </div>

        <div className="col-4" id="row3sec3">
          <div className="content">
            <h1 id="homeProductN" className="card-text">STORM Yawo-XL</h1>
            <img src={id05} className="productImage" alt="product-5" />
            <p className="card-text">The STORM Yawo-XL is a minimalist watch with a retro STORM feel.
            Based off the best selling Yawo-XL, this new take combines modern contemporary with sleek design.
            The silver strap is made from high quality brushed stainless steel, while the Yawo-XL blue dial is uniquely shaped to add dimension.
                The New Yawo-XL is water resistant. </p>
            <a href="/" className="btn btn-light">Add to Shopping Cart</a>
          </div>
        </div>
      </div>
      <div className="row" id="row4">
        <div className="col-6" id="row4sec1">
          <div className="content"><img src={gif} className="productGIF" alt="product-GIF" /></div>

        </div>
        <div className="col-6" id="row4sec2">
          <div className="content"><img src={img} className="productIMG" alt="product-IMG" /></div>

        </div>
      </div></div >
    );
  }
}

export default HomePage;