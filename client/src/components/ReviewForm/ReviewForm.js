import React, { Component } from "react";
import { Card, Rating, Button, Form } from "semantic-ui-react";
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class ReviewForm extends Component {
    static contextType = AuthContext;
    
    state = {
        RecipeId: "",
        stars: 5,
        review: "",
        error: ""
    }

    handleRatingChange = (e, rating) => {
        let ratingNum = rating.rating
        this.setState({
            stars: ratingNum
        })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        const { authToken } = this.context;

        const RecipeId = this.props.RecipeId
        
        const {
            stars,
            review
        } = this.state

        API.Reviews.create(
            authToken,
            review,
            stars,
            RecipeId
        ).then(response => console.log(response))
        .then(window.location.reload(false))
        .catch((err) => this.setState({ error: err.message }))
    }

    render() {

        const {
            review,
            stars
        } = this.state

        return(
            <Card fluid>
                <Card.Content>
                <Card.Header>Submit a Review</Card.Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field required>
                        <label>Rating</label>
                        <Rating 
                        id="stars"
                        name="stars"
                        className="starRating"
                        icon="star" 
                        defaultRating={stars} 
                        maxRating={5} 
                        onRate={this.handleRatingChange}
                        />
                    </Form.Field>
                    <Form.TextArea
                        required
                        label="Review"
                        placeholder="Review"
                        className="form-control"
                        id="review"
                        type="text"
                        name="review"
                        value={review}
                        onChange={this.handleInputChange}
                    />
                    <Button primary type="submit">Submit!</Button>
                </Form>
                </Card.Content>
            </Card>
        )
    }

}

export default ReviewForm