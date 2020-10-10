import React, { Component } from "react";
// import Hero from '../../components/Hero/Hero'
// import { Row, Col, MDBContainer } from "react-bootstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBView,
  MDBMask
} from
  "mdbreact";
import lulu2 from '../Checkout/lulu2.jpeg'
import CartCard from '../../components/CartCard'

const FormPage = () => {
  return (
    <MDBContainer>
      <br></br>
      <MDBRow>
        <MDBCol md="6">
        {/* Shipping Information */}
          <form id="shipping">
            <h4 className=" text-center mb-4">Shipping Address</h4>
            <MDBRow>
              <MDBCol md="6">
                <input type="text" placeholder="First Name" id="defaultFormContactNameEx" className="form-control" />
              </MDBCol>
              <MDBCol md="6">
                <input type="text" placeholder="Last Name" id="defaultFormContactNameEx" className="form-control" />
              </MDBCol>
            </MDBRow>
            <br />
            <input type="text" id="form14" placeholder="House number and street name" className="form-control" />
            <br />
            <input type="text" id="form15" placeholder="Apartment, suite, unit etc. (optional)" className="form-control" />
            <br />
            <input type="text" placeholder="Postal Code / ZIP" id="defaultFormContactSubjectEx" className="form-control" />
            <br />
            <input type="text" placeholder="City" id="defaultFormContactSubjectEx" className="form-control" />
            <br />
            <hr></hr>
            </form>
          {/* Credit Card Information */}
            <form id="cci">
            <h5 className=" text-center mb-4">Credit Card Information</h5>
            <input type="text" placeholder="Card Number" id="defaultFormContactSubjectEx" className="form-control" />
            <br />
            <input type="text" placeholder="Name on Card" id="defaultFormContactSubjectEx" className="form-control" />
            <br />
            <MDBRow>
              <MDBCol md="6">
                <input type="text" placeholder="Expiration Date (MM/YY)" id="defaultFormContactNameEx" className="form-control" />
              </MDBCol>
              <MDBCol md="6">
                <input type="text" placeholder="Security Code" id="defaultFormContactNameEx" className="form-control" />
              </MDBCol>
            </MDBRow>
            <br />
          </form>
          <hr></hr>
          <form id="billing">
            <h5 className=" text-center mb-4">Billiing Address</h5>
            <MDBRow>
              <MDBCol md="6">
                <input type="text" placeholder="First Name" id="defaultFormContactNameEx" className="form-control" />
              </MDBCol>
              <MDBCol md="6">
                <input type="text" placeholder="Last Name" id="defaultFormContactNameEx" className="form-control" />
              </MDBCol>
            </MDBRow>
            <br />
            <input type="text" id="form14" placeholder="House number and street name" className="form-control" />
            <br />
            <input type="text" id="form15" placeholder="Apartment, suite, unit etc. (optional)" className="form-control" />
            <br />
            <input type="text" placeholder="Postal Code / ZIP" id="defaultFormContactSubjectEx" className="form-control" />
            <br />
            <input type="text" placeholder="City" id="defaultFormContactSubjectEx" className="form-control" />
            <br />
            
            </form>
     </MDBCol>
        {/* Cart */}
        <MDBCol md="6"> 
          <h4 className=" text-center mb-4">Your Cart</h4>

            {/* Card Start */}
              <CartCard />
            {/* Card End */}
        
           

        </MDBCol>
      </MDBRow>
    </MDBContainer >
  );
};

export default FormPage;