import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
// import DeleteBtn from "../../components/DeleteBtn";

class SearchBooks extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <Jumbotron>
    <h3>Search for a book below</h3>
            </Jumbotron>

            <Input name="search" placeholder="search for a book..." />
            <FormBtn>Search</FormBtn> <br />
            <div className="response"/>
            <hr />
            <List>
              
              </List>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
