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
            <ul className="menu-list" >
              <li><a style={styles.font}>Profile</a></li>
              <li><a style={styles.font}>Saved Items</a></li>
            </ul>
            <p className="menu-label" style={styles.font}>
              FYE
            </p>
            <ul className="menu-list">
              <li>
                <a className="menu-label" style={styles.font}>Daily Inspo</a>
                <ul>
                  <li><a style={styles.font}> Affirmations</a></li>
                  <li><a style={styles.font}>Mantras</a></li>
                  <li><a style={styles.font}>Jokes</a></li>
                </ul>
              </li>
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
        <div className="column" style={styles.main}>
        <div class="container">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
      </h2>
    </div>
        </div>
      </div>
    );
  }
}

export default Menu;