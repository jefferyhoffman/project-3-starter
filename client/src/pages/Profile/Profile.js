import React, { Component } from 'react';
import '../../styles/menu.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import Jokes from '../../components/JokesRoute/Jokes';
import AffirmationsApi from '../../components/Affirmation/AffirmationApi';


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
    backgroundColor: "#8D7183"
  },

  main: {
    width: "100%",
    height: "150vh"
  },
  // titles: {
  //   textAlign: "center",
  // },
  border: {
    borderColor: "red"
  },
  dose: {
    fontSize: "60px",
    fontFamily: "'Raleway', serif",
    color: "#718D7B",
    textAlign: "left",
    marginBottom: "60px",
    fontWeight: "bold"
  },
  inside: {
    marginRight: "-45px",
    marginBottom: "90px"
  },
  quote: {
    marginTop: "80px"
  },
  tile: {
    backgroundColor: "white",
    opacity: "80%"
  }

}

class Profile extends Component {
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
      <div><h1 style={styles.dose}>Daily Dose</h1>
        <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
          <div className="column is-narrow" >
            <aside className="menu sticky" style={styles.menu}>
              <ul className='menu-list'>
                <li>
                  <a className="menu-label is-active" style={styles.active}>
                    General
            </a>

                  <ul className="menu-list">
                    <li ><Link to='/profile' onCick={this.toggleCollapse} style={styles.font}>Profile</Link></li>
                    <li><Link to='/community' onCick={this.toggleCollapse} style={styles.font}>Community</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="menu-list">
                <li>
                  <a className="menu-label is-active" style={styles.active}>Mood Boosters</a>
                  <ul>
                    <li><Link to='/affirmations' onClick={this.toggleCollapse} style={styles.font}> Affirmations</Link></li>
                    <li><Link to="/mantras" onClick={this.toggleCollapse} style={styles.font}>Mantras</Link></li>
                    {/* <li><Link to="/jokes" onClick={this.toggleCollapse} style={styles.font}>Jokes</Link></li> */}
                  </ul>
                </li>
              </ul>
              <ul className='menu-list'>
                <li>
                  <a className="menu-label is-active" style={styles.active}>Videos</a>
                  <ul>
                    <li><Link to='/comedy' onClick={this.toggleCollapse} style={styles.font}>Comedy Corner</ Link></li>
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
                    <li><Link to='/hotline' onClick={this.toggleCollapse} style={styles.font}>Hotline</ Link></li>
                    <li><Link to='/clinic' onClick={this.toggleCollapse} style={styles.font}>Clinics</ Link></li>
                  </ul>
                </li>
              </ul>
            </aside>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-vertical is-parent" >
              <div className="tile is-child box" style={styles.tile}>
                <p className="title" style={styles.inside}>Daily Affirmation</p>
                <AffirmationsApi />
              </div>
              <div className="tile is-child box" style={styles.tile}>
                <p className="title" style={styles.inside}>Joke of the Day</p>
                <Jokes />
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <img src="https://images.squarespace-cdn.com/content/v1/5566620be4b0f5a055effbe7/1444012136978-S8WACKWBKQ5N733SCT14/ke17ZwdGBToddI8pDm48kF3Nq5Vh0E6btzUhEfxenawUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2X7xmk6LHg8rv0Y7Y5lYZVRH8P98fxlwmdp9hhh-n1DAKMshLAGzx4R3EDFOm1kBS/Mental+Health+Week+Statistics+Austraia?format=750w" className="card-img-top" alt="" />
                <p className="title"></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;