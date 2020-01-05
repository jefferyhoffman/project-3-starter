import React from "react";
import FormPage from "../../components/SignInForm";
import "./LoginPage.css"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function SignIn() {
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
                                <FormPage />
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        </div>

    );
}

export default SignIn;
