import React, { Component } from 'react';
import {Menu, Button, Container, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

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

    return (
      <Menu size="massive" inverted className="navbar">
              <Container>
                <Menu.Item as={NavLink} to="/" active>
                  Home
                </Menu.Item>
                <Menu.Item position='right'>
                {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : (
                  <>
                  <Button as={NavLink} to="/login" inverted={true} color={"blue"}>
                    Log in
                  </Button>
                  <Button as={NavLink} to="/register" inverted={true} color={"green"} style={{ marginLeft: '0.5em' }}>
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
