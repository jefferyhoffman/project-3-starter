import React, { Component } from 'react';
import '../../styles/menu.css';


const styles = {
  menu: {
    position: "sticky",
    maxHeight: "100vw",
    marginTop: "10px"
  
},
  font: {
    color: "black"
  },
  main: {
    width: "100%",
    height: "150vh"
  }
}

class Menu extends Component {
  render() {
    return (
      <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <div className="column is-narrow" >
          <aside className="menu sticky" style={styles.menu}>

            <p className="menu-label" style={styles.font}>
              General
            </p>
            <ul className="menu-list">
              <li><a>Profile</a></li>
              <li><a>Community</a></li>
            </ul>
            <p className="menu-label" style={styles.font}>
              FYE
            </p>
            <ul className="menu-list">
              <li>
                <a className="is-active">Daily Dose</a>
                <ul>
                  <li><a style={styles.font}> Affirmations</a></li>
                  <li><a style={styles.font}>Mantras</a></li>
                  <li><a style={styles.font}>Jokes</a></li>
                </ul>
              </li>
              <a className="is-active">Videos</a>
              <ul>
              <li><a>Comedian Corner</a></li>
              <li><a>Bob Ross Channel</a></li>
              <li><a>Breathing Exercises</a></li>
              <li><a>Oddly Satisfying</a></li>
              </ul>
            </ul>
            <ul className="menu-list">
              <li>
                <a className="menu-label" style={styles.font}>Videos</a>
                <ul>
                  <li><a style={styles.font}>Comedian Corner</a></li>
                  <li><a style={styles.font}>Bob Ross Channel</a></li>
                  <li><a style={styles.font}>Breathing Exercises</a></li>
                  <li><a style={styles.font}>Oddly Satisfying</a></li>
                </ul>
              </li>
            </ul>
            <p className="menu-label" style={styles.font}>
              Resources
            </p>
            <ul className="menu-list">
              <li><a style={styles.font}>Suicide Hotline</a></li>
              <li><a style={styles.font}>Clinics</a></li>
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