import React from 'react';
import '../../styles/jumbotron.css'

const styles = {
  h1: {
    fontSize: "120px",
    marginRight: "50px",
  }
}

function Hero() {
  return (
    <section className="hero is-medium">
      <div className="hero-body content">
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds">
              <h1 className="title" style={styles.h1}>
                Oddly Satisfying
      </h1>
              <h2 className="subtitle">
                <p>Content To Ampli-FI Your Mood</p>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
