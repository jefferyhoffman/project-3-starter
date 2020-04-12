import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Footer/footer.css";

class footer extends Component {
    render () {
        return (
            <div className="wrapper">
                 <footer className="page-footer">
                    <a href className='links' to='/pages/About/About.js'>About</a>
                 </footer>
            </div>        
        )
    }
}


export default footer;
