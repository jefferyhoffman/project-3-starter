import React from "react";
import Navigation from "../components/Navigation/Navigation"
import API from "../utils/API";


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

    // here's the info we have in state:
    // category: 
    // community: 
    // event_date: 
    // event_details: 
    // event_place: 
    // event_task: 
    // event_time: 
    // event_title: 
    // event_url: 
    // html_url: 
    // id: "1"
    // isTaskCompleted: false


    render() {
        return (
            <div className="flyer-page">
                <Navigation />
                <h1>{this.state.oneEvent.event_title}</h1>
            </div>
        )
    }

}

export default EventFlyer;