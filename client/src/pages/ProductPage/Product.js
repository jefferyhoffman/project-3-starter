import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import lulu2 from "../../pages/ProductPage/lulu2.jpeg";

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
          <h6>$30 USD</h6>
          <hr className="solid"></hr>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  );
}

export default Product;
