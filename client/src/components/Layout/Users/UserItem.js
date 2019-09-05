import React, { Component } from 'react';
import "./style.css";

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div id="ok" className='card text-center'>
        <div>
          <img
            src={avatar_url}
            alt='url'
            className='roundImg'
            style={{ width: '60px ' }}
          />
          <h4>{login}</h4>
        </div>
        <div>
          <a href={html_url} className='btn btnDark btn-sm my1'>
            {' '}
            More{' '}
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
