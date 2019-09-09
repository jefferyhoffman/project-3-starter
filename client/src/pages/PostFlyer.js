import React from "react";
import Navigation from "../components/Navigation/Navigation";
import API from "../utils/API";

class PostFlyer extends React.Component {
    state = {
        onePost: {}
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        API.findOne("posts", this.props.match.params.id)
            .then((res) => {
                this.setState({ onePost: res.data })
                console.log(this.state.onePost);
            })
            .catch(err => console.log(err));
    }

    // here's the info we have in state:
    // category: 
    // cost_per_hour: 
    // cost_per_service: 
    // help_needed: 
    // offering: 
    // post_details:
    // post_title: 
    // trade: 
    // urgent: 
    // __v: 
    // _id: 


    render() {
        return (
            <div className="flyer-page">
                <Navigation />
                <h1>{this.state.onePost.post_title}</h1>
            </div>
        )
    }

}

export default PostFlyer;