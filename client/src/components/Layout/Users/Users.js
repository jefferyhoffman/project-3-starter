import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        avatar_url:
          'https://s.pngix.com/pngfile/s/554-5540548_casual-link-wind-waker-randomizer-models-hd-png.png',
        login: 'hellojello',
        html_url: 'https://healthynibblesandbits.com/how-to-make-bubble-tea/'
      },
      {
        id: '2',
        avatar_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SR5AJr3A-cUbKKzZIZK_2_28hNn4w09zYqJLzR7V0Olj2AbBbg',
        login: 'byebyefrenchfry',
        html_url: 'https://healthynibblesandbits.com/how-to-make-bubble-tea/'
      },
      {
        id: '3',
        avatar_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0_E6OcHaH6vayHWZ6jpTFiUWmV50wuCO21Wolmlowd3Y2u8edw',
        login: 'chowcow',
        html_url: 'https://healthynibblesandbits.com/how-to-make-bubble-tea/'
      }
    ],
    renderUsers: true
  };

  render() {
    return (
      <div className='card text-center'>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
