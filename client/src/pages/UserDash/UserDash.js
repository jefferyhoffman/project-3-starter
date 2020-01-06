import React, { Component } from 'react';
import UserCard from '../../components/UserCard/UserCard.js';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBNavLink } from "mdbreact";
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class UserDash extends Component {
    static contextType = AuthContext;
  
    state = {
      isLoading: true,
      error: ""
    }
  
    componentDidMount() {
      API.Secrets.getAll(this.context.authToken)
        .then(response => response.data)
        .then(secrets => this.setState({ secrets }))
        .catch(err => {
          if (err.response.status === 401) {
            return this.setState({ error: "Unauthorized. Please login." });
          }
  
          console.log(err);
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  
    render() {
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
                                <div className="text-left sideNav">
                                <MDBNavLink to="/Studio"><h3>Design Studio</h3></MDBNavLink>
                                <br/>
                                <MDBNavLink to="/Studio"><h3>Saved Designs</h3></MDBNavLink>
                                <br/>
                                <MDBNavLink to="/Studio"><h3>Profile</h3></MDBNavLink>
                                <br/>
                                <MDBNavLink to="/Studio"><h3>Tutorial</h3></MDBNavLink>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </React.Fragment>
    
            </div>
        );
    
    }
  }







export default UserDash;