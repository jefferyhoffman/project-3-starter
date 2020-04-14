import React, {useState, useEffect, useContext} from "react";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";

//make a useEffect function with API call that sets friends as the result of the api call 
// maps api result to render
const FriendsDisplay = (props) => {
  const userInfo = useContext(AuthContext);
  const [friends, setFriends] = useState([]); //friends I follow from db
  const [hasFriends, setHasFriends] = useState("")

  useEffect(() => {
    console.log("useEffect works")
    API.Users.getThoseIFollow(userInfo.authToken)
    .then(response => {
      console.log(response.data)
      if (response.data.length > 0) {
        console.log("you have friends")
        setFriends(response.data)
        setHasFriends("you have friends")
      } else {        
        console.log("you have no friends")}
      
      // setFriends(response)
    })
    // .catch
  }, [])

    return (
      <>
        <div>
          {hasFriends === "you have friends" ? <p>Your Friends</p> : <></>}
          <ul>
          {friends.map(friend => (
          <li>{friend.email}</li>

        ))}            
          </ul>
        </div>
      </>
    )
}

export default FriendsDisplay;