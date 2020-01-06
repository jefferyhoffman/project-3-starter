import React, { Component } from 'react';
import SignupForm from "../../components/SignupForm"
import "./style.css"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import API from '../../lib/API';


class Signup extends Component {
    state = {
      error: ""
    }
  
    handleSubmit = (email, password, confirm) => {
      if (password !== confirm) {
        return this.setState({ error: "Passwords do not match." });
      }
  
      API.Users.create(email, password)
        .then(response => response.data)
        .then(user => console.log(user))
        .catch(err => this.setState({ error: err.message }));
    }
  
    render() {
        return (
            <div className="mainPageColor"> 
            <React.Fragment>
                <br />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className="white-text">
                            <br/>                         
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum voluptas praesentium quod dolor adipisci! Ullam autem sapiente aliquid! Maiores a itaque in odio mollitia perspiciatis corporis soluta cupiditate esse!</h3>
                        </MDBCol>
                        <MDBCol>
                            <MDBCol>
                                <SignupForm onSubmit={this.handleSubmit}/>
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        </div>
          )
    }  
  }


 
    
    
  

export default Signup;
