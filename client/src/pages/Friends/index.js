import React, { useContext, useState } from "react";
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
      email: "",
      id: undefined
    }) //found email    
    const [error, setError] = useState("") //error message
    const [isFriendFound, setIsFriendFound] = useState("No search yet") //tracking what the user has done, if they have searched or not
    const [newFriend, setNewFriend] = useState() //save found friend for further API calls
    
    const handleInput = event => {
      setEmail(event.target.value);    
    }
      
    const handleSubmit = event => {
      event.preventDefault();
        
      API.Users.searchForUser(email)    
        .then(res => {
          console.log(res)
          if (res.data.status === "error") {
            throw setError(res.data.message);          
          } 
          setIsFriendFound("Friend found");
          setError({ results: res.data.message, error: "" });
          setFoundFriend({name: res.data.name, email: res.data.email, id: res.data.id})
          setNewFriend({name: res.data.name, email: res.data.email, id: res.data.id})
          // console.log(newFriend)
          // return newFriend;
          
        })
        .catch(err => {
          if (err.response.status === 404) {
            setIsFriendFound("No friend found");
          }
          setError({ error: err.message })
        });
        
    };
    
    //function to follow friend ///getting 404!!!
    const followFriend = () => {
      console.log(newFriend.email)
      console.log(userInfo.authToken)
      API.Users.addToThoseIFollow(newFriend.id, userInfo.authToken)
      .then(response => {
        console.log(response)
      })
    }

    //function to invite friend

    const inviteFriend = event => {
      console.log("inviting friend btn works")
      // btn works 
    }

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
              >Go!</Button>             
          </Form>          
          <div>
          { isFriendFound === "No search yet" ? <div></div> : isFriendFound === "No friend found" ?
          <div>
          <p className="p_text_dark">Looks like your friend has not joined Smaller Footprint. You can invite them to join and create their own Challenge to lessen their carbon footprint!</p>
          <Button 
                className='btn btn_orange'
                type='submit'
                onClick={inviteFriend}
                >Send invitation</Button>
          </div> : isFriendFound === "Friend found" ?
          <div>          
            <p className="p_text_dark"> We found your friend!</p>
            <p className="p_text_dark">{foundFriend.name}</p>
            <p className="p_text_dark">{foundFriend.email}</p>
            <Button 
                className='btn btn_orange'
                type='submit'
                onClick={followFriend}
                >Follow friend</Button>
          </div> :  <div></div>          
          }
          </div>             
          <FriendsDisplay/>
        </>
    )
}
  
export default Friends;
