// import { Footer } from "react-bootstrap/lib/Modal";
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import CSS from '../../components/Footer/Footer.css'


class Footer extends Component {

    render() {
      return (
        <div id="footer">
         <div className="sticky-bottom">  
            <footer>
              <br></br><p id="footer"><strong> &copy; 2020: EquiPPE Inc. </strong> </p>
            </footer>
        </div>
          </div>
         
      );
    }
  }
  


export default Footer;
