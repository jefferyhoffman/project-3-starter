import React from "react";
import SignupForm from "../../components/SignupForm"
import "./style.css"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Signup(){
        return (
            <div className="mainPageColor"> 
            <React.Fragment>
                <br />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className="white-text">
                            <br/>                         
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum voluptas praesentium quod dolor adipisci! Ullam autem sapiente aliquid! Maiores a itaque in odio mollitia perspiciatis corporis soluta cupiditate esse!</h3>
                        </MDBCol>
                        <MDBCol>
                            <MDBCol>
                                <SignupForm/>
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        </div>
          )
    }
    
  

export default Signup;
