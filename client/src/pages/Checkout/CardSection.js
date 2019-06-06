import React from 'react';
import { CardElement } from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <>
        <label style={{ padding: '10px', float: 'right', width: '30%', backgroundColor: 'white', marginTop: '40px', marginRight: '20px', height: '200px', alignContent: 'center', textAlign: 'center', fontSize: '20px', borderRadius: '4px' }}>
          Payment details
        <br />
          <CardElement style={{ base: { fontSize: '20px', margin: '30px', padding: '10px' } }} />
          <button style={{ margin: '40px', borderRadius: '4px' }} to='/Confirmation'>Confirm order</button>
        </label>
      </>
    );
  }
}

export default CardSection;


