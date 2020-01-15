import React, { Component, useReducer } from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBNavLink, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon, MDBLink, MDBNavItem} from "mdbreact";
import { defaultProps } from 'react-gravatar';
import IndexNav from '../../components/IndexNAV'
import Parker from '../../images/ParkerHeadshot.jpg'
import Jean from '../../images/JeanHeadShot.jpeg'
import Michael from '../../images/MichaelHeadShot.jpg'
import Gabriel from '../../images/GabrielHeadShot.jpeg'

class AboutUs extends Component {


    render() {
        return (
            <div className='mainBodyColorAboutUs'>
                <React.Fragment>
                    <IndexNav />
                    <MDBRow className='paddingBottomAboutMe paddingTopAboutMe'>
                        <MDBCol></MDBCol>
                        <MDBCol className='paddingLeftAboutMe' size='3'>
                            <MDBCard cascade>
                                <MDBCardImage cascade className="JeanHeadShot" src={Jean}/>
                                <MDBCardBody cascade>
                                    <MDBCardTitle>Jean Tubay</MDBCardTitle>
                                    <MDBCardText>Full-Stack Web Developer successful in collaborative team environments, reaching creative and innovative solutions and refining competency in various languages. Experienced in developing responsive consumer-focused web sites utilizing JavaScript, CSS, React.js, Node, Express.js, and jQuery.</MDBCardText>
                                    <MDBRow>
                                            <MDBCol>
                                                <MDBBtn tag="a" floating gradient="purple">
                                                    <MDBIcon fab icon="linkedin-in" />
                                                </MDBBtn>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBBtn tag="a" floating gradient="purple">
                                                    <MDBIcon fab icon="github" />
                                                </MDBBtn>
                                            </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='paddingRightAboutMe' size='3'>
                            <MDBCard cascade>
                                <MDBCardImage cascade className="ParkerHeadShot" src={Parker}/>
                                <MDBCardBody cascade>
                                    <MDBCardTitle>John Parker</MDBCardTitle>
                                    <MDBCardText>I am an established leader seasoned by my years in hospitality and manufacturing, prepared to transition into a role as a full stack web developer. From childhood, I discovered a passion for tinkering with electronics and designing implementations for solutions to problems I was intrigued by. My love for technology was in full swing by the time I was building my first computer at age ten and watching it post.</MDBCardText>
                                    <MDBRow>
                                            <MDBCol>
                                                <MDBBtn tag="a" floating gradient="purple">
                                                    <MDBIcon fab icon="linkedin-in" />
                                                </MDBBtn>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBBtn tag="a" floating gradient="purple">
                                                    <MDBIcon fab icon="github" />
                                                </MDBBtn>
                                            </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol></MDBCol>
                        <MDBCol className='paddingLeftAboutMe' size='3'>
                            <MDBCard cascade>
                                <MDBCardImage cascade className="MichaelHeadShot" src={Michael}/>
                                <MDBCardBody cascade>
                                    <MDBCardTitle>Michael Trpak</MDBCardTitle>
                                    <MDBCardText>A full stack web developer and a degree in communication studies with interpersonal communication skills grown through my work as a supervisor. I strive in a group atmosphere and work well collaboratively. I'm looking forward to continuing my learning and expanding my knowledge in a every growing industry. </MDBCardText>
                                    <MDBRow>
                                            <MDBCol>
                                                <MDBBtn tag="a" floating gradient="purple">
                                                    <MDBIcon fab icon="linkedin-in" />
                                                </MDBBtn>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBBtn tag="a" floating gradient="purple">
                                                    <MDBIcon fab icon="github" />
                                                </MDBBtn>
                                            </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='paddingRightAboutMe' size='3'>
                            <MDBCard cascade>
                                <MDBCardImage cascade className="GabrielHeadShot" src={Gabriel}/>
                                <MDBCardBody cascade>
                                    <MDBCardTitle>Gabriel Mangum</MDBCardTitle>
                                    <MDBCardText>I am a certified full stack web developer from the University of North Carolina Charlotte.  I bring to the table a mastery of both technology (which I have gained over the last year) as well as a proficiency in team leadership and community management from my 3+ years of working in a non profit capacity. I desire to become a member of a team where I can exceed all expectations set for me.</MDBCardText>
                                    <MDBRow>
                                            <MDBCol>
                                                <MDBBtn tag="a" floating gradient="purple">
                                                    <MDBIcon fab icon="linkedin-in" />
                                                </MDBBtn>
                                            </MDBCol>
                                            <MDBCol>
                                                    <MDBNavLink to="https://github.com/GabrielTMangum" target="_blank">
                                                        <MDBBtn tag="a" floating gradient="purple">
                                                            <a>
                                                            <MDBIcon fab icon="github" />
                                                            </a>
                                                        </MDBBtn>
                                                    </MDBNavLink>
                                            </MDBCol>
                                    </MDBRow>
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


