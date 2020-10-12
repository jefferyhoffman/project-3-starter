import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Navigation/nav.css";
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";

class Navslider extends Component {
render (){
  return(
<MDBContainer>
      <MDBRow>
        <MDBCol size="6">
          <MDBNav color="peach-gradient" className="font-weight-bold py-4 px-2 mb-4">
            <h5> Save 10%</h5>
          </MDBNav>
          </MDBCol>
          </MDBRow>
          </MDBContainer>
  )
}
}
export default Navslider;