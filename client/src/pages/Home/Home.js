import React, { Component } from 'react';
import "./Home.css";
import "../../components/NewThreadButton/NewThreadButton"
import NewThreadButton from '../../components/NewThreadButton/NewThreadButton';
// import logo from './logo.svg';

var { DateTime } = require('luxon');
const Date = DateTime.local().toLocaleString(DateTime.DATETIME_MED); /* Luxon capturing date hour and time.*/

class HomePage extends Component {
  render() {
    return (
    <div>
      <div>
        <p>Welcome to The Cadenza forums! {Date}</p>
      </div>
    </div>
    );
  }
};











      
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
