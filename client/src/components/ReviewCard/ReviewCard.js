import React, { Component } from "react";
import {
  Card,
  Rating,
  Feed
} from "semantic-ui-react";



class ReviewCard extends Component {
  render() {
    let reviews = this.props.reviews

    return (
      <Card fluid>
          <Card.Content header="Reviews:"></Card.Content>
        <Feed>
          {reviews.map((review) => (
            <Feed.Event>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>{review.user}</Feed.User> posted a review!
                </Feed.Summary>
                <Feed.Extra text>{review.review}</Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Rating
                      icon="star"
                      defaultRating={review.stars}
                      maxRating={5}
                    ></Rating>
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
      </Card>
    );
  }
};

export default ReviewCard;