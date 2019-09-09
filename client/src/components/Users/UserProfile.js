import React, { Component } from "react";
import "./UserProfile.css";

const UserProfile = props => {
  return (
    <div className="UserProfile">
      <h3 className="UserProfile_name">{props.user_name}</h3>
      <img className="UserProfile_img" src={props.user_url} alt="user-photo" />
    </div>
  );
};

export default UserProfile;
