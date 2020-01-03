import React from 'react';
import UserCard from '../components/UserCard/UserCard.js';
import NavbarPage from '../components/TopNav/Nav.js';

function UserSettings () {
    return (
        <NavbarPage/>,
        <div>
            <UserCard/>
        </div>
    );
}

export default UserSettings;