import React, { Component } from 'react';
import "./ThankYou.css";
import { Link } from 'react-router-dom';




class ThankYou extends Component {

  render() {

    return (
        <div className="containerThankYou">
            <p id="thankYouP">Thank You for Shopping with Us</p>
            <Link id="thankyouLink" to="/"><p id="thankyouSub">Go Back to Homepage</p></Link>
        </div>

    );
  }
}

export default ThankYou;