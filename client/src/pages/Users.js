import React from 'react';
import UserProfile from '../components/Users/UserProfile';
import API from '../utils/API';
import Navigation from '../components/Navigation/Navigation';

class Users extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    API.findAll('profiles')
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='container'>
        <Navigation />
        <div
          style={{
            border: '29px solid transparent',
            backgroundImage:
              "url('https://images.freeimages.com/images/large-previews/c3a/corkboard-1580988.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            borderImageSource:
              'url("http://res.cloudinary.com/cspaveljb/image/upload/v1499110958/corkborder_f8cm3g.png")',
            borderImageSlice: '29 29',
            borderImageWidth: '29px 29px',
            height: '100vh'
          }}
          className='users-board'
        >
          <h1>Your Neighbors</h1>
          {!this.state.results.length ? (
            <h1>No Neighbors to Display</h1>
          ) : (
            this.state.results.map(user => {
              return (
                <UserProfile
                  key={user._id}
                  name={user.name}
                  photo={user.photo}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default Users;
