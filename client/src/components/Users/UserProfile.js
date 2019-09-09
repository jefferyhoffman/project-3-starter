import React, { Component } from "react";

const UserProfile = props => {
  return (
    <div>
      <h5>{props.user_name}</h5>
      <img src={props.user_url} alt="user-photo" />
    </div>
  );
};

export default UserProfile;
