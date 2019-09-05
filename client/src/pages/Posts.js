import React from "react";
import PostIt from "../components/Layout/PostIt";
import PostModal from "../components/Post/PostModal";
import API from "../utils/API";

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
        <h1>Help Wanted</h1>
        {/*passing getPosts to the add button so it can refresh*/}
        <PostModal PostModal={this.props.AddPost} />
        {/* <AddPost
          refreshPosts={this.getPosts}
        /> */}

        {!this.state.results.length ? (
          <h1>No Posts to Display</h1>
        ) : (
          this.state.results.length.map(post => {
            return (
              <PostIt
                key={post._id}
                title={post.title}
                summary={post.summary}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default Posts;
