import React from "react";
import "./style.css";

function Footer(){
    return(
        <footer className="page-footer font-small animated slideInLeft">
        {/* <!-- Copyright --> */}
        <div className="footer-copyright text-center">
          © 2020 Copyright: 
          <a href="https://github.com/ccollins1975/farm-fresh-market">
            Farm Fresh Market </a>
          and powered by Charlotte Agricultural Tracking Services (C.A.T.S.)
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    );
}
export default Footer;