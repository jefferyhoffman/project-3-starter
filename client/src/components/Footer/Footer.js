import React, { Component } from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

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
      <div className="containerFooter" id="containerFooter">
          <div className="btn-holder"><button id="displayFooter" onClick={this.handleClick}>+</button></div>
          <div className="footer" id="footer">
              <div className="container" id="footerContainer">
                <div className="row" id="footerRow">
                  {/* <div id="footerSec" className="col-4">Developers
                      <p id="footerItems">Yawo Tsevi</p>
                      <p id="footerItems">Donnel Ferguson</p>
                      <p id="footerItems">Courtney Manery</p>
                      <p id="footerItems">Kong Yang</p>
                  </div> */}
                  <div id="footerSec" className="col-6">See Our Works
                      <p id="footerItems"><Link id="githubLinks" to="https://www.github.com/Tyawo/"><i id="devIcon" class="fab fa-github"></i>Yawo Tsevi</Link></p>
                      <p id="footerItems"><Link id="githubLinks" to="https://www.github.com/Donferg0/"><i id="devIcon" class="fab fa-github"></i>Donnel Ferguson</Link></p>
                      <p id="footerItems"><Link id="githubLinks" to="https://www.github.com/cm-cltdesigner"><i id="devIcon" class="fab fa-github"></i>Courtney Manery</Link></p>
                      <p id="footerItems"><Link id="githubLinks" to="https://www.github.com/kyang0626/"><i id="devIcon" class="fab fa-github"></i>Kong Yang</Link></p>
                  </div>
                  <div id="footerSec" className="col-6">Connect With Us
                      <div className="container">
                        <div className="row">
                          <div className="col-2"></div>
                          <div className="col-2">
                          <p id="footerIcons"><Link to="https://www.instagram.com/"><i id="instaIcon" class="fab fa-instagram fa-2x"></i></Link></p>
                          </div>
                          <div className="col-2">
                          <p id="footerIcons"><Link to="https://www.facebook.com/"><i id="fbIcon" class="fab fa-facebook fa-2x"></i></Link></p>
                          </div>
                          <div className="col-2">
                          <p id="footerIcons"><Link to="https://www.linkedin.com/"><i id="linkedIcon" class="fab fa-linkedin fa-2x"></i></Link> </p>
                          </div>
                          <div className="col-2"></div>
                          
                          
                          
                        </div>
                      </div>
                      
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