import React, {Component} from 'react';
import { CardElement } from 'react-stripe-elements';
// import Confirmation from '../Confirmation.js';
import { Link } from 'react-router-dom';
import "./CardSection.css"

class CardSection extends Component {
  render() {
    return (
      <>
      
        <div className="card" style={{ padding: '10px', float: 'right', width: '30%', backgroundColor: 'white', marginTop: '40px', marginRight: '20px', height: '200px', alignContent: 'center', textAlign: 'center', fontSize: '20px', borderRadius: '4px' }}>
          Payment details
        <br />
          <CardElement style={{ base: { fontSize: '20px', margin: '30px', padding: '10px' } }} />
          <Link className="btn" style={{ margin: '40px', borderRadius: '4px' }} to='/confirmation' onClick={this.toggleCollapse}> Confirm order</Link>
        </div>

      </>
    );
  }
}

export default CardSection;


