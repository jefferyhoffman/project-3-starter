import React, { Component } from "react";
import Alex from './Me.jpeg';
import "../About/About.css";

class About extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Title">
          About us
        </div>
        <div className="name-div">
          Alex Stiles
        </div>
        <div className="img-container">
          <img src={Alex} alt='websitelogo' className='img-div'/>
        </div>
        <div className="body-div">
          Here's a description of myself
        </div>
      </div>
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
