import React, { Component } from 'react';
import {Table, TableHead, TableBody} from '../../components/Table/Table';
import { Link } from 'react-router-dom';
import Customer from '../Customer/Customer';

class Admin extends Component {
  state = {
    userData:
        [
            {
              name: "Jim",
              contacted: true,
              dateContacted: "2 / 2 / 2019",
              userId: 1
            },
            {
              name: "Dave",
              contacted: true,
              dateContacted: "3 / 17 / 2019",
              userId: 2

            },
            {
              name: "Tom",
              contacted: false,
              dateContacted: "6 / 9 / 2019",
              userId: 3

            }
        ]
  }

    componentDidMount(){
      this.mapFunc()
    }

      //functions here
    mapFunc = () => {
          this.state.userData.map( person => console.log(person))
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
                {this.state.userData.map(person => {
                  console.log(person.userId);
                  return (
                    <tr key={person.userId}>
                      <Link to={"/customer"}><th scope="row">{person.name}</th></ Link>
                      {person.contacted ? (<td>Yes</td>) : (<td>No</td>)}
                      <td>{person.dateContacted}</td>
                      <td><button onClick={() => this.makeInactive(person.userId)} className="btn btn-danger btn-sm">X</button></td>
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
