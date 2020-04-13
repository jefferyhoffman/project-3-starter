import React, { Component } from "react";
import "./Home.css";
import "../../components/NewThreadButton/NewThreadButton"
import NewThreadButton from '../../components/NewThreadButton/NewThreadButton';
import Footer from '../../components/Footer/footer';
import Particles from 'react-particles-js';
// import logo from './logo.svg';

// particlesJS.load(@dom-id, @path-json, @callback (optional));
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

var { DateTime } = require("luxon");
const Date = DateTime.local().toLocaleString(
  DateTime.DATETIME_MED
); /* Luxon capturing date hour and time.*/

class HomePage extends Component {
  render() {
    return (
    <div>
      <div>
        <p>Welcome to The Cadenza forums! {Date}</p>
        <Particles />
      </div>
      {Footer}
    </div>
    )
  }
}

//       <div className='Home'>
//         <div className='row'>
//           <div className='col'>
//             <img src={logo} className='App-logo' alt='logo' />
//             <p>
//               Edit <code>src/pages/Home.js</code> and save to reload.
//             </p>
//             <a
//               className='App-link'
//               href='https://reactjs.org'
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default HomePage;
