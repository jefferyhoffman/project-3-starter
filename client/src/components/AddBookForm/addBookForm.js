import React, { Component } from 'react';

class addBookForm extends Component {
    state = {
        title: '',
        yourTitle: '',
        author: '',
        favorite: '',
        series: '',
        readingOrder: '',
        genre: '',
        imageUrl: '',
        isbn: '',
        haveRead: '',
        timesRead: '',
        own: '',
        want: '',
        synopsis: '',
        comments: ''
    };


    handleInput = event => {
        const { name, value } = event.target;

        this.setState ({
            [name]: value
        });
    }

    handleAddBook = event => {
        const { title, yourTitle, author, favorite, series, readingOrder, genre, imageUrl, isbn, haveRead, timesRead, own, want, synopsis, comments } = this.state;
        const newState = {...state}

        this.props.onAdd(title, yourTitle, author, favorite, series, readingOrder, genre, imageUrl, isbn, haveRead, timesRead, own, want, synopsis, comments);
        event.preventDefault();
    }
    
    render() {  //send to mySQL and add to that user
        const { title, yourTitle, author, favorite, series, readingOrder, genre, imageUrl, isbn, haveRead, timesRead, own, want, synopsis, comments } = this.state;
        const newState = {...state}
        return (
            //div form
        )

        
    }
} 