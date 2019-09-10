import React from "react";
import Navigation from "../components/Navigation/Navigation";
import API from "../utils/API";
import "./Flyer.css";

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


    // post_details:
    // trade: 


    render() {
        return (
            <div className="flyer-page">
                <Navigation />
                <div className="flyer">
                    {!this.state.onePost.urgent ? ""
                        : <h1 className="urgent">URGENT!</h1>}
                    {!this.state.onePost.help_needed ? ""
                        : <h1>Help Needed: {this.state.onePost.post_title}</h1>}
                    {!this.state.onePost.offering ? ""
                        : <h1>Offering: {this.state.onePost.post_title}</h1>}
                    {!this.state.onePost.post_details ? ""
                        : <h3>{this.state.onePost.post_details}</h3>}
                    {!this.state.onePost.cost_per_hour ? ""
                        : <h3>Hourly Rate: ${this.state.onePost.cost_per_hour}</h3>}
                    {!this.state.onePost.cost_per_service ? ""
                        : <h3>Pay: ${this.state.onePost.cost_per_service}</h3>}
                    {!this.state.onePost.trade ? ""
                        : <h4>Willing to trade</h4>}

                </div>
            </div>
        )
    }

}

export default PostFlyer;