import React from 'react';
import UserCard from '../../components/UserCard/UserCard.js';
import './style.css'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function UserDash() {
    return (
        <div className="mainBodyColor">
            <React.Fragment>
                <br />
                <strong>
                <h1 className="text-left">DashBoard</h1>
                </strong>
                <MDBContainer>
                    <br />
                    <br />
                    <br />
                    <MDBRow>
                        <MDBCol>
                            <UserCard />
                        </MDBCol>
                        <MDBCol>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div className="text-left sideNav">
                            <h3>Design Studio</h3>
                            <br/>
                            <h3>Saved Designs</h3>
                            <br/>
                            <h3>Profile</h3>
                            <br/>
                            <h3>Tutorial</h3>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </MDBContainer>
            </React.Fragment>

        </div>
    );
}

export default UserDash;