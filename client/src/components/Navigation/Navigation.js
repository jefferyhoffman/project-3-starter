import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Navigation/nav.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBFormInline } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
// import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

class NavbarPage extends Component {
  state = {
    isOpen: true
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (
      
        <MDBNavbar color="elegant-color" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Saint George Athleisure</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBLink  to="/">Home</MDBLink>
              </MDBNavItem>
        {/* MENS */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                  <span className="mr-2">Mens</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu center className="dropdown-default">
                    <MDBDropdownItem href="/">Shirts</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Pants</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Shorts</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Sweat Shirts</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
        {/* WOMENS */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Womens</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu center className="dropdown-default">
                    <MDBDropdownItem href="#!">Shirts</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Shorts</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Pants</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Sports Bras</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Sweat Shirts</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
         {/* Accessories */}
                <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Accessories</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu center className="dropdown-default">
                    <MDBDropdownItem href="#!">Bags</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Hats</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Stickers</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Waterbottles</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
        {/* Accessories */}
               <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Supplements</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu center className="dropdown-default">
                    <MDBDropdownItem href="#!">Protein</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Pre-Workout</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Wellness</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to="/contact">Contact Us</MDBLink>
              </MDBNavItem>

            </MDBNavbarNav>
        {/* SEARCH BAR */}
            <MDBNavbarNav right>
            <MDBNavItem>
                <MDBLink to="/register">Register</MDBLink>
              </MDBNavItem>
            <MDBNavItem>
                <MDBLink to="/login">Login</MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to="/checkout"><i class="fa fa-shopping-cart"></i></MDBLink>
              </MDBNavItem>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        
      );
    }
  }
  
  export default NavbarPage;