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
    const [search, setSearch] = useState("")
  
  
  //create a function that takes the input of the user (friend's email)
  const captureSearch = event => {
    setSearch(event.target.value)
    console.log(event.target.value)   
  }
  
  const handleSubmit = event => {
    event.preventDefault();
  }
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
              onChange={captureSearch}
              placeholder="Your friend's email address"
              type="email"
              name="email"
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
