import React, { Component } from 'react';
import {Table, TableHead, TableBody} from '../../components/Table/Table';
import { Link } from 'react-router-dom';
import Customer from '../Customer/Customer';
import API from '../../lib/API';


class Admin extends Component {
  state = {
    customers: []
  }

    componentDidMount() {
      console.log('===========================')
      API.Krystal.grab()
        .then(response => this.setState({ customers: response }))
        .catch(err => console.log(err));
    }

    makeInactive(id){
      // e.preventDefault()
      // console.log("We got Clicked ");
        
        console.log("userId: " + id);
    }
      
      render() {
        //this is where i'll console.log my state/props
        return (
          <div>
            <Table>
              <TableHead>
              </TableHead>
              <TableBody>
                {this.state.customers.map(customer => {
                  console.log(customer.userId);
                  return (
                    <tr key={customer._id}>
                      <Link to={"/customer"}><th scope="row">{customer.name}</th></ Link>
                      {customer.contacted ? (<td>Yes</td>) : (<td>No</td>)}
                      <td>{customer.dateContacted}</td>
                      <td><button onClick={() => this.makeInactive(customer.userId)} className="btn btn-danger btn-sm">X</button></td>
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
