// FUTURE DEVELOPMENT

import React, { Component } from 'react';
import "./UserProfile.css";
import Avatar from "./default-user.png";
import { Link } from "react-router-dom";



class userProfile extends Component {
    // state = {
    //     name: '',
    //     email: '',
    // };

    // handleInputChange = event => {
    //     const { name, value } = event.target;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    // handleSubmit = event => {
    //     const { name, email } = this.state;

    //     this.props.onSubmit(name, email);
    //     event.preventDefault();
    // }

    render() {
        // const { name, email } = this.state;


        return (
            <div className="container">
                <div className='UserProfileT'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1>User Profile</h1>
                            <img src={Avatar} className="userImage card-text" alt="Avatar" />
                            <form className='userProfile' onSubmit={this.handleSubmit}>

                                Name<br/>
                                Email<br/>
                                Shipping Address<br/>
                                Past Orders<br/>
                                Track Shipment<br/>
                              
                              <Link to="/UpdateProfile" className={window.location.pathname === "/UpdateProfile" ? "nav-link active" : "nav-link"}><button className="btn btn-secondary sub-button" onClick={this.toggleCollapse} type='submit'>Update Profile</button></Link>
                              </form>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default userProfile;