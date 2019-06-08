import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
// import DeleteBtn from "../../components/DeleteBtn";
import API from '../../lib/API'
import AuthContext from '../../contexts/AuthContext'

class SearchBooks extends Component {
  static contextType = AuthContext

  state = {
    searchFor: "",
    booksFound: []
  }

  handleSearch = (searchFor) => {
    API.Books.getBook(searchFor)
    .then(book => this.setState({
      booksFound: book.data
    }))
    .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <Jumbotron>
              <h3>Search for a book below</h3>
            </Jumbotron>

            <Input onChange={this.handleInputChange} name="searchFor" placeholder="search for a book..." value={this.state.searchFor} />
            <FormBtn onClick={() => this.handleSearch(this.state.searchFor)}>Search</FormBtn> <br />
            <div className="response" />
            <hr />
            <List>
              {this.state.booksFound.map(book =>
                <ListItem
                key={book._id}
                info={book}
                moreInfo={true}
                authToken={this.context.authToken}
                />)}
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
