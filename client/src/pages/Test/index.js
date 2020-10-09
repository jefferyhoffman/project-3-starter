import React, { useEffect, useState } from "react";
// import {Container} from 'react-bootstrap';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import "../Product.css";
import Cards from "../../components/Cards/Cards";
import API from '../../lib/API'
const WShorts = props=> {
    const [items, setItems] = useState([])
    const  [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    useEffect(() => {
        const product = cFL(props.match.params.product);
        const gender = cFL(props.match.params.gender);
        setFirst(product)
        setSecond(gender)
        loadItems()
        API.Products.getGender(product, gender)
        .then(res => {
          console.log(res.data)
          setItems(res.data)
        })
        .catch(err => console.log(err));
      }, [API.Products])

      function loadItems() {
       
      };
      function cFL(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  return (
    <div>
      <h2 className="title">{second} {first}</h2>
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
export default WShorts;
