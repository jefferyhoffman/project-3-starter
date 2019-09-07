import React, { Component } from 'react';
import PropTypes from 'prop-types';
const image = 'community-app.jpg';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Community Connect',
    icon: '',
    image: image
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <div class='container'>
        <nav class='navbar navbar-expand-lg navbar-light bg-light'>
          <h1 className='navbar-brand'>
            {' '}
            <i className={this.props.icon}></i> {this.props.title}
          </h1>
        </nav>
      </div>
    );
  }
}

export default Navbar;
