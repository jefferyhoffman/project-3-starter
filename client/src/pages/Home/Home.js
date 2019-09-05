import React, { Component } from 'react';

import logo from './logo.png';

class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
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
          <div class="card" id="about">
            <div class="card-header">
              About
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
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
          </div>
        </div>
        <div className='row'>
          <div class="card" id="testimonials">
            <div class="card-header">
              Testimonials
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>Lorem ipsum</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
