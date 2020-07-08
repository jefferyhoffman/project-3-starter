import React, { Component } from 'react';
import Provider from '../../components/Provider'

import Card from '../../components/Card/Card'

class Game extends Component {
  render() {
    return (
      <Provider>

      
        <div className="columns is-centered">
       
        <Card />
        
        </div>
        
      
      </Provider>
    );
  }
}

export default Game;
