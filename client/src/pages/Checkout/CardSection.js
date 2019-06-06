import React from 'react';
import { CardElement } from 'react-stripe-elements';
// import Confirmation from '../Confirmation.js';
import { Link } from 'react-router-dom';

class CardSection extends React.Component {
  render() {
    return (
      <>
        <label style={{ padding: '10px', float: 'right', width: '30%', backgroundColor: 'white', marginTop: '40px', marginRight: '20px', height: '200px', alignContent: 'center', textAlign: 'center', fontSize: '20px', borderRadius: '4px' }}>
          Payment details
        <br />
          <CardElement style={{ base: { fontSize: '20px', margin: '30px', padding: '10px' } }} />
          <Link className="btn" style={{ margin: '40px', borderRadius: '4px' }} to='/Confirmation' onClick={this.toggleCollapse}> Confirm order</Link>
        </label>
      </>
    );
  }
}

export default CardSection;


