import React, { Component } from 'react';
import './style.css'
import logo from './logo.png'

class HomePage extends Component {
  state = {
    hover: false
  };
  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  };
  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = { backgroundColor: ' #2da1e9', cursor: 'pointer' }
    } else {
      linkStyle = { backgroundColor: '#1d71b6' }
    }
    return (
      <div className='Home'>
        <div id='header'>
          <div className='col'>
            <p>Phone: 980-267-7483</p>
          </div>
          <div className='col'>
            <h2>Welcome to</h2>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
          <div className='col'>
            <p>E-Mail: krystalklearaquariums@gmail.com</p>
          </div>
        </div>
        <div className='row'>
          <div className="card" id="about">
            <div className="card-header">
              About
            </div>
            <div className="card-body" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
              <blockquote className="blockquote mb-0">
                <p>Hello, my name is Matt, I started Krystal Klear Aquariums in early 2019.
                    We currently service Charlotte, NC and the surrounding area. I've had and maintained
                    my own tanks since I was 11. I started professionally when I was 15 and started working.
                    </p>
                <p>We can setup tanks, aquariums, or ponds and maintain them for you. If you are having issues
                    keeping fresh, salt, or brackish waters clean we have you covered. Is there a fish you are
                    looking for? We may be able to find it for you as well.
                    </p>
              </blockquote>
            </div>
            <div class="card-footer">
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="card hoverable" id="testimonials">
            <div className="card-header">
              Testimonials
            </div>
            <div className="card-body" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
              <blockquote className="blockquote">
                <p>Matt is a professional, knowledgeable, and does a great job all around...
                  I would highly recommend Krystal Klear Aquariums!! A++
                </p>
                <footer class="blockquote-footer">Wendy Beardsley <cite title="Source Title">Facebook recommendations</cite></footer>
              </blockquote>
              <blockquote className="blockquote">
                <p>This is by far the best pond maintenance I have ever dealt with.
                  Great deals from a great guy!!!  You'll be very happy with the results!!
                </p>
                <footer class="blockquote-footer">Jordan Paris <cite title="Source Title">Facebook recommendations</cite></footer>
              </blockquote>
            </div>
            <div class="card-footer">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
