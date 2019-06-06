import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import AddBook from '../../components/AddBook/AddBook';


class AddBooks extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <Jumbotron>
              <h3>Add a book to your library of books!</h3>
            </Jumbotron>
            <div>
            <AddBook/>
            </div>
          </div>
        </div>
      </div>
    );
   }
}
  

export default AddBooks;