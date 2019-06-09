import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
// import DeleteBtn from "../../components/DeleteBtn";
import API from '../../lib/API'
import AuthContext from '../../contexts/AuthContext'

class FavoriteBooks extends Component {
  static contextType = AuthContext

  state={
    myLibrary: []
  }

  componentDidMount(){
    API.BookUsers.viewMyLibrary(this.context.authToken)
    .then(library => this.setState({
      myLibrary: library.data
    }))
    .catch(err => console.log(err))
  }

  removeFromLibrary = (authToken, book) => {
    API.BookUsers.removeFromLibrary(authToken, book)
    .then(updatedLibrary => this.setState({
      myLibrary: updatedLibrary.data
    }))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.myLibrary)
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <Jumbotron>
              <h1>Library of all your Books!!!!</h1>
            </Jumbotron>
            {/* <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Add a Book</FormBtn>
            </form> */}
            <hr />
            {this.state.myLibrary ? <List>
              {this.state.myLibrary.map(book => <ListItem myLibrary={true} authToken={this.context.authToken} info={book} moreInfo={true}removeFromLibrary={this.removeFromLibrary}/>)}
            </List> : <h1>Your library appears to be a little empty...</h1>  }

          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteBooks;
