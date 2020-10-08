import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import lulu2 from "../../pages/ProductPage/lulu2.jpeg";
import AddCart from '../../components/AddCart/AddCart'

function Product() {
  return (
    <MDBContainer fluid>

    <h2>Shirts</h2>
      <hr className="solid"></hr>
      <MDBRow style={{ borderLeft: "1px solid lightGray" ,margin:"auto" }}>
        <MDBCol>
          <img src={lulu2} />
        </MDBCol>
        <MDBCol>
          <h4 style = {{fontWeight:"bold"}}>Swiftly Breathe Short Sleeve</h4>
          <h6>Iron Blue</h6>
          <h6>$30 USD</h6>
          <hr className="solid"></hr>
          <h6>Select Size</h6>
          <MDBBtn outline color = "black" size = "sm">xs</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">s</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">m</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">l</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">xl</MDBBtn>
          <MDBBtn color = "black" size = "lg" style = {{marginTop:"20px", marginBottom: "20px"}}>Add to Cart</MDBBtn>
          <h6 style = {{fontWeight:"bold"}}>Product Details</h6>
          <p>a short description about the product and other unecessary information about the product. a short description about the product and other unecessary information about the product</p>
          {/* <AddCart/> */}
          <i class="far fa-comments" style={{textDecoration: "underline",fontSize: 20}}>live chat</i>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  );
}

export default Product;
