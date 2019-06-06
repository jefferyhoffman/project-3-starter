import React, { Component } from 'react';

class AddBookForm extends Component {
    state = {
        title: '',
        author: '',
        imageUrl: '',
        series: '',
        synopsis: '',
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState ({
            [name]: value
        });
    }

    handleAddBook = event => {
       const { title, author, imageUrl, series, synopsis } = this.state;

        this.props.onAdd(title, author, imageUrl, series, synopsis);
        event.preventDefault();
    }
    
    render() {  //send to mySQL and add to that user
        const { title, author, imageUrl, series, synopsis } = this.state;
    
        return (
            <div className='AddBookForm'>
                <div className='card'>
                    <div className='card-body'>
                        <form className='AddBookForm' onAddBook={this.handleAddBook}>
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
                                    value={''}
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
                                    value={''}
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
                                    value={''}
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
                                    value={''}
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
                                    value={''}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <button className='btn btn-danger' type='AddBook'>Add Book</button>
                        </form>
                    </div>
                </div>
            </div>

        )

    }
}

export default AddBookForm;
