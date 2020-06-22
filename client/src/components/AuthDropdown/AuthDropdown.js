/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import Gravatar from 'react-gravatar';
import AuthContext from '../../contexts/AuthContext';

const AuthDropdown = (props) => {
  const userContext = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    userContext.onLogout();
    props.onClick();
  };

  const dropdownMenuClass = `dropdown-menu dropdown-menu-right ${isOpen && 'show'}`;

  return (
    <li className="nav-item dropdown">
      <button className="btn btn-link dropdown-toggle" onClick={() => setIsOpen(prev => !prev)} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <Gravatar className="rounded-circle" email={userContext.user.email} size={30} /> {userContext.user.email}
      </button>
      <div className={dropdownMenuClass} aria-labelledby="navbarDropdown">
        <div className="dropdown-item" onClick={handleLogout}>Logout</div>
      </div>
    </li>
  );

};

export default AuthDropdown;
