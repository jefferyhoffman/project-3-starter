import React,  { Component }from 'react';
import { CardElement } from 'react-stripe-elements';
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class CardSection extends Component {
  handleCheckout = (date, services, id, cost, complete) => {
    console.log("hello");
    API.Services.checkout(date, services, id, cost, complete)
      .then(response => {
        this.setState({ redirectToReferrer: true })
      })
      .catch(err => {
        if (err.response.status === 401) {
          this.setState({ error: "Sorry. Please try again." });
        }
      });
  }
  render() {
    return (
      <>
        <label style={{ padding: '10px', float: 'right', width: '30%', backgroundColor: 'white', marginTop: '40px', marginRight: '20px', height: '200px', alignContent: 'center', textAlign: 'center', fontSize: '20px', borderRadius: '4px' }}>
          Payment details
        <br />
          <CardElement style={{ base: { fontSize: '20px', margin: '30px', padding: '10px' } }} />
        </label>
        <button style={{ margin: '40px', borderRadius: '4px' }} onClick={this.handleCheckout}>Confirm order</button>
      </>
    );
  }
}

export default CardSection;