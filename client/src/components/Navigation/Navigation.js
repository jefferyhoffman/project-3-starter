import React, {useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

const Navigation = () => {
  const userContext = useContext(AuthContext);
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => setCollapsed(prev=>!prev);
  const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
  const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

  return (
    <div className='Navigation'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
        <Link className='navbar-brand' to='#'>Project 3</Link>
        <button className={togglerClass} onClick={toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className={targetClass} id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/' onClick={toggleCollapse}>Home</Link>
            </li>
            {userContext.user &&
              <li className='nav-item'>
                <Link className='nav-link' to='/secret' onClick={toggleCollapse}>Secret</Link>
              </li>}
          </ul>
          <ul className='navbar-nav'>
            {userContext.user
              ? <AuthDropdown onClick={toggleCollapse} />
              : <li className='nav-item'><Link className='nav-link' to='/login' onClick={toggleCollapse}>Login/Register</Link></li>}
          </ul>
        </div>
      </nav>
    </div>
  );

};

export default Navigation;
