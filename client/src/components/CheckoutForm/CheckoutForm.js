import React, { Component } from 'react';

// import "/.Checkout.css"

class CheckoutForm extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardnumber: '',
        expmonth: '',
        expyear: ''
    };

    handleInputChange = event => {
        const { firstname, lastname, email, address, city, state, zip, cardnumber, expmonth, expyear, value } = event.target;

        this.setState({
            [(lastname, email)]: value,
            [email]: value,
            [firstname]: value,
            [address]: value,
            [city]: value,
            [state]: value,
            [zip]: value,
            [cardnumber]: value,
            [expmonth]: value,
            [expyear]: value


        });
    }
    handleSubmit = event => {
        const { firstname, lastname, email, address, city, state, zip, cardnumber, expmonth, expyear } = this.state;

        this.props.onSubmit(firstname, lastname, email, address, city, state, zip, cardnumber, expmonth, expyear);
        event.preventDefault();
    }

    render() {
        const { firstname, lastname, email, address, city, state, zip, cardnumber, expmonth, expyear } = this.state;

        return (
            <div className="row">
                <form className='CheckoutFom' onSubmit={this.handleSubmit}>
                    <div className="col-50">
                        <div className="container">
                            <span className="input-group-text">@</span>
                        </div>
                        <input
                            className='form-control'
                            type="firstname"
                            id="firstname"
                            name="firstname"
                            fullname='firstname'
                            placeholder="John M. Doe"
                            value ={firstname}
                            onChange={this.handleInputChange}
                            />
                         </div>

                        <div className="col-50">
                            <div className="container">
                                <span className="input-group-text">@</span>
                            </div>
                            <input
                                className='form-control'
                                type="lastname"
                                id="lastname"
                                name="lastname"
                                fullname='lastname'
                                placeholder="John M. Doe"
                                value ={lastname}
                                onChange={this.handleInputChange}
                                />
                         </div>
                         <div className="col-50">
                            <div className="container">
                                <span className="input-group-text">@</span>
                            </div>
                            <input
                                className='form-control'
                                type="email"
                                id="email"
                                name="email"
                                fullname='email'
                                placeholder="John M. Doe"
                                value ={email}
                                onChange={this.handleInputChange}
                                />
                         </div>
                         <div className="col-50">
                            <div className="container">
                                <span className="input-group-text">@</span>
                            </div>
                            <input
                                className='form-control'
                                type="address"
                                id="address"
                                name="address"
                                fullname='address'
                                placeholder="John M. Doe"
                                value ={address}
                                onChange={this.handleInputChange}
                                />
                         </div>
                         <div className="col-50">
                            <div className="container">
                                <span className="input-group-text">@</span>
                            </div>
                            <input
                                className='form-control'
                                type="city"
                                id="city"
                                name="city"
                                fullname='city'
                                placeholder=" "
                                value ={city}
                                onChange={this.handleInputChange}
                                />
                         </div>

                         <div className="col-50">
                            <div className="container">
                                <span className="input-group-text">@</span>
                            </div>
                            <input
                                className='form-control'
                                type="state"
                                id="state"
                                name="state"
                                fullname='state'
                                placeholder="John M. Doe"
                                value ={email}
                                onChange={this.handleInputChange}
                                />
                         </div>
                         <div className="col-50">
                            <div className="container">
                                <span className="input-group-text">@</span>
                            </div>
                            <input
                                className='form-control'
                                type="zip"
                                id="zip"
                                name="zip"
                                fullname='zip'
                                placeholder=" "
                                value ={zip}
                                onChange={this.handleInputChange}
                                />
                         </div>
                         <div className="col-50">
                            <div className="container">
                                <span className="input-group-text">@</span>
                            </div>
                            <input
                                className='form-control'
                                type="cardnumber"
                                id="cardnumber"
                                name="cardnumber"
                                fullname='cardnumber'
                                placeholder=" "
                                value ={cardnumber}
                                onChange={this.handleInputChange}
                                />
                         </div>
                         <div className="col-50">
                            <div className="container">
                                <span className="input-group-text">@</span>
                            </div>
                            <input
                                className='form-control'
                                type="expmonth"
                                id="expmonth"
                                name="expmonth"
                                fullname='expmonth'
                                placeholder="expmonth"
                                value ={expmonth}
                                onChange={this.handleInputChange}
                                />
                         </div>
                         <div className="col-50">
                            <div className="container">
                                <span className="input-group-text">@</span>
                            </div>
                            <input
                                className='form-control'
                                type="expyear"
                                id="expyear"
                                name="expyear"
                                fullname='expyear'
                                placeholder="expyear"
                                value ={expyear}
                                onChange={this.handleInputChange}
                                />
                         </div>
                         <button className='btn btn-primary' type='submit'>Login</button>
            </form>
          </div>
    
    )
  }
}
                                                                                                                                                                                                                                                  )
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                        
export default CheckoutForm;