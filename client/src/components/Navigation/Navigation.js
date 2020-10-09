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
            <strong className="white-text">Saint George Apparel</strong>
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
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/mens/shirts">Shirts</MDBDropdownItem>
                    <MDBDropdownItem href="/mens/pants">Pants</MDBDropdownItem>
                    <MDBDropdownItem href="/mens/shorts">Shorts</MDBDropdownItem>
                    <MDBDropdownItem href="/mens/sweatshirts">Sweat Shirts</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
        {/* WOMENS */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Womens</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/womens/shirts">Shirts</MDBDropdownItem>
                    <MDBDropdownItem href="/womens/shorts">Shorts</MDBDropdownItem>
                    <MDBDropdownItem href="/womens/pants">Pants</MDBDropdownItem>
                    <MDBDropdownItem href="/womens/sportsbras">Sports Bras</MDBDropdownItem>
                    <MDBDropdownItem href="/womens/sweatshirts">Sweat Shirts</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
         {/* Accessories */}
                <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Accessories</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/bags">Bags</MDBDropdownItem>
                    <MDBDropdownItem href="/hats">Hats</MDBDropdownItem>
                    {/* <MDBDropdownItem href="#!">Stickers</MDBDropdownItem> */}
                    <MDBDropdownItem href="/waterbottles">Waterbottles</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
        {/* Accessories */}
               <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Supplements</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/protein">Protein</MDBDropdownItem>
                    <MDBDropdownItem href="/preworkout">Pre-Workout</MDBDropdownItem>
                    <MDBDropdownItem href="/wellness">Wellness</MDBDropdownItem>
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