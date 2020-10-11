import React, { useEffect, useState } from "react";
import Menu from '../Menu/Menu';
import API from '../../lib/API'

class Affirmations extends React.Component{
    state = {
        result: []
    };

    componentDidMount() {
        this.resultAffirmation("")
    }

    resultAffirmation = data => {
        API.Affirmation.getAffirmation()
        .then(res => this.setState({ result: res.data.affirmation }))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                    {this.state.result.map(result => {
                        return <ul>
                    <li>{result.affirmation}</li>
                    </ul>
                    })}
                
            </div>
        )
    }
}

export default Affirmations;
