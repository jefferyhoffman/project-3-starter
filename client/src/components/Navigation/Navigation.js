import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Navigation/nav.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBFormInline,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
// import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';
import fav from '../Navigation/fav.gif'

class NavbarPage extends Component {
  state = {
    isOpen: true,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

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
              <MDBLink to="/">Home</MDBLink>
            </MDBNavItem>
            {/* MENS */}
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Mens</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/products/mens/shirts">
                    Shirts
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/products/mens/pants">
                    Pants
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/products/mens/shorts">
                    Shorts
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/products/mens/sweatshirts">
                    Sweat Shirts
                  </MDBDropdownItem>
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
                  <MDBDropdownItem href="/products/womens/shirts">
                    Shirts
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/products/womens/shorts">
                    Shorts
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/products/womens/pants">
                    Pants
                  </MDBDropdownItem>
                  {/* change waterbottle link */}
                  <MDBDropdownItem href="">Sports Bras</MDBDropdownItem>
                  <MDBDropdownItem href="/products/womens/sweatshirts">
                    Sweat Shirts
                  </MDBDropdownItem>
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
                  <MDBDropdownItem href="/products/category/bags">
                    Bags
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/products/category/hats">
                    Hats
                  </MDBDropdownItem>
                  {/* change waterbottle link*/}
                  <MDBDropdownItem href="">Waterbottles</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            {/* Accessories */}
            <MDBNavItem>
              <MDBLink to="/products/category/wellness">Wellness</MDBLink>
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
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
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
