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

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        const { authToken } = this.context;

        const { RecipeId } = this.props.RecipeId
        
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
                        onChange={this.handleInputChange}
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