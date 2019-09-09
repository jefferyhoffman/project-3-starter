import React from "react";
import PostPostIt from "../components/PostIt_Post/PostPostIt";
import PostModal from "../components/Posts/PostModal";
import API from "../utils/API";
import Navigation from "../components/Navigation/Navigation";

class Posts extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    API.findAll("posts")
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="posted-board">
        <div className = "container">
        <Navigation/>
        <h3>Help Wanted </h3>
        <h3>&amp;</h3>
        <h3>Services Offered</h3>
        {/*passing getPosts to the add button so it can refresh*/}
        <PostModal PostModal={this.props.AddPost} />
        {/* <AddPost
          refreshPosts={this.getPosts}
        /> */}
        {!this.state.results.length ? (
          <h1>No Posts to Display</h1>
        ) : (
          this.state.results.map(post => {
            return (
              <PostPostIt
                key={post._id}
                post_title={post.post_title}
                post_details={post.post_details}
                category={post.category}
                urgent={post.urgent}
                help_needed={post.help_needed}
                offering={post.offering}
                cost_per_hour={post.cost_per_hour}
                cost_per_service={post.cost_per_service}
                trade={post.trade}
                _id={post._id}
              />
            );
          })
        )}
      </div>
      </div>
    );
  }
}

export default Posts;
