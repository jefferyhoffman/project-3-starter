import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';
 //npm install --save flexy-flipcards

class Cards extends Component {

        state = {
            title: '',
            author: '',
            imageUrl: '',
            series: '',
            synopsis: '',
            id: '',
        };

        handleInputChange = event => {
            const { name, value } = event.target;
    
            this.setState ({
                [name]: value
            });
        }
    
        handleCards = event => {
           const { title, author, imageUrl, series, synopsis, id } = this.state.book.map((book, id) => {
               return(
                   title={book.title},
                   author={book.author},
                   imageURL=(book.imageURL),
                   series={book.series},
                   synopsis={book.synopsis},
                   key={book.id}

               )
           });
    
            this.props.onCard(title, author, imageUrl, series, synopsis);
            event.preventDefault();
        }
//         FlexyFlipCard Requires Exactly Two Children ...The first child will be rendered on the front of the card. The second child will be rendered on the back.

// Set ref='flipper' Somewhere in Each Child ...The card component will search through your component tree and add an onClick funtion to whatever component has ref='flipper'
    render() {
        return (
            <FlexyFlipCard
                frontBackgroundColor="#B96aC9"
                backBackgroundColor="#231b1b"
            />
                <div{this.state.imageUrl}>
                    
                {/* Pass in whatever you want to be rendered on the front side of the card. Just make sure that somewhere in the component subtree, one child has a ref='flipper' attribute. An 'onClick' function will be added to it. */}
                </div>
                <div{this.state.}>
                {/* Pass in whatever you want to be rendered on the back side of the card. Just make sure that somewhere in the component subtree, one child has a ref='flipper' attribute. An 'onClick' function will be added to it. */}
                </div>
            </FlexyFlipCard>
        );
    }
}