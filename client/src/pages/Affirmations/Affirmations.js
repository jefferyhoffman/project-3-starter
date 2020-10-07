import React from "react";
import API from "../../Utils/AffirmAPI";



class Affirmations extends React.Component {
    state = {
        result: []

    };
    componentDidMount() {
        this.affirmationResults("")
    }
    affirmationResults = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.result.map(result => {
                    return <p>{result.affirmation}</p>
                })}
            </div>
        );
    }
}

export default Affirmations;