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
      <div className="container">
          <div className="btn-holder"><button id="displayFooter" onClick={this.handleClick}>+</button></div>
          <div className="footer" id="footer">
              <div className="container">
                <div className="row">
                  <div className="col-2">testing</div>
                  <div className="col-2">testing</div>
                  <div className="col-2">testing</div>
                  <div className="col-2">testing</div>
                  <div className="col-2">testing</div>
                  <div className="col-2">testing</div>
                </div>
              </div>
              
          </div>
      </div>
    );
  }
}

export default Footer;