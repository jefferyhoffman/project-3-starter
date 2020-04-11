import React, { useContext, useEffect, useState } from "react";
import {Form, Button } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
// import Selected from "../../components/SelectedChallenges";
// import CreateChallenge from "../../components/CreateChallenge";
import API from "../../lib/API";
import "./style.css";

const Friends = (props) => {
  const userInfo = useContext(AuthContext);
    const [friend, setFriend] = useState([]);
    const [email, setEmail] = useState("") //searched email
    const [foundEmail, setFoundEmail] = useState("") //found email
    const [error, setError] = useState("") //error message
  
  
  //create a function that takes the input of the user (friend's email)
  const handleInput = event => {
    setEmail(event.target.value);
    console.log(event.target.value)
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(email)   
    // console.log("clicked")  WORKS
    API.Users.searchForUser(email)
    console.log(email)   
      .then(res => {
        if (res.data.status === "error") {
      //     // throw setError(res.data.message);
          console.log(res.data.message)
        }
        setError({ results: res.data.message, error: "" });
        console.log(res.data)
      })
      .catch(err => setError({ error: err.message }));
  };
  
  //sends value to API to search if they are in our users table
  
  //then create a function to handle the response from API with either 0 or 1 results
  //send api response as props to child (CREATE COMPONENT e.g. followed friends) to display the result
  //if result is a found friend, child component needs to display a button to FOLLOW friend
  return(
      <>
        <h3 className="h3_heading_dark">Search for a friend's email to follow them</h3>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formGroupEmail">            
            <Form.Control              
              placeholder="Your friend's email address"
              type="email"
              name="email"
              value={email}
              onChange={handleInput}
              required          
            />
          </Form.Group>
          <Button 
            className='btn btn_orange'
            type='submit'
            >Search</Button>
        </Form>
        {/* INSERT COMPONENT WHERE WE PASS PROPS e.g. API results */}
      </>
  )
}
  
export default Friends;
