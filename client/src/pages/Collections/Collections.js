import React, { Component } from 'react';
// import { Button } from 'reactstrap';
// import "./collections.css";
import "../Home/style.css";
// import watchVid from "./vidBg.mp4";
import API from "../../utils/API"
import Title from "../../components/Products/Title"
import Wrapper from "../../components/Products/Wrapper"
import Products from "../../components/Products/Products"



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
    API.getItems()
      .then(res => {
        if(this._isMounted){

          this.setState({ items: res.data })
          console.log(res.data)
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
      <Wrapper>
        <Title>Watch List</Title>
       
           
        {this.state.items.map(item => (
          <Products
            item={item}
            // id={item.id}
            key={item.id}
            // name={item.name}
            // image={item.img}  
            // brand={item.brand}
            // price={item.price}
            // quantity={item.quantity}
            addToCart={this.props.addToCart}
          />
        ))
        }
      </Wrapper>
    );
  }
}

export default Collections;
