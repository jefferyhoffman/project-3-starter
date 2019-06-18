import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import "./Collections.css";
import watchVid from "../Home/vidBg.mp4";
import API from "../../lib/API";
// import "../Home/style.css";
// import watchVid from "./vidBg.mp4";
import Wrapper from "../../components/Products/Wrapper";
import Products from "../../components/Products/Products";
// import { Link } from 'react-router-dom';


class Collections extends Component {
  _isMounted = false;

  state = {
    items: []
  };

  componentDidMount() {
    this._isMounted = true;
    this.loadItems();
  };

  loadItems = () => {
    API.Items.getItems()
      .then(res => {
        if (this._isMounted) {
          this.setState({ items: res.data })
        }
      })

      .catch(err => console.log(err))
  };

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    console.log(this.state)
    return (

      <div className="container-fluid">
        <div className="row" id="row1Collection">
          <video autoPlay muted loop id="videoBgC" src={watchVid} type="video/mp4"></video>
          <div className="text-overlayC">
            Collections
        </div></div>
        <div className="row"><Wrapper>
          {(this.state.items.length > 0) ? this.state.items.map(item => (
            <Products
              item={item}
              id={item.id}
              key={item.id}
              name={item.name}
              image={item.img}
              className="max-width-100"
              brand={item.brand}
              price={item.price}
              quantity={item.quantity}
              description={item.description}
              addToCart={this.props.addToCart}
            />
          )) : ""
          }


        </Wrapper></div>
      </div>
    )
  }
}

export default Collections;
