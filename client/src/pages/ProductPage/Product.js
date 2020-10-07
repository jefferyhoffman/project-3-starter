import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import lulu2 from '../../pages/ProductPage/lulu2.jpeg'


function Product (){
    return(
<MDBContainer>
<MDBRow>
    <MDBCol md = "4">
        <img src = {lulu2}/>
    </MDBCol>
</MDBRow>

</MDBContainer>
    )
}

export default Product