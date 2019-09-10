<<<<<<< HEAD
import React, { Component } from "react";
import "./UserProfile.css";
=======
import React from 'react';
>>>>>>> 766df15ab2293cb306e177b6ca4012fda37f11bb

const UserProfile = props => {
  const postImageArray = [
    "https://www.stickpng.com/assets/images/58889250bc2fc2ef3a1860ab.png",
    "https://www.stickpng.com/assets/images/588891f2bc2fc2ef3a1860a5.png"
  ];
  const postImage =
    postImageArray[Math.floor(Math.random() * postImageArray.length)];

  return (
    <div className="UserProfile">
      <img
        src={postImage}
        alt="url"
        className="roundImg"
        style={{ width: "60px " }}
      />
      <h3 className="UserProfile_name">{props.user_name}</h3>
      <img className="UserProfile_img" src={props.user_url} alt="user-photo" />
    </div>
  );
};

export default UserProfile;
