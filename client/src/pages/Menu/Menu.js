import React, { Component } from 'react';
import '../../styles/menu.css';


const styles= {
  menu: {
    backgroundColor: "white",   
    backgroundOpacity: "15%", 
    marginTop: "10px"
  }
}

class Menu extends Component {
  render() {
    return (
      <div className="columns is-fullheight">
       <div className="column is-2 is-sidebar-menu is-hidden-mobile">
          <aside className="menu" style={styles.menu}>
            
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
              <li><a>Oddly Satisfying</a></li>
            </ul>
            <p className="menu-label">
              Resources
            </p>
            <ul className="menu-list">
              <li><a>Suicide Hotline</a></li>
              <li><a>Clinics</a></li>
            </ul>
          </aside>
        </div>
        <div className="column is-main-content">

        </div>
      </div>
    );
  }
}

export default Menu;