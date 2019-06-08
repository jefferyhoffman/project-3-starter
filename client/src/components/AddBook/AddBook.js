import React, { Component } from 'react';
import API from "../../lib/API";

class AddBook extends Component {
    state = {
        title: '',
        author: '',
        imageURL: '',
        series: '',
        synopsis: '',
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleAddBook = event => {
        event.preventDefault()
        const { title, author, imageURL, series, synopsis } = this.state;
        let newBook = {
            title,
            author,
            imageURL,
            series,
            synopsis
        }

        API.Books.createBook(newBook);
    }

    render() {  //send to mySQL and add to that user
        //    const { title, author, imageUrl, series, synopsis } = this.state;

        return (
            <div className='AddBook'>
                <div className='card'>
                    <div className='card-body'>
                        <form className='AddBook'>
                            <div className='input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input
                                    className='form-control'
                                    id='title'
                                    type='text'
                                    name='title'
                                    placeholder='Title'
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input
                                    className='form-control'
                                    id='author'
                                    type='text'
                                    name='author'
                                    placeholder='Author'
                                    value={this.state.author}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input
                                    className='form-control'
                                    id='imageURL'
                                    type='text'
                                    name='imageURL'
                                    placeholder='Image URL'
                                    value={this.state.imageURL}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input
                                    className='form-control'
                                    id='series'
                                    type='text'
                                    name='series'
                                    placeholder='Series'
                                    value={this.state.series}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">a3b</span>
                                </div>
                                <input
                                    className='form-control'
                                    id='synopsis'
                                    type='textarea'
                                    name='synopsis'
                                    placeholder='Synopsis'
                                    value={this.state.synopsis}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <button onClick={() => this.handleAddBook} className='btn btn-danger' type='AddBook'>Add Book</button>
                        </form>
                    </div>
                </div>
            </div>

        )

    }
}

export default AddBook;
