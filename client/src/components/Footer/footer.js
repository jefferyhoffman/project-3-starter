import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdbreact";
const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4 m-auto">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="2">
            <h5  className="title elegant-color-dark">Slay Your Dragon</h5>
            <p className="black-text">
              Free yourself, stand for what  
              you believe in and never settle. 
            </p>
          </ MDBCol>
          <MDBCol md="2">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Mens</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Womens</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Supplements</a>
              </li>
            </ul>
          </ MDBCol>
          <MDBCol md="2">
            <h5 className="title">Mens</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Shirts</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pants</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Shorts</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sweat Shirts</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Womens</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Shirts</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Shorts</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pants</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sports Bras</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sweat Shirts</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Accessories</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Bags</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Hats</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Stickers</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Water Bottles</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="1">
            <h5 className="title">Supplements</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Protein</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pre-Workout</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Wellness</a>
              </li>
            </ul>
          </MDBCol>
        </ MDBRow>
      </ MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.saintgeorgeapparel.com"> SaintGeorgeApparel.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;