import React, { useEffect, useState } from "react";
// import {Container} from 'react-bootstrap';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import "../MShirts/MShirts.css";
import Cards from "../../components/Cards/Cards";
import API from '../../lib/API'
const MShirts = ()=> {
    const [items, setItems] = useState([])
  
    useEffect(() => {
        // console.log(props.location.pathname)
        // const urlArray = props.location.pathname.split("/")
        // console.log(urlArray)
        // if(urlArray[2]==="shirts"){
        //     //some api call
        //     console.log('its a shirt')
        // }
        loadItems()
      }, [])

      function loadItems() {
        API.Products.getGender("Shirts","Mens")
          .then(res => {
            console.log(res.data)
            setItems(res.data)
          })
          .catch(err => console.log(err));
      };

  return (
    <div>
      <h2 className="title">Men's Shirts</h2>
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
export default MShirts;
