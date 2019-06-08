import React from "react";
import "./style.css";
// import BookCard from "../NoSassCard/Card"
import API from '../../lib/API'

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  let bookCoverStyle = {
    backgroundImage: `url(${props.info.imageURL})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    background: 'cover',
    backgroundSize: 140,
    height: 200,
    width: 140,
    margin: 15,
  }

  let addToLibrary = (authToken, book) => {
    // console.log(authToken, book, user)
    API.BookUsers.addToLibrary(authToken, book)
    .then(added => console.log(added.data))
    .catch(err => console.log(err))
  }


  let addORremove = props.myLibrary ? () => props.removeFromLibrary(props.authToken, props.info) : () => addToLibrary(props.authToken, props.info)

  let addORremove_text = props.myLibrary ? 'Remove book from your library' : 'Add book to your library'

  return (

    <li className='row'>
      <div className={props.moreInfo ? 'col-sm-3' : ''} style={bookCoverStyle} />
      {props.moreInfo ?
        <div className="col-sm-8">
          <h5>Title: {props.info.title}</h5>
          <h6>Author: {props.info.author}</h6>
          {props.info.series ? <p>Series: {props.info.series}</p> : null}
          {props.info.synopsis ? <p>Synopsis: {props.info.synopsis}</p> : null}
          <button onClick={addORremove}>{addORremove_text}</button>
        </div> : null}
    </li>

  )
}
