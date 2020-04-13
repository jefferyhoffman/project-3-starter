import React, {useState, useEffect, useContext} from "react";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";

//make a useEffect function with API call that sets friends as the result of the api call 
// maps api result to render
const FriendsDisplay = (props) => {
  const userInfo = useContext(AuthContext);
  const [friends, setFriends] = useState([]); //friends I follow from db

  useEffect(() => {
    console.log("useEffect works")
    API.Users.getThoseIFollow(userInfo.authToken)
    .then(response => {
      console.log(response)
      setFriends(response)
    })
    // .catch
  }, [])

    return (
      <>
        <div>

        </div>
      </>
    )
}

export default FriendsDisplay;