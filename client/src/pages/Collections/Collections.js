import React, { Component } from 'react';
// import { Button } from 'reactstrap';
// import "./collections.css";
import "./Collections.css";
import watchVid from "../Home/vidBg.mp4";
import API from "../../utils/API";
import "../Home/style.css";
// import watchVid from "./vidBg.mp4";
import Wrapper from "../../components/Products/Wrapper"
import Products from "../../components/Products/Products"



class Collections extends Component {

  state = {
    items: []
  };

  componentDidMount() {
    this.loadItems();
  };

  loadItems = () => {
    API.getItems()
      .then(res => {
        this.setState({ items: res.data })
        console.log(res.data)
      })

      .catch(err => console.log(err))
  };


  render() {
    console.log(this.state)
    return (
      <div className="container-fluid">
       <div className="row" id="row1Collection">
          <video autoPlay muted loop id="videoBgC" src={watchVid} type="video/mp4"></video>
        <div className="text-overlay">
            KOSCOWIX
        </div>
        <p className="p-title">
          Collections
        </p>  
       </div>
         <Wrapper>
        {this.state.items.map(item => (
          <Products
            id={item.id}
            key={item.id}
            name={item.name}
            image={item.img}  
            brand={item.brand}
            price={item.price}
            quantity={item.quantity}
          />
        ))
        }
      </Wrapper>
    </div>
   
    );
  }
}

export default Collections;
