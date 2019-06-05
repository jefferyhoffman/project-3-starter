import React, { Component } from 'react';
// import { Button } from 'reactstrap';
// import "./collections.css";
// import "./style.css";
// import WatchCard from '../../components/Products/watch';
// import watchVid from "./vidBg.mp4";
import API from "../../utils/API"
import Title from "../../components/Products/Title"
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
      <Wrapper>
        <Title>Collections</Title>
      
           
        {this.state.items.map(item => (
          <Products
            id={item.id}
            key={item.id}
            name={item.name}
            image={require('../Home/id-01.png')}  
            brand={item.brand}
            price={item.price}
          />
        ))
        }
      </Wrapper>
    );
  }
}

export default Collections;