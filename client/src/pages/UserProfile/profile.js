import React, { Component } from 'react';

    class Profile extends Component {
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
        return (
            <div>Test Profile</div>
        );
        }
    }

    export default Profile;