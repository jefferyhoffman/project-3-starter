import React, { Component } from 'react';
import "./style.css";

class Footer extends Component {

   DisplayFooter() {
    let DpF = document.getElementById("footer");
    if (DpF.style.display === "none") {
      DpF.style.display = "block";
    } else {
      DpF.style.display = "none";
    }
  
  }

  render() {

    return (
       
        
        <div className="container">
        <div className="btn-holder"><button>click me</button></div>
            <div className="row" id="footer">
            
                <div className="col-2">testing</div>
                <div className="col-2">testing</div>
                <div className="col-2">testing</div>
                <div className="col-2">testing</div>
                <div className="col-2">testing</div>
                <div className="col-2">testing</div>
            </div>
        </div>
    );
  }
}

export default Footer;