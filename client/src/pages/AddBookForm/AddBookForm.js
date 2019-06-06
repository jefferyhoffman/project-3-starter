import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import AddBookForm from "../../components/AddBookForm/addBookForm";


class AddBookForm extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <Jumbotron>
              <h1>BOOK KEEPER </h1> <br /> <h3>Add a book to our library!</h3>
            </Jumbotron>
            <div className={AddBookForm}>

            </div>
          </div>
        </div>
      </div>

      }
  export default AddBookForm;