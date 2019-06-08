import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../lib/API"

class HomePage extends Component {

  state = {
    latestBooks: []
  }

  componentDidMount() {
    console.log('hello world')
    API.Books.getBooks()
      .then(books => {
        console.log(books.data)
        this.setState({
          latestBooks: books.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <Jumbotron>
              <h1>WELCOME TO BOOK KEEPER </h1> <br /> <h3>Below are a list of our books...........click login/register to get started</h3>
            </Jumbotron>


            <div className="response" />
            <hr />
            {/* <List> */}
            <div style={{ display: 'flex' }}>

              {this.state.latestBooks.map(book =>
                <ListItem
                  key={book._id}
                  info={book}
                />)}
            </div>
            {/* </List> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
