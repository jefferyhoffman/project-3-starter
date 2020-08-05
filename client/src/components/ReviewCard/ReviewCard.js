import React, { Component } from "react";
import {
  Card,
  Rating,
  Feed
} from "semantic-ui-react";



class ReviewCard extends Component {
  render() {
    let reviews = this.props.reviews
    console.log(reviews)

    return (
      <Card fluid>
          <Card.Content>
            <Card.Header>Reviews:</Card.Header>
        <Feed>
          {reviews.map((review) => (
            <Feed.Event key={review ? review.id : null}>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>{review ? review.User.username : null}</Feed.User> posted a review!
                </Feed.Summary>
                <Feed.Extra text>{review? review.review : "Review Not Found"}</Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Rating
                      icon="star"
                      defaultRating={review ? review.stars : 0}
                      maxRating={5}
                    ></Rating>
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
          </Card.Content>
      </Card>
    );
  }
};

export default ReviewCard;