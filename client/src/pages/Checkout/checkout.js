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
 
          <MDBRow> 
            
            <MDBRow>
            <MDBCol md="12">
              <MDBCard
                className="z-depth-0"
                style={{ height: "384px", width: "220px" }}
              >
                {/* IMAGE */}
                <MDBView hover>
                  <MDBCardImage className="cardImg" src={lulu2} />
                  <MDBMask overlay="black-light" className="blackLight">
                    <MDBBtn className="hoverBtn" outline color="white">
                      View
                    </MDBBtn>
                  </MDBMask>
                </MDBView>


              </MDBCard>
            </MDBCol>
            </MDBRow>

            <MDBRow>
              
            <MDBCol md="6">
              <h5 className="text-left">Blue Shirt</h5>
              <p className="mb-3 text-left small">Shirt: Blue</p>
              <p className="mb-3 text-left small">Color: Blue</p>
              <p className="mb-3 text-left small">Size: M</p>
            </MDBCol>
            
            <MDBCol md="6">
              <MDBBtn fluid size="sm" className="inline">
                
                <i class="fas fa-minus"></i></MDBBtn>

              <input type="text" className="form-control w-25 inline" id="formGroupExampleInput" placeholder="1"/>  

              <MDBBtn fluid size="sm"  className="inline">
                <i class="fas fa-plus"></i></MDBBtn>
              <p>35.99</p>
            </MDBCol>
            </MDBRow>
        </MDBRow>
         

        {/* Card End */}
        {/* Product 2 */}

          {/* Card Start */}
 
          <MDBRow> 
            
            <MDBRow>
            <MDBCol md="12">
              <MDBCard
                className="z-depth-0"
                style={{ height: "384px", width: "220px" }}
              >
                {/* IMAGE */}
                <MDBView hover>
                  <MDBCardImage className="cardImg" src={lulu2} />
                  <MDBMask overlay="black-light" className="blackLight">
                    <MDBBtn className="hoverBtn" outline color="white">
                      View
                    </MDBBtn>
                  </MDBMask>
                </MDBView>


              </MDBCard>
            </MDBCol>
            </MDBRow>

            <MDBRow>
              
            <MDBCol md="6">
              <h5 className="text-left">Blue Shirt</h5>
              <p className="mb-3 text-left small">Shirt: Blue</p>
              <p className="mb-3 text-left small">Color: Blue</p>
              <p className="mb-3 text-left small">Size: M</p>
            </MDBCol>
            
            <MDBCol md="6">
              <MDBBtn fluid size="sm" className="inline">
                
                <i class="fas fa-minus"></i></MDBBtn>

              <input type="text" className="form-control w-25 inline" id="formGroupExampleInput" placeholder="1"/>  

              <MDBBtn fluid size="sm"  className="inline">
                <i class="fas fa-plus"></i></MDBBtn>
              <p>35.99</p>
            </MDBCol>
            </MDBRow>
        </MDBRow>
         

        {/* Card End */}
        {/* Product 3 */}
  {/* Card Start */}
 
          <MDBRow> 
            
            <MDBRow>
            <MDBCol md="12">
              <MDBCard
                className="z-depth-0"
                style={{ height: "384px", width: "220px" }}
              >
                {/* IMAGE */}
                <MDBView hover>
                  <MDBCardImage className="cardImg" src={lulu2} />
                  <MDBMask overlay="black-light" className="blackLight">
                    <MDBBtn className="hoverBtn" outline color="white">
                      View
                    </MDBBtn>
                  </MDBMask>
                </MDBView>


              </MDBCard>
            </MDBCol>
            </MDBRow>

            <MDBRow>
              
            <MDBCol md="6">
              <h5 className="text-left">Blue Shirt</h5>
              <p className="mb-3 text-left small">Shirt: Blue</p>
              <p className="mb-3 text-left small">Color: Blue</p>
              <p className="mb-3 text-left small">Size: M</p>
            </MDBCol>
            
            <MDBCol md="6">
              <MDBBtn fluid size="sm" className="inline">
                
                <i class="fas fa-minus"></i></MDBBtn>

              <input type="text" className="form-control w-25 inline" id="formGroupExampleInput" placeholder="1"/>  

              <MDBBtn fluid size="sm"  className="inline">
                <i class="fas fa-plus"></i></MDBBtn>
              <p>35.99</p>
            </MDBCol>
            </MDBRow>
        </MDBRow>
         

        {/* Card End */}
        
           

        </MDBCol>
      </MDBRow>
    </MDBContainer >
  );
};

export default FormPage;