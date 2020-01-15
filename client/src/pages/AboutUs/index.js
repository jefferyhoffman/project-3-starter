import React, { Component, useReducer } from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBNavLink, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle,MDBCardText, MDBBtn } from "mdbreact";
import { defaultProps } from 'react-gravatar';
import IndexNav from '../../components/IndexNAV'

class AboutUs extends Component {


    render() {
        return (
            <div className='mainBodyColorAboutUs'>
                <React.Fragment>
                    <IndexNav />
                    <MDBRow>
                        <MDBCol></MDBCol>
                        <MDBCol className='paddingLeftAboutMe' size='3'>
                            <MDBCard cascade>
                                <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
                                <MDBCardBody cascade>
                                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='paddingRightAboutMe' size='3'>
                            <MDBCard cascade>
                                <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
                                <MDBCardBody cascade>
                                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol></MDBCol>
                        <MDBCol className='paddingLeftAboutMe' size='3'>
                            <MDBCard cascade>
                                <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
                                <MDBCardBody cascade>
                                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='paddingRightAboutMe' size='3'>
                            <MDBCard cascade>
                                <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
                                <MDBCardBody cascade>
                                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol></MDBCol>
                    </MDBRow>
                </React.Fragment>
            </div >
        )

    }
}

export default AboutUs;