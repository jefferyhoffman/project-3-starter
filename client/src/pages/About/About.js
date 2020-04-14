import React, { Component } from "react";
import Alex from './Me.jpeg';
import AboutUS from './About.png';
import Contact from './Contact.png';
import "../About/About.css";

class About extends Component {
  render() {
    return (
      <div className="Container">
        <div className="about-div">
          <img src={AboutUS} alt='websitelogo' className='img-div'/>
        </div>
        <div className="about-us-container">
          <div className="about-us-content">
            The Cadenza forums™ is the brainchild between 4 junior web-developers who sought to create a forum/discussion board that allowed users to post and reply to threads on various musical subjects.  A unique feature to the site that's still in development is the ability to post music-notation to one another in replies.
          </div>
        </div>
        <div className="contact-div">
          <img src={Contact} alt='websitelogo' className='img-div'/>
        </div>
        <div className="name-div">
            Alex Stiles
          </div>
          <div className="body-div">
          [GitHub] <a href="/https://github.com/kffl3496" className="about-color">https://github.com/kffl3496</a>
        </div>
        <div className="name-div">
            Zach Meadows
          </div>
          <div className="body-div">
          [GitHub] <a href="/https://github.com/zachmdws" className="about-color">https://github.com/zachmdws</a>
        </div>
        <div className="name-div">
            Owen Edwards
          </div>
          <div className="body-div">
          [GitHub] <a href="/https://github.com/Ivyparade" className="about-color">https://github.com/Ivyparade</a>
        </div>
        <div className="name-div">
            Martin Hargett
          </div>
          <div className="body-div">
          [GitHub] <a href="/https://github.com/MHargett23" className="about-color">https://github.com/MHargett23</a>
        </div>          
      </div>
    
      // </div>
    //   <div className="Title">
    //     The Cadenza Team
    //     <div className="container">
    //       <div className="team-member-name">
    //         <img src="../me.jpeg" className="img-fluid my-image"></img>
    //           <div className="description-div">
    //           Here's a description of myself
    //           </div>
    //       </div>
    //   </div>
    // </div>
    );
  }
}

        {/* <About className="About">
          Martin Hargett | [GitHub](https://github.com/MHargett23) | [LinkedIn](https://www.linkedin.com/in/martin-hargett-28ba2b1a2/)<br/>
          Alex Stiles | [GitHub](https://github.com/kffl3496)<br/>
          Owen Edwards | [GitHub](https://github.com/Ivyparade) | [LinkedIn](https://www.linkedin.com/in/martin-hargett-28ba2b1a2/)<br/>
          Zachary Meadows | [GitHub](https://github.com/zachmdws) | [LinkedIn](https://www.linkedin.com/in/owen-edwards-49663919a/)
        </About> */}

export default About;
