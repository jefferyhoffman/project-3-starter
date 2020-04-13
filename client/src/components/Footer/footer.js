import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Footer/footer.css";

class footer extends Component {
    render () {
        return (
            <div className="wrapper">
                 <footer className="page-footer">
                 <a href="/About">About</a>
                 {/* <Link
                    className="about-link"
                    to="/About"
                    onClick={this.toggleCollapse}
                  >
                   About
                  </Link> */}
                 </footer>
            </div>        
        )
    }
}

                     {/* <a href="https://github.com/MHargett23">Martin Hargett</a> | 
                     <a href="https://github.com/kffl3496"> Alex Stiles</a> | 
                     <a href="https://github.com/Ivyparade"> Owen Edwards</a> | 
                     <a href="https://github.com/zachmdws"> Zachary Meadows</a> */}

export default footer;