import React, { Component } from 'react';


class Menu extends Component {
    render() {
      return (
       
<aside className="menu">
  <p className="menu-label">
    General
  </p>
  <ul className="menu-list">
    <li><a>Profile</a></li>
    <li><a>Saved Items</a></li>
  </ul>
  <p className="menu-label">
    FYE
  </p>
  <ul className="menu-list">
    <li>
      <a className="is-active">Daily Inspo</a>
      <ul>
        <li><a>Affirmations</a></li>
        <li><a>Mantras</a></li>
        <li><a>Jokes</a></li>
      </ul>
    </li>
    <li><a>Videos</a></li>
    <li><a>Comedian Corner</a></li>
    <li><a>Bob Ross Channel</a></li>
    <li><a>Breathing Exercises</a></li>
  </ul>
  <p className="menu-label">
    Resources
  </p>
  <ul className="menu-list">
    <li><a>Suicide Hotline</a></li>
    <li><a>Clinics</a></li>
  </ul>
</aside>


      );
    }
  }
  
  export default Menu;