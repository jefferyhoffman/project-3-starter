import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import lulu2 from "../../pages/ProductPage/lulu2.jpeg";
import AddCart from '../../components/AddCart/AddCart'
import Chatbot from 'react-chatbot-kit';
import ActionProvider from '../../components/Chatbot/ActionProvider';
import MessageParser from '../../components/Chatbot/MessageParser';
import config from '../../components/Chatbot/Config';
import API from "../../lib/API";

function Product(props) {
  const [product, setProduct] = useState({});
  console.log(product);
  useEffect(() => {
    API.Products.getProduct(props.match.params.id)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <MDBContainer fluid>

    <h2>{product.category}</h2>
      <hr className="solid"></hr>
      <MDBRow style={{ borderLeft: "1px solid lightGray" ,margin:"auto" }}>
        <MDBCol>
          <img src={product.photo} />
        </MDBCol>
        <MDBCol>
          <h4 style = {{fontWeight:"bold"}}>{product.name}</h4>
          <h6>{product.inventory[0].color}</h6>
          <h6>${product.price}</h6>
          <hr className="solid"></hr>
          <h6>Select Size</h6>
          <MDBBtn outline color = "black" size = "sm">xs</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">s</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">m</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">l</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">xl</MDBBtn>
          <MDBBtn color = "black" size = "lg" style = {{marginTop:"20px", marginBottom: "20px"}}>Add to Cart</MDBBtn>
          <h6 style = {{fontWeight:"bold"}}>Product Details</h6>
          <p>{product.description}</p>
          {/* <AddCart/> */}
          <i class="far fa-comments" style={{textDecoration: "underline",fontSize: 20}}> live chat</i>
          {/* <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} /> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  );
}

export default Product;
