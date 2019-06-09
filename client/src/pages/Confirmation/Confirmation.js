import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Confirmation extends Component {

    render() {
        return (
            <div className="Container" style={{ padding: '10px', width: '40%', backgroundColor: 'white', marginLeft: '30%', merginRight: '30%', height: '400px', alignContent: 'center', textAlign: 'center', fontSize: '20px', borderRadius: '4px' }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <div className="card-header">
                                <p className="heading lead" style={{fontSize: '30px'}}>Order Placed!</p>
                            </div>
                            <p className="text-center">
                                <strong>Your order has been placed, a lawn care specialist will contact you 24hrs before your appointment.</strong></p>
                                <Link className='btn btn-outline-warning waves-effect' to='/ClientHome'>Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Confirmation; 