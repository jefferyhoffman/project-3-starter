import React, { Component } from "react";
// import Hero from '../../components/Hero/Hero'
// import { Row, Col, MDBContainer } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBCard, MDBCardBody, MDBBtn, MDBIcon } from
  "mdbreact";

const FormPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Checkout!</p>
        <MDBRow>
        <MDBCol md="6">
        <input type="text" placeholder="First Name" id="defaultFormContactNameEx" className="form-control" />
        </MDBCol>
        <MDBCol md="6">
        <input type="text" placeholder="Last Name" id="defaultFormContactNameEx" className="form-control" />
        </MDBCol>
        </MDBRow>
        <br />
        <input type="text" placeholder="Company Name" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <input type="text" id="form14" placeholder="House number and street name" class="form-control" />        
        <br />
        <input type="text" id="form15" placeholder="Apartment, suite, unit etc. (optional)" class="form-control"/>
        <br />
        <input type="text" placeholder="Postal Code / ZIP" id="defaultFormContactSubjectEx" className="form-control" />

        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    };

    export default FormPage;