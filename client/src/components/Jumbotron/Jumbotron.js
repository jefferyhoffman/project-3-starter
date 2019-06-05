import React, { Component } from 'react';

// import AuthContext from '../../contexts/AuthContext';
// import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';
import Navigation from '../../components/Navigation/Navigation';
// import Login from '../../pages/LoginForm/LoginForm';

// import { Link } from 'react-router-dom';
import "../Jumbotron/jumbotron.css";

// import AuthContext from '../../contexts/AuthContext';
// import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';


class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid" id="jumbo">
                <div className="container">
                    <Navigation />
                    {/* <Login/> */}
                    <h1 className="display-4">Drinkstation</h1>
                    <p className="lead">Your ultimate stop for Drinks</p>
                </div>
            </div>

        );
    }
}

export default Jumbotron;