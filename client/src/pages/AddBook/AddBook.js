import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import AddBookForm from '../../components/AddBookForm/addBookForm';


class AddBookPage extends Component {
    render() {
      return (
        <div className='Home'>
          <div className='row'>
            <div className='col'>
              <Jumbotron>
                <h1>WELCOME TO BOOK KEEPER </h1> <br/> <h3>Search for a book to add to your library of books!</h3>
              </Jumbotron>
              <div className={AddBookForm}>
                  
              </div>
              </div>
              </div>
              </div>


export default AddBookPage;