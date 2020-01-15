import React, { Component, useReducer } from 'react';
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

    handleLogout = () => {
      this.context.onLogout();
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
    const { user } = this.context;
      return (
        <div className="mainBodyColor">
            <React.Fragment>
                <br />
                <strong>
                <h1 className="text-left dashHeader">DashBoard</h1>
                </strong>
                <MDBContainer>
                    <br />
                    <br />
                    <MDBRow>
                        <MDBCol size="5">
                            <UserCard />
                        </MDBCol>
                        <MDBCol>
                            <br/>
                            <br/>
                            <br/>
                            <div className="text-left sideNav">
                            <MDBNavLink to="/Studio"><h3 className="sideNavText">Design Studio</h3></MDBNavLink>
                            <MDBNavLink to="/AboutUs"><h3 className="sideNavText">About Us</h3></MDBNavLink>
                            <MDBNavLink to="/FAQ"><h3 className="sideNavText">FAQ</h3></MDBNavLink>
                            <MDBNavLink to="#!" onClick={this.handleLogout}><h3 className="sideNavText">Logout</h3></MDBNavLink>
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