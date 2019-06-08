import React,  { Component }from 'react';
import { CardElement } from 'react-stripe-elements';
import AuthContext from '../../contexts/AuthContext';

class CardSection extends Component {
  static contextType = AuthContext;

  
  render() {
    return (
      <>
        <label style={{ padding: '10px', float: 'right', width: '30%', backgroundColor: 'white', marginTop: '40px', marginRight: '20px', height: '200px', alignContent: 'center', textAlign: 'center', fontSize: '20px', borderRadius: '4px' }}>
          Payment details
        <br />
          <CardElement style={{ base: { fontSize: '20px', margin: '30px', padding: '10px' } }} />
        </label>
         <button style={{ margin: '40px', borderRadius: '4px' }}>Confirm order</button> 
      </>
    );
  }
}

export default CardSection;
