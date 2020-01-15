import React, { Component } from "react";
import {
  MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import AuthContext from '../../contexts/AuthContext';

class IndexNAV extends Component {
  static contextType = AuthContext;
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleLogout = () => {
    this.context.onLogout();
    //this.props.onClick();
  }

  render() {
    const { user } = this.context;
    

    return (
      <MDBNavbar dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">futurum est nostrum</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/UserDash">DashBoard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Saved Cards</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/FAQ">FAQ</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBBtn  tag="a" size="sm" floating gradient="purple" rounded onClick={this.handleLogout} >
              <p><MDBIcon onClick={this.handleLogout} icon="sign-out-alt "/> Sign Out</p>
            </MDBBtn>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default IndexNAV;