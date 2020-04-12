import React, { useContext, useEffect, useState } from "react";
import {Form, Button } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import FriendsDisplay from "../../components/FriendsDisplay";
import API from "../../lib/API";
import "./style.css";

const Friends = (props) => {
  const userInfo = useContext(AuthContext);
    const [friend, setFriend] = useState([]); //found friend that i will add to my friend's list
    const [email, setEmail] = useState("") //searched email
    const [foundFriend, setFoundFriend] = useState({
      name: "",
      email: ""
    }) //found email    
    const [error, setError] = useState("") //error message
    const [isFriendFound, setIsFriendFound] = useState("No search yet") //tracking what the user has done, if they have searched or not
  
  
  //create a function that takes the input of the user (friend's email)
  const handleInput = event => {
    setEmail(event.target.value);
    
  }
  //sends value to API to search if they are in our users table
  //then create a function to handle the response from API with either 0 or 1 results
  //send api response as props to child (CREATE COMPONENT e.g. followed friends) to display the result
  //if result is a found friend, child component needs to display a button to FOLLOW friend
  const handleSubmit = event => {
    event.preventDefault();
      
    API.Users.searchForUser(email)    
      .then(res => {
        console.log(res)
        if (res.data.status === "error") {
          // throw setError(res.data.message);
          // console.log(res.data.message)
          // setIsFriendFound("No friends found");
          console.log(res.data.message)
        } 
        
        setFoundFriend({name: res.data.name, email: res.data.email})
        setIsFriendFound("Friend found");

        setError({ results: res.data.message, error: "" });        
      })
      .catch(err => {
        if (err.response.status === 404) {
          setIsFriendFound("No friend found");
        }
        setError({ error: err.message })
      });
  };
  // console.log(foundFriend.name)
  
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
        { isFriendFound === "No search yet" ? <div></div> : isFriendFound === "No friend found" ?
        <div>
        <p>Sorry, we did not find your friend.</p>
        </div> : isFriendFound === "Friend found" ?
        <div>          
          <p>We found your friend! </p>
          <p>{foundFriend.name}</p>
          <p>{foundFriend.email}</p>
          <Button 
              className='btn btn_orange'
              type='submit'
              >Follow friend</Button>
        </div> :  <div></div>
        }   
        {/* INSERT COMPONENT WHERE WE PASS PROPS e.g. API results */}
        <FriendsDisplay/>
      </>
  )
}
  
export default Friends;
