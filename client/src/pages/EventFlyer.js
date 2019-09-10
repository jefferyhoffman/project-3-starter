import React from "react";
import Navigation from "../components/Navigation/Navigation"
import API from "../utils/API";
import "./Flyer.css";


class EventFlyer extends React.Component {

    state = {
        oneEvent: {}
    }

    componentDidMount() {
        this.getEvent();
    }

    getEvent = () => {
        API.findOne("events", this.props.match.params.id)
            .then((res) => {
                this.setState({ oneEvent: res.data })
                console.log(this.state.oneEvent);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="flyer-page">
                <Navigation />
                <div className="flyer">
                    <h1>{this.state.oneEvent.event_title}</h1>
                    {!this.state.oneEvent.event_url ? ""
                        : <img src={this.state.oneEvent.event_url} />}
                    {!this.state.oneEvent.event_place ? ""
                        : <h3>Where: {this.state.oneEvent.event_place}</h3>}
                    {!this.state.oneEvent.event_date ? ""
                        : <h3>When: {this.state.oneEvent.event_date.split("T")[0]}</h3>}
                    {!this.state.oneEvent.event_details ? ""
                        : <h3>Details: {this.state.oneEvent.event_details}</h3>}
                    {!this.state.oneEvent.html_url ? ""
                        : <h3><a href={this.state.oneEvent.html_url}>More Info Here</a></h3>}
                </div>
            </div>
        )
    }

}

export default EventFlyer;