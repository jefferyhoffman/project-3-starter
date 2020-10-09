import React, { Component } from 'react';
import '../../styles/menu.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';


const styles = {
  menu: {
    position: "sticky",
    maxHeight: "100vw",
    marginTop: "10px"

  },
  font: {
    color: "black"
  },
  active: {
    backgroundColor: "grey"
  },

  main: {
    width: "100%",
    height: "150vh"
  }
}

class Menu extends Component {
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
      <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <div className="column is-narrow" >
          <aside className="menu sticky" style={styles.menu}>
            <ul className='menu-list'>
              <li>
                <a className="menu-label is-active" style={styles.active}>
                  General
            </a>

                <ul className="menu-list">
                  <li><a>Profile</a></li>
                  <li><a>Community</a></li>
                </ul>
              </li>
            </ul>
            <ul className="menu-list">
              <li>
                <a className="menu-label is-active" style={styles.active}>Daily Dose</a>
                <ul>
                  <li><Link to='/affirmations' onClick={this.toggleCollapse} style={styles.font}> Affirmations</Link></li>
                  <li><Link to="/mantras" onClick={this.toggleCollapse} style={styles.font}>Mantras</Link></li>
                  <li><Link to="/jokes" onClick={this.toggleCollapse} style={styles.font}>Jokes</Link></li>
                </ul>
              </li>
            </ul>
            <ul className='menu-list'>
              <li>
                <a className="menu-label is-active" style={styles.active}>Videos</a>
                <ul>
                  <li><Link to='/comedy' onClick={this.toggleCollapse} style={styles.font}>Comedian Corner</ Link></li>
                  <li><Link to='/bob' onClick={this.toggleCollapse} style={styles.font}>Bob Ross Channel</ Link></li>
                  <li><Link to='/breathing' onClick={this.toggleCollapse} style={styles.font}>Breathing Exercises</ Link></li>
                  <li><Link to='/odd' onClick={this.toggleCollapse} style={styles.font}>Oddly Satisfying</ Link></li>
                </ul>
              </li>
            </ul>
            <ul className='menu-list'>
              <li>
                <a className="menu-label is-active" style={styles.active}>Resources</a>
                <ul className="menu-list">
                  <li><Link to='/hotline' onClick={this.toggleCollapse} style={styles.font}>Suicide Hotline</ Link></li>
                  <li><Link to='/clinics' onClick={this.toggleCollapse} style={styles.font}>Clinics</ Link></li>
                </ul>
              </li>
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