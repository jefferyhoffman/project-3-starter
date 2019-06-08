import React, { Component } from 'react';
import '../DrinkFeaturePages/drinkfeaturepages.css'
import top5 from '../Images/top5.jpg'
// import { Link } from 'react-router-dom';
// import AuthContext from '../../contexts/AuthContext';
// import API from '../../lib/API';


class SherbetMimosa extends Component {
  render() {
    return (
      <div>
        <div className='container-mimosa'>
        <img className='mimosa' src={top5} alt='' />
          <h1>Sherbet Mimosa</h1>
          <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
            mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
            porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
            semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
            rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
        </div>
      </div>
    );
  }
}

export default SherbetMimosa;
