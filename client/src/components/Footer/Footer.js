// import { Footer } from "react-bootstrap/lib/Modal";
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/NavbarBrand'

class Footer extends Component {

    render() {
      return (
        <div>
         <div className="sticky-bottom">  
            <Navbar color="light" dark>
                <Container>
                    <NavbarBrand>&copy; 2020 Copyright: Git.PPE</NavbarBrand>
                </Container>
            </Navbar>
        </div>
          </div>
         
      );
    }
  }
  


export default Footer;
