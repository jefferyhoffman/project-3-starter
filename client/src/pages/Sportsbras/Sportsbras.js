import React, { useEffect, useState } from "react";
// import {Container} from 'react-bootstrap';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import "../Product.css";
import Cards from "../../components/Cards/Cards";
import API from '../../lib/API'
const Sportsbras = ()=> {
    const [items, setItems] = useState([])
  
    useEffect(() => {
     
        loadItems()
      }, [])

      function loadItems() {
        API.Products.getGender("Sports-Bras","Womens")
          .then(res => {
            console.log(res.data)
            setItems(res.data)
          })
          .catch(err => console.log(err));
      };

  return (
    <div>
      <h2 className="title">Women's Sportsbras</h2>
      <MDBContainer>
        <hr className="solid"></hr>
        <MDBRow style={{ borderLeft: "1px solid lightGray" }}>
          <MDBCol>
            <Cards 
                 items={items}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Sportsbras;
