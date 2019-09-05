import React, { Component } from 'react';

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
              {/* <button onClick={this.makeInactive()} className="btn btn-primary btn-sm">Click Me</button> */}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Contacted</th>
                  <th scope="col">Date Contacted</th>
                  <th scope="col">Make Inactive</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.userData.map(person => {
                    console.log(person.userId);
                    return (
                    <tr key={person.userId}>
                        <th scope="row">{person.name}</th>
                        {person.contacted ? (<td>Yes</td>) : (<td>No</td>)}
                        <td>{person.dateContacted}</td>
                        <td><button onClick={() => this.makeInactive(person.userId)} className="btn btn-danger btn-sm">X</button></td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        )
      }
}

export default Admin;
