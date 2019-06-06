import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
// import DeleteBtn from "../../components/DeleteBtn";

class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <Jumbotron>
              <h1>WELCOME TO BOOK KEEPER </h1> <br/> <h3>Below are a list of our book...........click login/register to get started</h3>
            </Jumbotron>

           
            <div className="response"/>
            <hr />
            <List>
              1.book
              2.book
              3.book
              </List>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
