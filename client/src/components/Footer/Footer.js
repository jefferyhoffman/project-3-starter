import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {

  componentDidMount() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   
    let footer = document.getElementById("footer");
    if (footer.style.display === "none") {
      footer.style.display = "block";
    } else {
      footer.style.display = "none";
    }
  }

  render() {

    return (
      <div className="containerFooter">
          <div className="btn-holder"><button id="displayFooter" onClick={this.handleClick}>+</button></div>
          <div className="footer" id="footer">
              <div className="container">
                <div className="row" id="footerRow">
                  <div id="footerSec" className="col-4">Developers
                      <p id="footerItems">Yawo</p>
                      <p id="footerItems">Donnel</p>
                      <p id="footerItems">Courtney</p>
                      <p id="footerItems">Kong</p>
                  </div>
                  <div id="footerSec" className="col-4">See Our Works
                      <p id="footerItems">https://www.github.com/Tyawo/</p>
                      <p id="footerItems">https://www.github.com/Donferg0/</p>
                      <p id="footerItems">https://www.github.com/cm-cltdesigner</p>
                      <p id="footerItems">https://www.github.com/kyang0626/</p>
                  </div>
                  <div id="footerSec" className="col-4">Connect With Us
                      <p id="footerItems">https:/www.instagram.com/</p>
                      <p id="footerItems">https://www.facebook.com/</p>
                      <p id="footerItems">https://www.linkedin.com/</p>
                  </div>
                </div>
              </div>
              
          </div>
          <hr id="hrFooter" />
          <footer>© 2019 Koscoswix U.S. <br /> All rights reserved
          </footer>
      </div>
      
    );
  }
}

export default Footer;