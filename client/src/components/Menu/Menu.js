import React, { Component } from 'react';
import '../../styles/menu.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import Jokes from '../JokesRoute/Jokes';
import AffirmationsApi from '../Affirmation/AffirmationApi';



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
  },
  titles: {
    textAlign: "center"
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
  };

  
  render() {
    return (
      <div class="navbar-item has-dropdown is-hoverable">
              <hr class="navbar-divider" />
              <div class="navbar-dropdown">
                  <Link to='/profile' onClick={this.toggleCollapse} style={styles.font}>Profile</Link>
                  <Link to='/community' onCick={this.toggleCollapse} style={styles.font}>Community</Link>
                </div>
  

                <div class="navbar-dropdown">
                  <Link to='/affirmations' onClick={this.toggleCollapse} style={styles.font}> Affirmations</Link>
                  <Link to="/mantras" onClick={this.toggleCollapse} style={styles.font}>Mantras</Link>
                  <Link to="/jokes" onClick={this.toggleCollapse} style={styles.font}>Jokes</Link>
                </div>

              <hr class="navbar-divider" />
              <div class="navbar-dropdown">
                  <Link to='/comedy' onClick={this.toggleCollapse} style={styles.font}>Comedian Corner</ Link>
                  <Link to='/bob' onClick={this.toggleCollapse} style={styles.font}>Bob Ross Channel</ Link>
                  <Link to='/breathing' onClick={this.toggleCollapse} style={styles.font}>Breathing Exercises</ Link>
                  <Link to='/odd' onClick={this.toggleCollapse} style={styles.font}>Oddly Satisfying</ Link>
                </div>
      </div>
    );
  }
}

export default Menu;