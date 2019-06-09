import React, { Component } from "react"
import { Link } from 'react-router-dom';
import "./style.css"


// import "./Confirmation"

class Footer extends Component {
    render() {
        return (
         <div>
           <br />
          <footer class="page-footer font-small green pt-4">
          
            <div class="container-fluid text-center text-md-left">
          
              <div class="row">
          
                <div class="col-md-6 mt-md-0 mt-3">
          
                  <h5 class="text-uppercase">Greenscapes</h5>
                  <p>*Requires purchase of annual plan. Special offer of 50% off is for first application only, for new residential EasyPay or PrePay customers only, and applies to lawns up to 5,000 square feet. For lawns more than 5,000 square feet or for the regular lawn application price for a lawn of any size, please call for estimate. Valid at participating Greenscapes locations. Availability of services may vary by geography. Not to be combined with or used in conjunction with any other offer or discount. Additional restrictions may apply. Consumer responsible for all sales tax.</p>
          
                </div>
          
                <hr class="clearfix w-100 d-md-none pb-3" />
          
                <div class="col-md-3 mb-md-0 mb-3">
          
                  <h5 class="text-uppercase">Contributors</h5>
          
                  <ul class="list-unstyled">
                    <li>
                      <a href="https://github.com/JackieCZhou">Jackie Zhou</a>
                    </li>
                    <li>
                      <a href="https://github.com/jmor485">Julie Morrison</a>
                    </li>
                    <li>
                      <a href="https://github.com/anniestew">Annie Stewart</a>
                    </li>
                    <li>
                      <a href="https://github.com/Mitchel34">Mitchel Carson</a>
                    </li>
                    <li>
                      <a href="https://github.com/dylanjwright">Dylan Wright</a>
                    </li>
                  </ul>
          
                </div>
          
                <div class="col-md-3 mb-md-0 mb-3">
          
                  <h5 class="text-uppercase">Links</h5>
          
                  <ul class="list-unstyled">
                    <li>
                      <a href="https://github.com/Mitchel34/lawnCare"><i class="fab fa-github"></i> Repository</a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-facebook"></i> Facebook</a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-twitter-square"></i> Twitter</a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-instagram"></i> Instagram</a>
                    </li>
                  </ul>
          
                </div>
          
              </div>
          
            </div>
          
            <div class="footer-copyright text-center py-3">About 
            <Link className='' to='/about' onClick={this.toggleCollapse}> Greenscapes</Link>
            </div>
          
          </footer>
          
          </div>
  


        )
    }
}
export default Footer;
