import React from 'react';

const UserProfile = props => {
  return (
    <div>
      <h5>{props.user_name}</h5>
      <img src={props.user_url} alt='Profile' />
    </div>
  );
};

export default UserProfile;
