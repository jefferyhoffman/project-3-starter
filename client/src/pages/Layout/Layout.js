import React from "react";
// import {Container} from 'react-bootstrap';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import "../Layout/Layout.css";
import Cards from "../../components/Cards/Cards";

function Layout() {
  return (
    <div>
      <h2 className="title">Shirts</h2>
      <MDBContainer>
        <hr className="solid"></hr>
        <MDBRow style={{ borderLeft: "1px solid lightGray" }}>
          <MDBCol>
            <Cards />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Layout;
