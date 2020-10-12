import React, { Component } from "react";
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

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
  videos: {
    width: "450",
    height: "205"
  }
}

class Bob extends Component {
    render() {
      return (
       <div>
         <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <div className="column is-narrow is-parent" >
          <aside className="menu sticky" style={styles.menu}>
            <ul className='menu-list'>
              <li>
                <a className="menu-label is-active" style={styles.active}>
                  General
            </a>

                <ul className="menu-list">
                  <li ><a style={styles.font}>Profile</a></li>
                  <li><Link to='/community' onCick={this.toggleCollapse} style={styles.font}>Community</Link></li>
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
                  <li><Link to='/clinic' onClick={this.toggleCollapse} style={styles.font}>Clinics</ Link></li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
         <div className="column">
         <figure> {/* Video 1 */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VlucWfTUo1A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </figure>
         </div>
         <div className="column">
        <figure>
        <iframe width="424" height="238" src="https://www.youtube.com/embed/qx2IsmrCs3c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </figure>
        
         </div>
        
         </div>
         
       </div>
      );
    }
  }
  
  export default Bob;