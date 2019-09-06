import React, { Component } from 'react';
import {Table, TableHead, TableBody} from '../../components/Table/Table';
import { Link } from 'react-router-dom';
import Customer from '../Customer/Customer';
import API from '../../lib/API';



class Admin extends Component {
  state = {
    customers: []
  }

    componentDidMount(response) {
      API.Krystal.grab()
        // console.log(response)
        .then(response => {
          console.log(response)
          return this.setState({ customers: response.data })})
        .catch(err => console.log(err));
    }

    makeInactive(id){
      // e.preventDefault()
      // console.log("We got Clicked ");
      
    }
      
      render() {
        //this is where i'll console.log my state/props
        
        return (
          <div style={{position: 'relative', zIndex: 0}} >
            <Table>
              <TableHead>
              </TableHead>
              <TableBody>
                {console.log(this.state)}
                {this.state.customers.map(customer => {
                  // console.log(customer._id);
                  return (
                    <tr key={customer._id}>
                      <th scope="row"><Link to={"/customer/" + customer._id}>{customer.name}</ Link></th>
                      {customer.contacted ? (<td>Yes</td>) : (<td>No</td>)}
                      <td>{customer.date_contacted}</td>
                      <td><button onClick={() => this.makeInactive()} className="btn btn-danger btn-sm">X</button></td>
                    </tr>
                    )
                  })
                }
              </TableBody>
            </Table>
          </div>
        )
      }
}

export default Admin;
