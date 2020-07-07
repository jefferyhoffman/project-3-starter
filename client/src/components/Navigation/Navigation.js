import React, { Component } from 'react';
import {Menu, Button, Container, Image, MenuHeader} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Navigation.css'
import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      // <div className='Navigation'>
      //   <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
      //     <Link className='navbar-brand' to='#'>Project 3</Link>
      //     <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      //       <span className='navbar-toggler-icon'></span>
      //     </button>

      //     <div className={targetClass} id='navbarSupportedContent'>
      //       <ul className='navbar-nav mr-auto'>
      //         <li className='nav-item'>
      //           <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
      //         </li>
      //         {user &&
      //           <li className='nav-item'>
      //             <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
      //           </li>}
      //       </ul>
      //       <ul className='navbar-nav'>
      //         {user
      //           ? <AuthDropdown onClick={this.toggleCollapse} />
      //           : <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login/Register</Link></li>}
      //       </ul>
      //     </div>
      //   </nav>
      // </div>

      <Menu
              fixed="true"
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Search</Menu.Item>
                {/* <Menu.Item><Image className="logo" src={require("../../assets/images/megabitesLogo.png")}/></Menu.Item> */}
                <Menu.Item position='right'>
                {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : (
                  <>
                  <Button as='a'>
                    Log in
                  </Button>
                  <Button as='a' inverted="false" primary="true" style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                  </>
                )
              }
              </Menu.Item>
              </Container>
            </Menu>
    );
  }
}

export default Navigation;
